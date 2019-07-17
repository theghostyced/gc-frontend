import Link from "next/link";
import React from 'react';
import styled from "styled-components";

const Logo = styled.div`
  margin-left: -3rem;

  a {
    text-decoration: none;
    text-transform: uppercase;

    :visited {
      border: none;
      outline: none;
    }

    img {
      height: 16rem;
    }
  }

  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledNavbar = styled.header `
  z-index: 3;

  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;

    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

class Navbar extends React.Component {

  render() {
    return (
      <StyledNavbar className="pa w-100">
        <div className="mx-20">
          <div className="bar">
            <Logo>
              <Link href="/">
                <a>
                  <img src="/static/genesiscinema.png" />
                </a>
              </Link>
            </Logo>
            <div className="right">
            </div>
          </div>
        </div>
      </StyledNavbar>
    );
  }
}

export default Navbar;
