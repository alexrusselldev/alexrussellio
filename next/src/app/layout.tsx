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
      <body className="bg-gruv-bg-2">
        <Header />
        {children}
      </body>
    </html>
  );
}
