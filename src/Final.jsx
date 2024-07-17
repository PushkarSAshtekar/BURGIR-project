import React from "react";

import Autoplay from "./components/Autoplay";
import Menubar from "./components/Menubar";
import Coupen from "./components/Coupen";
import Wokring from "./components/Working.jsx";

function Final() {
  return (
    <>
     
      {/* // <Header/> */}

      <div className="border-b-2">
        <Autoplay />
      </div>

      <div className="p-20 ">
        <Menubar />
      </div>

      
        <div className="">
          <Coupen />
        </div>
       
    

      <div className='mt-96'>
        <Wokring/>
    </div>
    </>
  );
}

export default Final;
