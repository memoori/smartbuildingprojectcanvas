import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart Building RFI Generator",
  description:
    "Generate professional Requests for Information (RFIs) for commercial building technology procurement. Powered by the Smart Building Project Canvas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <a href="/" className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1b3660]">
                  <span className="text-sm font-bold text-white">SB</span>
                </div>
                <span className="text-lg font-semibold text-[#1b3660]">
                  RFI Generator
                </span>
              </a>
              <nav className="flex items-center gap-6 text-sm">
                <a
                  href="/project/new"
                  className="rounded-lg bg-[#1b3660] px-4 py-2 text-white hover:bg-[#0d2340] transition-colors"
                >
                  New Project
                </a>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t bg-white py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">
              Built on the{" "}
              <a
                href="https://github.com/memoori/smartbuildingprojectcanvas"
                className="text-[#055da9] hover:underline"
                target="_blank"
                rel="noopener"
              >
                Smart Building Project Canvas
              </a>{" "}
              by Memoori Research. Open source under BSD 3-Clause / CC-BY-SA 4.0.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
