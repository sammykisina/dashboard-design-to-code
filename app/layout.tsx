import { BG } from "@/components";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <BG />
        
        {children}
      </body>
    </html>
  );
}
