import styled from 'styled-components'

const StyledHero = styled.div`
  min-height: 95vh;
  position: relative;

  .hero__image::before {
    position: absolute;
    z-index: 3;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    padding: 0.2em;
    font-size: 14px;
  }

  .hero__image::after {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-filter: contrast(1.3);
    filter: contrast(1.3);
    mix-blend-mode: hue;
    mix-blend-mode: lighten !important;
  }

  .hero__image {
    width: 100%;
  }

  .hero__image img {
    width: 100%;
    height: 95vh;
    object-fit: cover;
    mix-blend-mode: difference;
  }

  .hero-body {
    padding: 8rem 3rem;
    width: 100%;

    .title, .subtitle {
      color: #FFFFFF;
    }
  }

  .hero__container {
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    color: #FFFFFF;
    height: 30rem;
  }

  .hero__details {
    padding: 3rem 0;

    .now-playing {
      background: ${ props => props.theme.red };
      width: 9rem;
      height: 2.5rem;
      font-size: 1rem;
      align-items: center;
      border-radius: 2rem;
      text-align: center;
      display: flex;
      justify-content: center;

      .now-playing__text {
        font-weight: 600;
      }
    }

    .hero__details__title {
      font-size: 4.5rem;
      font-weight: 900;
      text-transform: uppercase;
    }

    .hero__details__summary {
      font-size: 1.4rem;
      font-weight: 400;
      width: 57rem;
      color: ${ props => props.theme.lightTextColor }
    }

    .buttons {
      margin-top: 3rem;

      .button {
        padding: 1rem 4rem;
        height: 3.8rem;
        font-size: 1.2rem;
        font-weight: 900;
        margin-right: 1rem;
        color: ${ props => props.theme.lightBlack };
        text-transform: uppercase;
      }

      .is-primary {
        transition: 100ms background-color ease-in;
        will-change: background-color;
        color: #FFFFFF;

        :hover {
          background-color: rgba(244,17,69, .9);
        }
      }

      .is-outlined {
        background-color: transparent;
        color: #FFFFFF;
        border: 1px solid #FFFFFF;
        transition: 100ms background-color ease-in-out,
                    100ms color ease-in-out;

        :hover {
          background-color: #FFFFFF;
          color: ${ props => props.theme.lightBlack };
          border-color: transparent;
        }
      }
    }
  }
`;

export default StyledHero;
