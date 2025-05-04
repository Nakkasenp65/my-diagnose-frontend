"use server";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const symptoms = searchParams.get("symptoms");
  const BACKEND_URL = process.env.BACKEND_URL;
  const response = await fetch(`${BACKEND_URL}predict?symptoms=${symptoms}`);
  if (response.status !== 200) {
    return Response.json(
      { message: "Error fetching prediction from server." },
      { status: 500 }
    );
  } else {
    const data = await response.json();
    return Response.json(data, { status: 200 });
  }
}
