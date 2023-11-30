import React from "react";
import X_icon from "../../assets/icons/X-icon.png";

function SponsorsCard() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row md:flex-row items-center dark:text-white gap-10 justify-center w-full md:pb-12 pb-16">
        <div className="md:w-1/4 w-1/3 flex flex-row justify-center items-center border-t-4  border-transparent transition-all pt-6  dark:bg-stone-950" >
          <img
            src={X_icon}
            className="w-40 rounded-md -mt-10  shadow-2xl z-10"
          />
        </div>
        <div className="md:w-1/4 w-1/3 flex flex-col justify-center items-center border-t-4  border-transparent transition-all pt-6  dark:bg-stone-950">
          <img
            src={X_icon}
            className="w-40 rounded-md -mt-10  shadow-2xl z-10"
          />
        </div>
        <div className="md:w-1/4 w-1/3 flex flex-col justify-center items-center border-t-4  border-transparent transition-all pt-6  dark:bg-stone-950">
          <img
            src={X_icon}
            className="w-40  rounded-md -mt-10  shadow-2xl z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default SponsorsCard;
