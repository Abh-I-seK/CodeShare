import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "~/components/ui/toaster";

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
        <main>{children}</main>
        <Toaster/>
      </body>
    </html>
  );
}
