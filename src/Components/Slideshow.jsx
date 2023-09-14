import React, { useEffect, useState } from "react";
import "../App.css";
import mangaImage1 from "../assets/AOT manga/1.png";
import mangaImage2 from "../assets/AOT manga/2.png";
import mangaImage3 from "../assets/AOT manga/3.png";
import mangaImage4 from "../assets/AOT manga/4.png";
import mangaImage5 from "../assets/AOT manga/5.png";
import mangaImage6 from "../assets/AOT manga/6.png";
import mangaImage7 from "../assets/AOT manga/7.png";
import mangaImage8 from "../assets/AOT manga/8.png";
import mangaImage9 from "../assets/AOT manga/9.png";
import mangaImage10 from "../assets/AOT manga/10.png";
import mangaImage11 from "../assets/AOT manga/11.png";
import mangaImage12 from "../assets/AOT manga/12.png";
import mangaImage13 from "../assets/AOT manga/13.png";
import mangaImage14 from "../assets/AOT manga/14.png";
import mangaImage15 from "../assets/AOT manga/15.png";
import mangaImage16 from "../assets/AOT manga/16.png";
import mangaImage17 from "../assets/AOT manga/17.png";
import mangaImage18 from "../assets/AOT manga/18.png";
import mangaImage19 from "../assets/AOT manga/19.png";
import mangaImage20 from "../assets/AOT manga/20.png";
import mangaImage21 from "../assets/AOT manga/21.png";
import mangaImage22 from "../assets/AOT manga/22.png";
import mangaImage23 from "../assets/AOT manga/23.png";
import mangaImage24 from "../assets/AOT manga/24.png";
import mangaImage25 from "../assets/AOT manga/25.png";
import mangaImage26 from "../assets/AOT manga/26.png";
import mangaImage27 from "../assets/AOT manga/27.png";
import mangaImage28 from "../assets/AOT manga/28.png";
import mangaImage29 from "../assets/AOT manga/29.png";
import mangaImage30 from "../assets/AOT manga/30.png";
import mangaImage31 from "../assets/AOT manga/31.png";
import mangaImage32 from "../assets/AOT manga/32.png";

const Slideshow = () => {
  const images = [
     mangaImage1,  
     mangaImage2,
     mangaImage3,
     mangaImage4,
     mangaImage5,
     mangaImage6,
     mangaImage7,
     mangaImage8,  
     mangaImage9,
     mangaImage10,
     mangaImage11,
     mangaImage12,
     mangaImage13,
     mangaImage14,
     mangaImage15,  
     mangaImage16,
     mangaImage17,
     mangaImage18,
     mangaImage19,
     mangaImage20,
     mangaImage21,
     mangaImage22,
     mangaImage23,
     mangaImage24,
     mangaImage25,
     mangaImage26,
     mangaImage27,  
     mangaImage28,
     mangaImage29,
     mangaImage30,
     mangaImage31,
     mangaImage32
    ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, []);




  return (
    <div className="bg-slate-300 p-6">
      <div className="carousel">
        <div
          className="carousel-inner small-image"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt="" className="carousel-image" />
          ))}
        </div>
    
      </div>
    </div>
  );
};

export default Slideshow;
