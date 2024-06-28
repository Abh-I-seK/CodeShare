import "~/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "CodeShare",
  description: "CodeShare is a platform for sharing code snippets and repositories.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        {children}
        <SpeedInsights/>  
      </body>
    </html>
  );
}
