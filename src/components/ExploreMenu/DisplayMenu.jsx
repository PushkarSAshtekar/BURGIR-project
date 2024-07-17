import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import Cartmenu from "../Cartmenu";

function DisplayMenu() {
  const { Menuburgerlist } = useContext(StoreContext);
  const [filteredMenu, setFilteredMenu] = useState(Menuburgerlist);

  const filterMenu = (currentCategory) => {
    const updatedList = Menuburgerlist.filter(
      (item) => item.Category === currentCategory
    );
    setFilteredMenu(updatedList);
  };

  return (
    <div className="p-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10  shadow-md ">
        <h1 className="text-4xl font-extrabold text-orange-600 text-center mb-5 underline">
          Explore Our Menu
        </h1>
        <p className="text-xl text-gray-700 text-center mb-6">
          Discover a world of flavors with our diverse menu offerings, crafted
          to tantalize your taste buds and satisfy every craving.
        </p>
      </div>

      <div className="flex justify-center p-3">
        <div className="space-x-4">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => filterMenu("Veg")}
          >
            Veg
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => filterMenu("Non-Veg")}
          >
            Non-Veg
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => filterMenu("Drinks")}
          >
            Drinks
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredMenu.map((item, index) => (
          <Cartmenu
            key={index}
            id={item.id}
            Category={item.Category}
            Name={item.Name}
            Discription={item.Discription}
            price={item.price}
            Img={item.Img}
          />
        ))}
      </div>
    </div>
  );
}

export default DisplayMenu;
