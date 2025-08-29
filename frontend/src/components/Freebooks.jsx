import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
 var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
const Freebooks = () => {
    const filterData=list.filter((data)=>data.category==="Free");
    // console.log(filterData);
    
  return (

    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
            <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam sequi voluptatibus aperiam, itaque excepturi atque, eum expedita quia accusamus incidunt reprehenderit blanditiis, repellat aliquam fugiat natus laboriosam numquam repudiandae delectus.</p>
       

        

    </div>
    <div>
         <Slider {...settings}>
        {filterData.map((item=>(
            <Cards item={item} key={item.id}/>
        )))}
         
      </Slider>
    </div>
     </div>
    </>
  )
}

export default Freebooks
