import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultan - Practice consulting with AI",
  openGraph: {
    title: "Consultan - Practice consulting with AI",
    description:
      "Consultan is an AI-powered mock consulting interview platform that helps you practice for your next consulting interview.",
    images: [
      {
        url: "https://demo.useliftoff.com/opengraph-image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultan - Practice consulting with AI",
    description:
    "Consultan is an AI-powered mock consulting interview platform that helps you practice for your next consulting interview.",
    images: ["https://demo.useliftoff.com/opengraph-image"],
    creator: "@tmeyer_me",
  },
  metadataBase: new URL("https://demo.useliftoff.com"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
