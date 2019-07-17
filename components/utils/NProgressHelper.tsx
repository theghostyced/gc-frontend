import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

class NProgressHelper extends React.Component {
  routeChangeStart = () => {
    NProgress.start();
  };

  routeChangeEnd = () => {
    NProgress.done();
  };

  componentDidMount() {
    Router.events.on('routeChangeStart', this.routeChangeStart);
    Router.events.on('routeChangeComplete', this.routeChangeEnd);
    Router.events.on('routeChangeError', this.routeChangeEnd);
  }

  render() {
    return null
  }
}

export default NProgressHelper;
