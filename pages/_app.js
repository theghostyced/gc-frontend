import App, { Container } from 'next/app';
import Page from '../components/Page.tsx';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.query = ctx.query; 

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Page>
          <Component {...pageProps}/>
        </Page>
      </Container>
    );
  }
}

export default MyApp;