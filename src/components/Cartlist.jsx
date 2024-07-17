

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

export default function Cartlist() {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-orange-600">Shopping Cart</h1>
      {cart.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row justify-between items-center mb-6 transition-transform transform hover:scale-105"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src={item.Img}
              alt={item.Name}
              className="w-32 h-32 object-cover mr-6 rounded-lg border-2 border-gray-300"
            />
            <div>
              <h2 className="text-xl font-bold mb-2 text-gray-800">{item.Name}</h2>
              <p className="text-gray-600 mb-2">{item.Discription}</p>
              <p className="text-gray-600 font-semibold">{item.Category}</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="mr-8 mb-4 md:mb-0">
              <p className="text-lg font-semibold text-gray-700">Price: ₹{item.price || 0}</p>
              <p className="text-lg font-semibold text-gray-700">Total: ₹{(item.price || 0) * (item.quantity || 1)}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => incrementQuantity(item.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
              >
                +
              </button>
              <p className="text-lg font-semibold text-gray-700">{item.quantity}</p>
              <button
                onClick={() => decrementQuantity(item.id)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
              >
                -
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="text-right text-2xl font-bold mb-4">Total: ₹{total}</div>
      {cart.length > 0 && (
        <div className="text-right space-x-4">
          <button
            onClick={clearCart}
            className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors duration-200"
          >
            Remove All
          </button>
          <button
            onClick={handleCheckout}
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors duration-200"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
