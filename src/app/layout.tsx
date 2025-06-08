import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaëdique Portfolio",
  description: "Web developer portfolio of Gaëdique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-background text-foreground antialiased transition-[background-color,color] 
  duration-[--duration-smooth] ease-[--ease-smooth]"
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
