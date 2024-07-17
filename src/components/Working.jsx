// import work from "../assets/workingBurgur.png";

// export default function Wokring() {
//   return (
   
//     <>
//       <div className="flex flex-col sm:flex-row h-screen">
//         <img
//           src={work}
//           alt="Working"
//           className="h-2/3 w-full sm:w-1/2 object-cover"
//         />
//         <div className="flex flex-col justify-center p-5">
//           <span className="text-lg sm:text-2xl font-bold uppercase">
//             A burger, an iconic comfort food, boasts a succulent patty embraced
//             by fluffy buns. Topped with fresh lettuce, ripe tomatoes, and melted
//             cheese, it's a symphony of flavors, offering a satisfying indulgence
//             for any appetite.
//           </span>
//         </div>
//       </div>
//     </>
//   );
// }

 
import React from "react";
import work from "../assets/workingBurgur.png";

export default function Working() {
  return (
    <>
      <div className="flex flex-col sm:flex-row h-screen">
        <img
          src={work}
          alt="Working"
          className="h-2/3 w-full sm:w-1/2 object-cover"
        />
        <div className="flex flex-col justify-center p-5">
          <span className="text-lg sm:text-xl font-semibold text-gray-800">
            A burger, an iconic comfort food, boasts a succulent patty embraced
            by fluffy buns. Topped with fresh lettuce, ripe tomatoes, and melted
            cheese, it's a symphony of flavors, offering a satisfying indulgence
            for any appetite.
          </span>
        </div>
      </div>
    </>
  );
}
