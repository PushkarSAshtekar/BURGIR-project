import React from "react";

function CheckOut() {
  return (
    <>
      <div className="font-sans bg-gray-100">
        <div className="flex max-sm:flex-col gap-4 h-full">
          <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 sm:h-screen sm:sticky sm:top-0 lg:min-w-[350px] sm:min-w-[300px]">
            <div className="relative h-full">
              <div className="p-4 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-2 shrink-0 bg-gray-300 rounded-md">
                      <img src="" className="w-full object-contain" alt="" />
                    </div>
                    <div className="w-full">
                      <h3 className="text-base text-white">Split Sneakers</h3>
                      <ul className="text-xs text-gray-300 space-y-1 mt-2">
                        <li className="flex flex-wrap gap-4">
                          Size <span className="ml-auto">37</span>
                        </li>
                        <li className="flex flex-wrap gap-4">
                          Quantity <span className="ml-auto">2</span>
                        </li>
                        <li className="flex flex-wrap gap-4">
                          Total Price <span className="ml-auto">$40</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Other items */}
                </div>
              </div>

              <div className="md:absolute md:left-0 md:bottom-0 bg-gray-800 w-full p-4">
                <h4 className="flex flex-wrap gap-4 text-base text-white">
                  Total <span className="ml-auto">$84.00</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto w-full h-max rounded-md p-4 sticky top-0">
            <h2 className="text-xl font-bold text-gray-800">
              Complete your order
            </h2>
            <form className="mt-8">{/* Form Inputs */}</form>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
