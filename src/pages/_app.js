import App from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/app.scss";
import wrapper from "../redux/store";

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
        {auth ? <Component {...pageProps} /> :
       ( <Layout>
          <Component {...pageProps} />
        </Layout>)}
      </>
    );
  }
}

export default wrapper.withRedux(_App);
// export default _App
