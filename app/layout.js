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

export const metadata = {
  title: "Nikhil Mugali | Web Developer & Designer Portfolio",
  description:
    "Explore the portfolio of Nikhil Mugali, showcasing web development, design projects, and creative solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Explore the portfolio of Nikhil Mugali, showcasing web development and design projects."
        />
        <meta
          property="og:title"
          content="Nikhil Mugali | Web Developer & Designer Portfolio"
        />
        <meta
          property="og:description"
          content="Discover Nikhil's web development projects and creative design solutions."
        />
        <meta property="og:image" content="URL_to_image" />
        <meta
          property="og:url"
          content="https://nikhilmugali-portfolio.vercel.app"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
