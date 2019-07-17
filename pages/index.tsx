import React from 'react'
import { NextPage } from 'next'
import Layout from '../components/Layout'
import Hero from '../components/pages/Hero/Hero'
import Navbar from '../components/Navbar'
// import Carousel from '../components/pages/Carousel/Carousel'

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Navbar />
      {/* <Carousel> */}
        <Hero
          imageUrl="/static/movies/how-i-met-your-mother_175b_2560x1440.jpg"
          title="How I Met Your Mother"
        />
        {/* <Hero
          imageUrl="/static/movies/blade runner/blade-runner-2049_fc2e_2560x1440.jpg"
          title="Blade Runner"
        /> */}
      {/* </Carousel> */}
    </Layout>
  )
}

export default IndexPage
