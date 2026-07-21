import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-safarahmed.vercel.app/"),

  title: {
    default: "Safar Ahmed | Software Engineer",
    template: "%s | Safar Ahmed",
  },

  description:
    "Java Backend Developer with experience in Spring Boot, REST APIs, MySQL, Next.js and modern web development.",

  keywords: [
    "Safar Ahmed",
    "Software Engineer",
    "Java",
    "Spring Boot",
    "Next.js",
    "NestJS",
    "TypeScript",
    "Portfolio",
    "Backend Developer",
    "Bangladesh",
  ],

  authors: [
    {
      name: "Safar Ahmed",
    },
  ],

  creator: "Safar Ahmed",

  openGraph: {
    title: "Safar Ahmed | Software Engineer",

    description:
      "Modern software engineering portfolio showcasing backend and full-stack projects.",

    url: "https://portfolio-safarahmed.vercel.app",

    siteName: "Safar Ahmed",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Safar Ahmed",

    description:
      "Backend Developer | Java Spring Boot | Next.js",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={GeistSans.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}