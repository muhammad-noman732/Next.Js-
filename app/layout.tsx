import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/context/ThemedContext";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: {
    template: "%s | My Blogs",
    default: "My Blogs", // a default is required when creating a template
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header></Header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
