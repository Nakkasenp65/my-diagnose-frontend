import "./style.scss";
import LayoutMargin from "@/components/LayoutMargin";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "โปรเจค FastDiag",
  description: "ตรวจสุขภาพด้วย Ai จาก Naive Bayes Model",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <LayoutMargin>{children}</LayoutMargin>
      </body>
    </html>
  );
}
