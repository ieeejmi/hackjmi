import React, { useContext } from "react";
import { DarkThemeContext } from "../../App";

function ThemeImage({ dark, light, className, ref, alt }) {
  const { isDarkTheme } = useContext(DarkThemeContext);

  return (
    <>
      <div className="my-auto w-full justify-center flex">
      {isDarkTheme ? (
        <img alt={alt} src={dark} className={className} ref={ref} />
      ) : (
        <img alt={alt} src={light} className={className} ref={ref} />
      )}
      </div>
    </>
  );
}

export default ThemeImage;
