import "@/scss/globals.scss";

import { Fira_Mono } from "next/font/google";

import { Providers } from "@/providers";
import { ServerThemeProvider } from "@wits/next-themes";
import type { Metadata } from "next";

const fireMono = Fira_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  fallback: ["monospace"],
  display: "swap",
  adjustFontFallback: false,
  preload: true,
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider
      attribute="class"
      enableSystem
    >
      <html
        lang="en"
        suppressHydrationWarning
        className="dark"
      >
        <Providers>
          <body className={fireMono.className}>{children}</body>
        </Providers>
      </html>
    </ServerThemeProvider>
  );
}
