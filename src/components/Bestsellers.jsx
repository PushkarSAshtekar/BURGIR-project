// import React from 'react'
// import b from '../assets/Burgermain.jpg';
// import b1 from '../assets/Burgermain1.jpg';
// import b2 from '../assets/bmain.jpg';
// import b3 from '../assets/bmain1.jpg';
// import logo from '../assets/burgurlogo.png'

// function Bestsellers() {
//   return (
    
//     <>
//     <div>
//         <h1>Best Sellers</h1>
//     </div>
  
//         <table className='gap-16 justify-center items-center' >
//         <div className=''>

//         <tr>

//         <td>
//         <div className='h-60 w-56'>
//             <img src={b} alt="" />
//         </div>
//         </td>

//         <td>
//         <div  className='h-60 w-56'>
//             <img src={b} alt="" />
//         </div>
//         </td>

//         <td>
//         <div  className='h-60 w-56'>
//             <img src={b} alt="" />
//         </div>
//         </td>
//         </tr>
//         {/* </div>
//         <div> */}
//         <tr>

//         <td>
//         <div  className='h-60 w-56'>
//             <img src={b} alt="" />
//         </div>
//         </td>

//         <td>
//         <div  className='h-60 w-56'>
//             <img src={b} alt="" />
//         </div>
//         </td>


//         <td>
//       <div  className='h-60 w-56'>
//             <img src={b} alt="" />
//         </div>
//         </td>
        

//         </tr>
//         </div>
//         </table>
    
//     </>
//   )
// }

// export default Bestsellers
import React from 'react';
import b from '../assets/Burgermain.jpg';
import b1 from '../assets/Burgermain1.jpg';
import b2 from '../assets/bmain.jpg';
import b3 from '../assets/bmain1.jpg';
import logo from '../assets/burgurlogo.png';

function Bestsellers() {
  return (
    <>
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-orange-600 mb-8">Best Sellers</h1>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={b} alt="Best Seller" className="w-full h-60 object-cover" />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={b1} alt="Best Seller" className="w-full h-60 object-cover" />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={b2} alt="Best Seller" className="w-full h-60 object-cover" />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={b3} alt="Best Seller" className="w-full h-60 object-cover" />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={b} alt="Best Seller" className="w-full h-60 object-cover" />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={b1} alt="Best Seller" className="w-full h-60 object-cover" />
        </div>
      </div>
    </>
  );
}

export default Bestsellers;
