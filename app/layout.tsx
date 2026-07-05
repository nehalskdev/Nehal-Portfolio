import type { Metadata } from "next";
import { Poppins, Montserrat, Fira_Code } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400"],
});

const siteUrl = "https://nehal-web-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nehal Shaikh - Frontend Developer & Content Creator",
  description:
    "Nehal's web development portfolio showcasing projects, skills, and contact info.",
  keywords: ["web developer", "portfolio", "React", "Next.js", "JavaScript", "Nehal"],
  authors: [{ name: "Nehal Shaikh" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Nehal Shaikh - JavaScript Developer Portfolio",
    description:
      "From data analytics to frontend development - Explore my coding projects and skills.",
    type: "website",
    url: siteUrl,
    siteName: "Nehal Shaikh's Portfolio",
    images: [
      {
        url: "/assets/Favicon.jpg",
        width: 1200,
        height: 630,
        alt: "Nehal Shaikh, Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Nehal_s_k",
    title: "Nehal Shaikh - JS Developer",
    description:
      "From data analytics to frontend development - Explore my coding projects and skills.",
    images: ["/assets/Favicon.jpg"],
  },
  other: {
    "theme-color": "#4285f4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${montserrat.variable} ${firaCode.variable}`}
    >
      <body className="min-h-screen font-sans leading-relaxed">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
