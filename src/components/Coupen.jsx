// import React from "react";
// import b from "../assets/Burgermain.jpg";
// import b1 from "../assets/Burgermain1.jpg";
// import b2 from "../assets/bmain.jpg";
// import { BsArrowRight } from "react-icons/bs";
// import ExploreMenu from "./ExploreMenu/ExploreMenu";
// import { useNavigate } from "react-router-dom";

// function Coupen() {
//   const navigate = useNavigate();
//   const MenuPage = () => {
//     navigate("/explore");
//   };
//   return (
//     <>
//       <div className="mb-72">
//         <div className="">
//           <h3 className="text-3xl font-semibold text-center  m-10 text-orange-600 uppercase ">
//             Today's Best Deals
//           </h3>
//         </div>

//         <div className="container mx-auto  lg:px-32 lg:pt-12">
//           <div className="-m-1 flex flex-wrap md:-m-2">
//             <div className="flex w-1/3 flex-wrap">
//               <div className="w-full p-1 md:p-2">
//                 <img src={b} alt="Coupen 1" />
//               </div>
//             </div>
//             <div className="flex w-1/3 flex-wrap">
//               <div className="w-full p-1 md:p-2">
//                 <img src={b1} alt="Coupen 2" />
//               </div>
//             </div>
//             <div className="flex w-1/3 flex-wrap">
//               <div className="w-full p-1 md:p-2">
//                 <img src={b2} alt="Coupen 3" />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col items-center justify-center relative">
//           <button
//             onClick={MenuPage}
//             className="text-lg flex justify-center items-center absolute top-16 gap-1 text-orange-600 border rounded-full p-2 pl-4 pr-4 hover:bg-orange-200 transition duration-300 delay-100 ease-in-out hover:delay-300"
//           >
//             Explore Menu
//             <BsArrowRight />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Coupen;

import React from "react";
import b from "../assets/Burgermain.jpg";
import b1 from "../assets/Burgermain1.jpg";
import b2 from "../assets/bmain.jpg";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Coupen() {
  const navigate = useNavigate();
  const MenuPage = () => {
    navigate("/explore");
  };

  return (
    <>
      <div className="mb-72">
        <div className="">
          <h3 className="text-4xl font-bold text-center my-10 text-orange-600 uppercase">
            Today's Best Deals
          </h3>
        </div>

        <div className="container mx-auto lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  src={b}
                  alt="Coupen 1"
                  className="block h-full w-full rounded-lg object-cover object-center shadow-md"
                />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  src={b1}
                  alt="Coupen 2"
                  className="block h-full w-full rounded-lg object-cover object-center shadow-md"
                />
              </div>
            </div>
            <div className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  src={b2}
                  alt="Coupen 3"
                  className="block h-full w-full rounded-lg object-cover object-center shadow-md"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center relative mt-8">
          <button
            onClick={MenuPage}
            className="text-lg flex justify-center items-center gap-1 text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-300 rounded-full py-2 px-6 shadow-lg"
          >
            Explore Menu
            <BsArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default Coupen;
