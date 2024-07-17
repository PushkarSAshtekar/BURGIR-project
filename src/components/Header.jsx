
import React, { useContext } from "react";
import logo from "../assets/burgurlogo.png";
import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { StoreContext } from "../context/StoreContext";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(StoreContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <nav className="flex justify-between items-center border-b-2">
          <NavLink to="/">
            <div className="flex items-center h-20 w-20 m-1">
              <img src={logo} alt="logo" />
              <span className="font-5xl font-semibold">BURGIR</span>
            </div>
          </NavLink>
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v2h16v-2z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute top-16 right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <ul className="py-2">
                  <li className="hover:bg-gray-100">
                    <NavLink
                      to="/login"
                      onClick={toggleMenu}
                      className="block px-4 py-2"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="hover:bg-gray-100">
                    <NavLink
                      to="/coupen"
                      onClick={toggleMenu}
                      className="block px-4 py-2"
                    >
                      Offers
                    </NavLink>
                  </li>
                  <li className="hover:bg-gray-100">
                    <NavLink
                      to="/cart"
                      onClick={toggleMenu}
                      className="block px-4 py-2 relative"
                    >
                      Cart{" "}
                      {cart.length > 0 && (
                        <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full ml-1">
                          {cart.length}
                        </span>
                      )}
                    </NavLink>
                  </li>
                  <li className="hover:bg-gray-100">
                    <NavLink
                      to="/search"
                      onClick={toggleMenu}
                      className="block px-4 py-2"
                    >
                      Search
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="hidden md:block">
            <ul className="flex gap-5 m-10 font-5xl font-semibold uppercase">
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/coupen">Offers</NavLink>
              </li>
              <li className="flex flex-row items-center gap-2 relative">
                <NavLink to="/cart">
                  <BsCart4 />
                </NavLink>
                <NavLink to="/cart" className="relative">
                  Cart{" "}
                  {cart.length > 0 && (
                    <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full ml-1">
                      {cart.length}
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/search">Search</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
