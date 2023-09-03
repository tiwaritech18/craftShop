import React from 'react'
import HeroSection from '../Herosection/HeroSection'
import ProductListing from '../Productlisting/ProductListing'
import Banner from '../Banner'
import Collection from '../Collection';
import Newsletter from "../Newsletter"
import Footer from '../Footer';


const Home = () => {
  return (
    <React.Fragment>
      <section className='main'>
        <HeroSection />
      </section>
      <ProductListing />
      <Banner 
        title="RECENT POSTS"
        desc="In love with chich city living"
        heading="Metropolitan moods"
      />
      <Collection />
      <Newsletter />
      <Footer />
      
    </React.Fragment>
  )
}

export default Home
