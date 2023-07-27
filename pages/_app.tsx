import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import Header from "../components/header";
import Footer from "../components/footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";
import { NextPage, NextPageContext } from "next";
import App from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Footer />
      {/* <Script id="">var uac_siteid="trKnu58fvvY=";</Script>

      <Script
        src="https://media.uaccess.co.il/Scripts/uaccess/web.js"
        async={true}
        id="uac-script-base"
        strategy="lazyOnload"
      /> */}
      <Script src="/ac.js" />
    </>
  );
}
interface Context extends NextPageContext {
  // any modifications to the default context, e.g. query types
}
MyApp.getInitialProps = async (appContext: AppContext) => {
  // ...
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
export default MyApp;
