import React, { useContext } from "react";
import { DarkThemeContext } from "../../App";

function ThemeImage({ dark, light, className, ref, alt }) {
  const { isDarkTheme } = useContext(DarkThemeContext);

  return (
    <React.Fragment>
      {isDarkTheme ? (
        <img alt={alt ? alt : ""} src={dark} className={className} ref={ref} />
      ) : (
        <img alt={alt ? alt : ""} src={light} className={className} ref={ref} />
      )}
    </React.Fragment>
  );
}

export default ThemeImage;
