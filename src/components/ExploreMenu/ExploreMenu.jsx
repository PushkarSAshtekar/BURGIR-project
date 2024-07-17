
import React, { useState } from "react";

import DisplayMenu from "./DisplayMenu";


function ExploreMenu() {

// const [menu, setMenu] = useState(Menuburgerlist);
// const [cart,setCart]=useState([]);
// const [selectedItem, setSelectedItem] = useState(null);



// const navigate = useNavigate();


//  const addTocart=(data)=>{
//  setCart([...CartItem,data])
//  console.log(CartItem);
//  CartItem.push(data)


// // console.log(CartItem);
// //  console.log(data);
//  setSelectedItem(data); 
//  setTimeout(() => {
//   setSelectedItem(null); 
//  }, 3000);
// //  navigate("/cart")
//  }



//   const filltermenu = (currentitems) => {
//     const updatedvalue = Menuburgerlist.filter((curr) => {
//       return curr.Category === currentitems;
//     });
//     setMenu(updatedvalue);
//   };
  

  return (
    // <>
    //   <div className="bg-yellow-50 ">
    //     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    //       <h1 className="text-4xl text-orange-600 text-center pb-5">
    //         Explore our Menu
    //       </h1>
    //       <p className="text-2xl text-red-700 text-center">
    //         Discover a world of flavors with our diverse menu offerings, crafted
    //         to tantalize your taste buds and satisfy every craving.
    //       </p>
    //     </div>

    //     <div>
    //       <div className="flex justify-center p-3">
    //         <div className="space-x-4">
    //           <button
    //             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    //             onClick={() => filltermenu("Veg")}
    //           >
    //             Veg
    //           </button>
    //           <button
    //             className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    //             onClick={() => filltermenu("Non-Veg")}
    //           >
    //             Non-Veg
    //           </button>
    //           <button
    //             className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
    //             onClick={() => filltermenu("Drinks")}
    //           >
    //             Drinks
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     <div>
    //       <section className="text-gray-600 body-font">
    //         <div className="container px-5 py-24 mx-auto">
    //           <div className="flex flex-wrap -m-4">
    //             {menu.map((item) => (
    //               <div key={item.id} className="lg:w-1/3 md:w-1/2 p-4 w-full">
    //                 <a className="block relative h-48 rounded overflow-hidden">
    //                   <img
    //                     className="object-cover object-center w-full h-full block rounded-2xl"
    //                     src={item.Img}
    //                     alt="Menu Images"
    //                   />
    //                 </a>
    //                 <div className="mt-4">
    //                   <h3 className="text-gray-500 text-lg tracking-widest title-font uppercase  mb-1">
    //                     {item.Category}
    //                   </h3>
    //                   <hr className="" />
    //                   <h2 className="text-orange-600 title-font text-2xl font-semibold uppercase">
    //                     {item.Name}
    //                   </h2>
    //                   <hr />
    //                   <h1 className="text-gray-900 title-font text-xl font-light">
    //                     {item.Discription}
    //                   </h1>
    //                   <hr />
    //                   <p className="mt-1 font-bold">{item.price} Rs</p>
    //                   <hr />
    //                   <button 
    //                     //onClick={()=>addTocart(item)}
    //                      onClick={() =>{ addTocart(item)}} 
    //                     className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    //                   >
    //                     Add to Cart
    //                   </button>
    //               <div>
    //               {selectedItem && selectedItem.id === item.id && (
    //             <div className="bg-green-200 text-green-800 p-2 rounded-md mt-2">
    //               {`${selectedItem.Name} is added to cart`}
    //             </div>
    //           )}

    //               </div>
    //                 </div>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </section>
    //     </div>

        
    //   </div>
      
      
    // </>

    <>
  <DisplayMenu/>
    </>
  );
}

export default ExploreMenu;





