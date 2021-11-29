import App from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/app.scss";
import wrapper from "../redux/store";
import { YTC_ACESS_TOKEN } from "../utils/contsants";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

class _App extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}),
        pathname: ctx.pathname,
      },
    };
  }

  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    const auth = pageProps.pathname.includes("auth");
    // console.log(auth)
    // get token
    const token = Cookies.get(YTC_ACESS_TOKEN);
    const router = useRouter();
    console.log(token);
    useEffect(() => {
      if (!token) {
        router.push("/auth");
      }
    }, [token]);
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
}

export default wrapper.withRedux(_App);
// export default _App