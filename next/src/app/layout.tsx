import "./globals.css";
import Header from "../components/Header/Header";

export const metadata = {
  title: "Alex Russell",
  description: "Full stack web developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header />
      <body className="bg-gruv-bg-2">{children}</body>
    </html>
  );
}
