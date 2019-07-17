import React, { Component, Fragment } from 'react'

// type CarouselState = {
//   currentSlide: React.ReactElement,
//   slides: Array<any>,
//   timeout: number,
//   slidesCount: number,
//   currentIndex: number
// }

// type CarouselProps = {
//   children: React.ReactNode
// }

export default class Carousel extends Component {

//   readonly state = {
//     currentSlide: null,
//     slides: [],
//     timeout: 5000,
//     slidesCount: 0,
//     currentIndex: 0
//   }

//   timer: any

//   getSlides = () => {
//     let slides = Children.toArray(this.props.children);
//     let slidesCount = slides.length;
//     this.setState({
//       slides,
//       slidesCount
//     })
//   }

//   setupCarousel = () => {
//     // Select a slide to show
//     let currentSlide = this.state.slides[this.state.currentIndex]

//     // TODO: Animate the slideshow

//     this.setState({
//       currentSlide
//     })
//   }

//   incrementIndex = () => {
//     if (this.state.slidesCount === 1) return null

//     let slideIndex = this.state.currentIndex

//     let nextCount = slideIndex + 1
    
//     if (nextCount >= this.state.slidesCount) {
//       nextCount = 0
//     }

//     this.setState({
//       currentIndex: nextCount
//     })
//   }

//   autoPlayCarousel = () => {
//     // Just display image if only one child is provided
//     if (this.state.slidesCount === 1) {
//       return this.setupCarousel()
//     }

//     clearInterval(this.timer)


//     // this.timer = setInterval(() => {
//     //   this.incrementIndex()
//     // }, this.state.timeout)
//   }

//   clearTimeout = () => {
//     clearTimeout(this.timer)
//   }

//   componentWillMount() {
//     this.getSlides()
//   }

//   componentDidMount() {
//     this.setupCarousel()
//     this.autoPlayCarousel()
//   }

  render() {
    // Check if a child was passed to the component
    // if (!this.props.children && Children.toArray(this.props.children).length < 1) return null;

    return (
      <Fragment>
        {/* { this.state.slides[this.state.currentIndex] } */}
        <p>Works</p>
      </Fragment>
    )
  }
}
