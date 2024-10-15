import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import Analytics from "./_components/Analytics";
const inter = Outfit({ subsets: ["latin"] });
export const metadata = {
  title: "AI Course Generator | Create Your Customized Learning Path",
  description: "Easily generate tailored AI courses with our AI Course Generator tool. Customize your curriculum, explore various topics, and enhance your learning experience.",
  keywords: "AI courses, course generator, custom learning, artificial intelligence, online learning, educational tool",
  author: "Pankaj Kumar Pandey", // Your name or organization
  openGraph: {
    title: "AI Course Generator",
    description: "Transform your learning experience with our AI Course Generator. Create personalized courses tailored to your needs.",
    url: "https://mrpankajpandey-ai-course.vercel.app/", // Replace with your actual URL
    image: "/images/og-image.png", // Path to an Open Graph image
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Course Generator",
    description: "Generate custom AI courses effortlessly. Start your learning journey today!",
    image: "/images/twitter-image.png", // Path to a Twitter image
  },
};


export default function RootLayout({ children }) {
  return (
    <>
    
    <ClerkProvider>
    <Head>
          {/* SEO Metadata */}
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="keywords" content={metadata.keywords} />
          <meta name="author" content={metadata.author} />

          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={metadata.openGraph.title} />
          <meta property="og:description" content={metadata.openGraph.description} />
          <meta property="og:url" content={metadata.openGraph.url} />
          <meta property="og:image" content={metadata.openGraph.image} />
          <meta property="og:type" content={metadata.openGraph.type} />

          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content={metadata.twitter.card} />
          <meta name="google-adsense-account" content="ca-pub-1034833348897670" />
          <meta name="twitter:title" content={metadata.twitter.title} />
          <meta name="twitter:description" content={metadata.twitter.description} />
          <meta name="twitter:image" content={metadata.twitter.image} />

          {/* Google AdSense Script */}
          <script
            data-ad-client={process.env.NEXT_PUBLIC_AD_CLIENT_ID} // Replace with your AdSense client ID
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
        </Head>
   <Analytics/>
    <html lang="en">
      <body className={inter.className}>{children}
    
      </body>
    </html>
    </ClerkProvider>
    </>
  );
}
