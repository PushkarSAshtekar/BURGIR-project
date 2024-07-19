// import React from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import b from '../assets/Alootiki.jpeg'
// import b1 from '../assets/crispy.jpeg';
// import b2 from '../assets/Mac.jpeg';
// import b3 from '../assets/Cheeseburger.jpeg';


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
    
   

  

 
 
//  }

//  export default Autoplay

//////////////////////////////////////


// import React from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import b from '../assets/Alootiki.jpeg';
// import b1 from '../assets/crispy.jpeg';
// import b2 from '../assets/Mac.jpeg';
// import b3 from '../assets/Cheeseburger.jpeg';

// function Autoplay() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 3000,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h2 className="text-3xl font-semibold text-center mb-6 text-orange-600">Delicious Burgers</h2>
//       <div className="slider-container p-6 bg-gradient-to-r from-orange-300 to-yellow-200 rounded-lg shadow-lg">
//         <Slider {...settings}>
//           {[b, b1, b2, b3].map((src, index) => (
//             <div key={index} className="px-4">
//               <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
//                 <img
//                   src={src}
//                   alt={`Slide ${index}`}
//                   className="w-full h-full object-contain rounded-lg transition-transform duration-300 hover:scale-105"
//                 />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// }

// export default Autoplay;


/////////////////////////////////////////

import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import b from '../assets/Alootiki.jpeg';
import b1 from '../assets/crispy.jpeg';
import b2 from '../assets/McChicken.jpg';
import b3 from '../assets/Cheeseburger.jpeg';
import Chai from '../assets/Chai.jpg';
import Coffee from '../assets/Coffee.jpg';
// import Chai from "../../assets/Chai.jpg";
// import Coffee from "../../assets/Coffee.jpg";

const slides = [
  { src: b, name: 'Aloo Tikki Burger' },
  { src: b1, name: 'Crispy Veg Burger' },
  { src: b2, name: 'McChicken' },
  { src: b3, name: 'Cheeseburger' },
  { src: Chai, name: 'Chai' },
  { src: Coffee, name: 'Coffee'},
];

function Autoplay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-8">
     
      <div className="slider-container p-6 bg-gradient-to-r from-orange-300 to-yellow-200 rounded-lg shadow-lg">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-4 flex flex-col items-center">
              <div className="relative h-64 overflow-hidden rounded-lg shadow-md mb-2">
                <img
                  src={slide.src}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-lg font-semibold text-gray-800">{slide.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Autoplay;






