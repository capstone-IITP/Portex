import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// Load Inter font for body text
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Load Poppins for headings
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Portex - Next-Gen Logistics Platform",
  description: "Move anything. Anywhere. Instantly. Connect with reliable delivery partners through our next-generation logistics platform.",
  keywords: "logistics, delivery, shipping, transportation, courier, on-demand delivery",
  authors: [{ name: "Portex Team" }],
  creator: "Portex",
  publisher: "Portex Technologies",
  openGraph: {
    title: "Portex - Revolution in Logistics",
    description: "Connect with reliable delivery partners through our next-generation logistics platform.",
    url: "https://portex.com",
    siteName: "Portex",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
