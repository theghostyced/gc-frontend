import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import NProgressHelper from './utils/NProgressHelper';

const theme = {
  bg: '#0A0A0A',
  black: '#000000',
  textColor: '#FFFFFF',
  lightTextColor: "#F5F5F5",
  red: '#F41145',
  darkRed: '#df001e',
  lightBlack: '#202026',
};

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <NProgressHelper />
          { this.props.children }
        </Fragment>
      </ThemeProvider>
    )
  }
}
