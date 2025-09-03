import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";


export const metadata = {
  title: "Dashboard - LegalPaper",
  description: "Dashboard to your account",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="assets/css/bootstrap.css" />
        <link rel="stylesheet" href="assets/css/meanmenu.css" />
        <link rel="stylesheet" href="assets/css/animate.css" />
        <link rel="stylesheet" href="assets/css/owl-carousel.css" />
        <link rel="stylesheet" href="assets/css/swiper-bundle.css" />
        <link rel="stylesheet" href="assets/css/backtotop.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="assets/css/preloader.css" />
        <link rel="stylesheet" href="assets/css/nice-select.css" />
        <link rel="stylesheet" href="assets/fonts/flaticon/flaticon_mehedilaw.css"/>
        <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/fill/style.css"/>
        <link rel="stylesheet" href="assets/css/font-awesome-pro.css" />
        <link rel="stylesheet" href="assets/css/spacing.css" />
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Script src="assets/js/vendor/jquery.js" strategy="beforeInteractive" />
        <Script src="assets/js/vendor/waypoints.js" strategy="lazyOnload" />
        <Script src="assets/js/bootstrap-bundle.js" strategy="lazyOnload" />
        <Script src="assets/js/meanmenu.js" strategy="lazyOnload" />
        <Script src="assets/js/swiper-bundle.js" strategy="lazyOnload" />
        <Script src="assets/js/owl-carousel.js" strategy="lazyOnload" />
        <Script src="/assets/js/magnific-popup.js" strategy="lazyOnload" />
        <Script src="/assets/js/parallax.js" strategy="lazyOnload" />
        <Script src="/assets/js/backtotop.js" strategy="lazyOnload" />
        <Script src="/assets/js/nice-select.js" strategy="lazyOnload" />
        <Script src="/assets/js/counterup.js" strategy="lazyOnload" />
        <Script src="/assets/js/wow.js" strategy="lazyOnload" />
        <Script src="/assets/js/isotope-pkgd.js" strategy="lazyOnload" />
        <Script src="/assets/js/imagesloaded-pkgd.js" strategy="lazyOnload" />
        <Script src="/assets/js/ajax-form.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
