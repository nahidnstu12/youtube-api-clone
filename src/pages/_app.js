import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/app.scss";
import wrapper from "../redux/store";
import { YTC_ACESS_TOKEN } from "../utils/contsants";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const auth = router.pathname.includes("auth");
//   console.log(auth);

  // get token
  const token = Cookies.get(YTC_ACESS_TOKEN);

//   console.log(router);
  useEffect(() => {
    if (!token || token === undefined || token === null) {
      router.push("/auth");
    }
  }, [token]);
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000" />
        <title>YTC-APP</title>
      </Head>
      {auth ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default wrapper.withRedux(MyApp);
// export default MyApp
