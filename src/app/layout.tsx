import type { Metadata } from "next";
import { Inter, Epilogue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import TanStackProvider from "@/components/providers/TanstackProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RediStash - Modern Chat Application",
  description: "A premium real-time chat application built with Next.js and Redis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${epilogue.variable} antialiased`}
      >
        <ThemeProvider  
          attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange
          >
            <TanStackProvider>
              {children}
            </TanStackProvider>
        
        </ThemeProvider>
      </body>
    </html>
  );
}
