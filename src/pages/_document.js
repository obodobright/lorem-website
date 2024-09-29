import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head title=" Consulting, Technology, Outsourcing - Synthesis Tech">
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="14x14" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>

        <meta name="keywords" content="Synthesis Tech, Consulting, Technology, Outsourcing " />
        <meta name="description" content="Synthesis Tech | Consulting, Technology, Outsourcing " />
        <meta name="viewport" content="width=device-width" />
        <meta name="fragment" content="!" />
        <meta name="referrer" content="always" />
        <meta name="robots" content="index, follow" />
        <meta
          name="theme-color"
          content="#00008B
"
        />
        <meta name="title" content="Synthesis Tech | Consulting, Technology, Outsourcing" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://synthesis-tech-2awo.vercel.app/" />
        <meta property="og:title" content="Synthesis Tech | Consulting, Technology, Outsourcing" />
        <meta property="og:description" content="Consulting, Technology, Outsourcing" />
        <meta property="og:image" content="https://synthesis-tech-2awo.vercel.app/" />
        <link rel="canonical" href="https://synthesis-tech-2awo.vercel.app/"></link>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://synthesis-tech-2awo.vercel.app/" />
        <meta
          property="twitter:title"
          content="Synthesis Tech | Consulting, Technology, Outsourcing"
        />
        <meta
          property="twitter:description"
          content="Synthesis Tech | Consulting, Technology, Outsourcing"
        />
        <meta property="twitter:image" content="https://synthesis-tech-2awo.vercel.app/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Synthesis Tech",
              url: "synthesis-tech-2awo.vercel.app/",
              // logo: "https://synthesis-tech-2awo.vercel.app/bellmarina.png",
              // sameAs: ["https://twitter.com/bellmari", "https://www.linkedin.com/company/bellmari"],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
