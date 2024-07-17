// import React from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import b from '../assets/Burgermain.jpg';
// import b1 from '../assets/Burgermain1.jpg';
// import b2 from '../assets/bmain.jpg';
// import b3 from '../assets/bmain1.jpg';


// function Autoplay() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 3000,
//         autoplaySpeed: 2000,
//         cssEase: "linear",
       
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//         ]
//       };
//   return (
//     <>
//     <div className=''>
//     <div className="slider-container ">
//       <Slider {...settings} className=''>
    
//         <div >
//           <img src={b} alt="burger" style={{height:"400px"}} />
//         </div>
//         <div >
//         <img src={b1} alt="burger1" style={{height:"400px"}} />
//         </div>
//         <div >
//         <img src={b2} alt="burger2"  style={{height:"400px"}} />
//         </div>
//         <div >
//         <img src={b3} alt="burger3" style={{height:"400px"}} />
//         </div>
        
//       </Slider>
//     </div>
    
//     </div>
//     </>
//   );
    
   

  

 
 
// }

// export default Autoplay

import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import b from '../assets/Burgermain.jpg';
import b1 from '../assets/Burgermain1.jpg';
import b2 from '../assets/bmain.jpg';
import b3 from '../assets/bmain1.jpg';

function Autoplay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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

  return (
    <>
      <div className='container mx-auto py-8'>
        <div className="slider-container p-6">
          <Slider {...settings}>
            <div className="px-2">
              <img src={b} alt="burger" className="w-full h-64 object-cover rounded-lg shadow-md" />
            </div>
            <div className="px-2">
              <img src={b1} alt="burger1" className="w-full h-64 object-cover rounded-lg shadow-md" />
            </div>
            <div className="px-2">
              <img src={b2} alt="burger2" className="w-full h-64 object-cover rounded-lg shadow-md" />
            </div>
            <div className="px-2">
              <img src={b3} alt="burger3" className="w-full h-64 object-cover rounded-lg shadow-md" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Autoplay;
