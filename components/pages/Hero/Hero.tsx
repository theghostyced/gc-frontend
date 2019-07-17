import React, { Component } from 'react'
import StyledHero from './styles/StyledHero'

type HeroProps = {
  imageUrl?: string,
  title: string,
  cssClass?: string
}

export default class Hero extends Component<HeroProps> {
  render() {
    return (
      <StyledHero className={ `'hero ${this.props.cssClass}'` }>
        <div className="hero__image pa">
          <img className="animated fadeIn" src={ this.props.imageUrl } />
        </div>
        <div className="pa hero__container">
          <div className="mx-20">
            <div className="hero__details">
             <div className="now-playing">
               <p className="now-playing__text">Now Showing</p>
             </div>
             <h2 className="hero__details__title">{ this.props.title }</h2>
             <p className="hero__details__summary">Ted Mosby sits down with his kids, to tell them the story of how he met their mother. The story is told through memories of his friends Marshall, Lily, Robin, and Barney Stinson. All legendary 9 seasons lead up to[...]
             </p>

              <div className="buttons">
                <a href="#" className="button is-outlined">More Details</a>
                <a href="#" className="button is-primary">Get Tickets</a>
              </div>
            </div>
          </div>
        </div>
      </StyledHero>
    )
  }
}
