import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebooks from '../components/Freebooks'
import DownFooter from '../components/DownFooter'
const Home = () => {
  return (
    <div>
      <Navbar/>
   <Banner/>
   <Freebooks/>
   <DownFooter/>
    </div>
  )
}

export default Home
