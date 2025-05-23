// Remove "use server" - not needed for route handlers
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const symptoms = searchParams.get("symptoms");

    // Add logging to debug environment variable
    console.log("BACKEND_URL:", process.env.BACKEND_URL);
    console.log("Symptoms:", symptoms);

    if (!symptoms) {
      return Response.json(
        { message: "No symptoms provided" },
        { status: 400 }
      );
    }

    const BACKEND_URL = process.env.BACKEND_URL;

    if (!BACKEND_URL) {
      console.error("BACKEND_URL environment variable is not set");
      return Response.json(
        { message: "Backend URL not configured" },
        { status: 500 }
      );
    }

    // Ensure the URL is properly formatted
    const backendUrl = BACKEND_URL.endsWith("/")
      ? `${BACKEND_URL}predict?symptoms=${symptoms}`
      : `${BACKEND_URL}/predict?symptoms=${symptoms}`;

    console.log("Fetching from:", backendUrl);

    const response = await fetch(backendUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // Add timeout to prevent hanging requests
      signal: AbortSignal.timeout(10000), // 10 seconds
    });

    console.log("Backend response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Backend error:", errorText);
      return Response.json(
        {
          message: "Error fetching prediction from server",
          details: errorText,
          status: response.status,
        },
        { status: 500 }
      );
    }

    const data = await response.json();
    console.log("Backend response data:", data);

    return Response.json(data, { status: 200 });
  } catch (error) {
    console.error("Route handler error:", error);

    // Handle different types of errors
    if (error.name === "AbortError") {
      return Response.json(
        {
          message:
            "Request timeout - backend server may be slow or unavailable",
        },
        { status: 504 }
      );
    }

    if (error.code === "ENOTFOUND" || error.message.includes("fetch")) {
      return Response.json(
        {
          message: "Cannot connect to backend server - check if URL is correct",
        },
        { status: 502 }
      );
    }

    return Response.json(
      {
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
