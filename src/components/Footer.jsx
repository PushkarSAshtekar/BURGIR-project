


import React from "react";
import logo from "../assets/burgurlogo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-800 flex flex-col justify-between items-center text-gray-300 py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between w-full">
        
        <div className="text-center lg:text-left mb-4 lg:mb-0 lg:mr-12">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 mx-auto lg:mx-0 mb-4 lg:mb-0"
          />
          <div className="lg:w-80">
            <p className="">
              Your go-to fast-food restaurant serving delicious burgers, fries,
              and shakes with lightning-fast service and unbeatable taste.
            </p>
          </div>
        </div>

        
        <div className="text-center flex flex-col items-center lg:items-start mb-4 lg:mb-0 lg:mr-12">
          <h3 className="text-xl font-semibold mb-2">BURGIR</h3>

          <div className="mt-4 font-semibold cursor-pointer">
            <a href="#" className="mb-2 block">
              Home
            </a>
            <a href="#" className="mb-2 block">
              About
            </a>
            <a href="#" className="mb-2 block">
              Delivery
            </a>
            <a href="#" className="block">
              Admin
            </a>
          </div>
        </div>

       
        <div className="text-center lg:text-left ">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <div className="">
            <p>123 Main Street</p>
            <p>New York, NY 10001</p>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-white w-full mt-2 lg:hidden"></div>
      
      <div className="text-center lg:text-left p-3">
        
        <h1 className="text-sm lg:text-base">
          Copyright 2024 @ BURGIR.com - All Rights Reserved.
        </h1>
      </div>
    </footer>
  );
}
