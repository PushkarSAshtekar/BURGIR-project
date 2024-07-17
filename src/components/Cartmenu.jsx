

// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { StoreContext } from '../context/StoreContext';

// const Cartmenu = ({ id, Name, Category, Discription, price, Img }) => {
//   const [selectedItem, setSelectedItem] = useState(null);
//   const { addToCart } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const item = { id, Name, Category, Discription, price, Img };

//   const handleAddToCart = () => {
//     addToCart(item);
//     console.log("Adding to cart:", item);
//     setSelectedItem(item);
//     setTimeout(() => {
//       setSelectedItem(null);
//       // navigate("/cart");
//     }, 3000);
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 m-4 transform transition-transform hover:scale-105">
//       <div className="text-gray-500 text-xs mb-2">
//         <p>{id}</p>
//       </div>
//       <div className="text-gray-700 font-bold text-sm mb-2">
//         <p>Category: {Category}</p>
//       </div>
//       <div className="flex justify-center mb-4">
//         <img className="w-48 h-48 object-cover rounded-lg" src={Img} alt={Name} />
//       </div>
//       <div className="text-xl font-semibold mb-2">
//         <p>{Name}</p>
//       </div>
//       <div className="text-gray-600 mb-4">
//         <p>{Discription}</p>
//       </div>
//       <div className="text-gray-900 font-bold text-lg mb-4">
//         <p>{price} RS</p>
//       </div>
      
//       <div>
//         <button 
//           onClick={handleAddToCart} 
//           className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-200"
//         >
//           Add to Cart
//         </button>
//       </div>

//       {selectedItem && selectedItem.id === item.id && (
//         <div className="bg-green-200 text-green-800 p-2 rounded-md mt-4 text-center">
//           {`${selectedItem.Name} is added to cart`}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Cartmenu;

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Cartmenu = ({ id, Name, Category, Discription, price, Img }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { addToCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const item = { id, Name, Category, Discription, price, Img };

  const handleAddToCart = () => {
    addToCart(item);
    console.log("Adding to cart:", item);
    setSelectedItem(item);
    setTimeout(() => {
      setSelectedItem(null);
      // navigate("/cart");
    }, 3000);
  };

  let categoryBgColor = '';
  let categoryTextColor = '';
  switch (Category) {
    case 'Veg':
      categoryBgColor = 'bg-green-100';
      categoryTextColor = 'text-green-500';
      break;
    case 'Non-Veg':
      categoryBgColor = 'bg-red-100';
      categoryTextColor = 'text-red-500';
      break;
    case 'Drinks':
      categoryBgColor = 'bg-blue-100';
      categoryTextColor = 'text-blue-500';
      break;
    default:
      categoryBgColor = 'bg-gray-100';
      categoryTextColor = 'text-gray-500';
  }

  return (
    <div className={`bg-white shadow-md rounded-lg p-6 m-4 border border-gray-200 transition-transform transform hover:scale-105 ${categoryBgColor}`}>
      <div className="text-gray-600 text-xs mb-2">
        {/* <p>{id}</p> */}
      </div>
      <div className={`font-bold text-sm mb-2 p-2 rounded-md ${categoryTextColor}`}>
        <p> {Category}</p>
      </div>
      <div className="flex justify-center mb-4">
        <img className="w-48 h-48 object-cover rounded-lg shadow-md border-2 border-gray-300" src={Img} alt={Name} />
      </div>
      <div className="text-gray-900 text-2xl font-bold mb-2 p-2 rounded-md">
        <p>{Name}</p>
      </div>
      <div className="text-gray-700 mb-4 p-2 rounded-md text-lg italic">
        <p>{Discription}</p>
      </div>
      <div className="text-gray-900 font-bold text-xl mb-4">
        <p>₹ {price} </p>
      </div>
      
      <div>
        <button 
          onClick={handleAddToCart} 
          className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>

      {selectedItem && selectedItem.id === item.id && (
        <div className="bg-green-200 text-green-800 p-2 rounded-md mt-4 text-center">
          {`${selectedItem.Name} is added to cart`}
        </div>
      )}
    </div>
  );
}

export default Cartmenu;
