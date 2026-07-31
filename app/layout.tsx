import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Northstar — Independent Digital Studio",
  description:
    "Strategy, design, and technology for ambitious teams building what’s next.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem("theme");
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

                if (theme === "dark" || (!theme && prefersDark)) {
                  document.documentElement.classList.add("dark");
                }
              } catch {}
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
