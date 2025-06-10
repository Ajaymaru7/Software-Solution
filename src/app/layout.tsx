import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "Ajay Maru",
  description: "IT Support Bekasi adalah penyedia layanan terpercaya di bidang teknologi informasi, siap membantu kebutuhan IT Anda dengan profesional dan efisien.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <style>{`
          :root {
            --font-poppins: ${poppins.style.fontFamily};
          }
        `}</style>
      </head>
      <body className={`antialiased ${poppins.className}`} suppressHydrationWarning>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
