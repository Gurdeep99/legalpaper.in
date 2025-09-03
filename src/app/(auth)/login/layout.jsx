import Footer from "@/components/user/Footer";
import SidePannel from "@/components/user/SidePannel";
import TopNav from "@/components/user/TopNav";
import Script from "next/script"; // ✅ use this for script tags in Next.js

export const metadata = {
  title: "Dashboard - LegalPaper",
  description: "Dashboard to your account",
};

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="/user/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/user/assets/css/icons.min.css" rel="stylesheet" />
        <link href="/user/assets/css/app.min.css" rel="stylesheet" />
      </head>
      <body>
      
        <main>
              {children}
          </main>

        <Script src="/user/assets/libs/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/user/assets/libs/simplebar/simplebar.min.js" strategy="lazyOnload" />
        <Script src="/user/assets/libs/apexcharts/apexcharts.min.js" strategy="lazyOnload" />
        <Script src="https://apexcharts.com/samples/assets/stock-prices.js" strategy="lazyOnload" />
        <Script src="/user/assets/js/pages/index.init.js" strategy="lazyOnload" />
        <Script src="/user/assets/js/app.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
