import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uni Library Seats",
  description: "Find a seat to study",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* center the app like mobile frame */}
        <div className="mx-auto max-w-screen-sm min-h-screen p-24">
          {children}
        </div>
      </body>
    </html>
  );
}
