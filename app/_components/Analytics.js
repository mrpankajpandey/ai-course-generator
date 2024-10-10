// /components/Analytics.js
import Script from 'next/script';

const Analytics = () => {
    const measurementId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  return (
    <>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} // Replace with your Measurement ID
      />
      <Script id="ga-setup" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}'); // Replace with your Measurement ID
        `}
      </Script>
    </>
  );
};

export default Analytics;
