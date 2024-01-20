


import React, { useContext } from "react";
import { DarkThemeContext } from "../App";
import { Gallery } from "react-grid-gallery";

function gallery() {

  const { isDarkTheme } = useContext(DarkThemeContext);
  const images = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    },
  ];
  return (
    <section className="relative" id="gallery">
      <div
        className="md:mx-60 text-center py-20 md:py-20 h-[96vh] overflow-y-scroll "
        data-aos="zoom-out"
      >
        <h1 className="dark:text-white h2 mb-4" data-aos="zoom-in">
          Gallery
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((x,index) => (
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                key={index}
                src={x.src}
                alt={x.src}
              />
            </div>
          ))}
        </div>
      </div>
      <hr className="border border-gray-300 w-3/4 mx-auto my-2" />
    </section>
  );
}

export default gallery;
