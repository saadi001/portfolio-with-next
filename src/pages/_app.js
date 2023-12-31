import Footer from "@/component/Footer";
import FooterTwo from "@/component/FooterTwo";
import NavbarPage from "@/component/navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-mont",
// });

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`bg-light dark:bg-dark w-full min-h-screen`}>
        <NavbarPage></NavbarPage>
        <AnimatePresence mode="wait">
        <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        {/* <Footer/> */}
        <FooterTwo/>
      </main>
    </>
  );
}
