import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SnowfallComponent from "@/components/snowfall";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shahriyar Mammadov",
  description:
    "Şəhriyar Məmmədovun Portfoliosu | Shahriyar Mammadov's Portfolio",
  themeColor: "#c9f31d",
  keywords: [
    "Şəhriyar Məmmədov",
    "Shahriyar Mammadov",
    "websayt xidmetleri",
    "Portfolio",
    "vebsaytlarin hazirlanmasi",
    "website",
    "create website",
    "sayt hazirlanmasi",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* GOOGLE FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,600&display=swap"
          rel="stylesheet"
        ></link>

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2651137106510803"
          crossorigin="anonymous"
        ></script>

        <meta
          name="google-site-verification"
          content="ca-pub-2651137106510803"
        ></meta>
        <meta
          name="google-adsense-account"
          content="ca-pub-2651137106510803"
        ></meta>
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        {/* <SnowfallComponent /> */}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
