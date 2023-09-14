import React from 'react'
import mangaImage1 from "../assets/AOT manga/1.png";
import mangaImage2 from "../assets/AOT manga/2.png";
import mangaImage3 from "../assets/AOT manga/3.png";
import mangaImage4 from "../assets/AOT manga/4.png";
import mangaImage5 from "../assets/AOT manga/5.png";
const TopSeries = () => {
  const images = [
    mangaImage1,  
    mangaImage2,
    mangaImage3,
    mangaImage4,
    mangaImage5
  ]






  return (
    <div className=' border-2 border-black p-8 '>

   

    {/* <div className='top-series-image border-2 flex'>
    {images.map((image, index) => (
            <img key={index} src={image} alt="" className="carousel-image" />
          ))}
    </div> */}
    <div className='flex justify-between p-3 mb-4'>

    <h2>Top series</h2>
    <p>See all</p>
    </div>
  <div className='flex gap-5'>
    {images.map((image, index)=> (
      <img className='top-series-image' src={image} key = {index} alt="" />
    ))}
  </div>

    </div>
  )
}

export default TopSeries