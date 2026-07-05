import type { Metadata, Viewport } from "next";
import { Poppins, Montserrat, Fira_Code } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import { socialLinks, youtubeChannelUrl } from "@/lib/data";
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
const title = "Nehal Shaikh - Frontend Developer";
const description =
  "Portfolio of Nehal Shaikh, a Jr Frontend Developer at Scott Sports SA building with Next.js, React, and TypeScript. Explore projects, skills, and experience.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "web developer",
    "portfolio",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Nehal Shaikh",
  ],
  authors: [{ name: "Nehal Shaikh", url: siteUrl }],
  creator: "Nehal Shaikh",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    siteName: "Nehal Shaikh's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Nehal_s_k",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#6366f1" },
    { media: "(prefers-color-scheme: dark)", color: "#4338ca" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nehal Shaikh",
  url: siteUrl,
  jobTitle: "Jr Frontend Developer",
  worksFor: {
    "@type": "Organization",
    name: "Scott Sports SA",
  },
  knowsAbout: ["Next.js", "React", "TypeScript", "JavaScript"],
  sameAs: [socialLinks.linkedin, socialLinks.github, youtubeChannelUrl],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
