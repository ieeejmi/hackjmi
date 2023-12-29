import React, { useState, useRef, useEffect, useMemo, useContext } from "react";
import Transition from "../utils/Transition";
import ThemeImage from "../components/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Devfolio from "../images/sponsors/devfolio.png";
import Polygon from "../images/sponsors/polygon.png";
import Filecoin from "../images/sponsors/filecoin.png";
import Solana from "../images/sponsors/solana.png";
import Replit from "../images/sponsors/replit.png";
import GMC from "../images/sponsors/GMC.png";
import NS from "../images/sponsors/NS.png";
import GOG from "../images/sponsors/GOG.png";
import xyz from "../images/sponsors/xyz.png";
import xyzwhite from "../images/sponsors/xyzwhite.png";
import Replitwhite from "../images/sponsors/replitwhite.png";
import Filecoinwhite from "../images/sponsors/filecoinwhite.png";
import Devfoliowhite from "../images/sponsors/devfoliowhite.png";
import Polygonwhite from "../images/sponsors/polygonwhite.png";
import Solanawhite from "../images/sponsors/solanawhite.png";
import M16Labs from "../images/sponsors/m16labs-logo.png";
import Axure from "../images/sponsors/axure.png";
import Streamyard from "../images/sponsors/streamyard.png";

import { DarkThemeContext } from "../App";
import { Link } from "react-router-dom";

function PreviousSponsors(props) {
  const { isDarkTheme } = useContext(DarkThemeContext);

  let sponsorData = {
    "M16Labs": [
      {
        dark: M16Labs,
        light: M16Labs,
        src: "https://m16labs.com/",
      },
    ],
    "Devfolio": [
      {
        dark: Devfoliowhite,
        light: Devfolio,
        src: "https://devfolio.co/",
      },
    ],
    "Polygons": [
      {
        dark: Polygonwhite,
        light: Polygon,
        src: "https://polygon.technology/",
      },
    ],
    "Filecoin": [
      {
        dark: Filecoinwhite,
        light: Filecoin,
        src: "https://filecoin.io/",
      },
    ],
    "Solana": [
      {
        dark: Solanawhite,
        light: Solana,
        src: "https://solana.com/",
      },
    ],
    "Replit": [
      {
        dark: Replitwhite,
        light: Replit,
        src: "https://replit.com/",
      },
    ],
    "Streamyard": [
      {
        dark: Streamyard,
        light: Streamyard,
        src: "https://streamyard.com/",
      },
    ],
    "GOG": [
      {
        dark: GOG,
        light: GOG,
        src: "https://www.geeksforgeeks.org/",
      },
    ],
    "NS": [
      {
        dark: NS,
        light: NS,
        src: "https://www.newtonschool.co/",
      },
    ],
    "xyz": [
      {
        dark: xyzwhite,
        light: xyz,
        src: "https://gen.xyz/",
      },
    ],

    "Axure": [
      {
        dark: Axure,
        light: Axure,
        src: "https://www.axure.com/",
      },
    ],
    "GMC": [
      {
        dark: GMC,
        light: GMC,
        src: "https://givemycertificate.com/",
      },
    ],
  };

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    arrows: false,
  };

  return (
    <section className="relative" id="previous_sponsors">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20 ">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center ">
            <h1 className="dark:text-white h2 mb-4" data-aos="zoom-in">
              Previous Sponsors
            </h1>
            <div
              className="my-5 flex justify-center items-center gap-2"
              data-aos="zoom-in"
            >
              <p className="text-gray-600">Want To Sponsor Us?</p>
              <a
                href="https://drive.google.com/file/d/1rygr-fCBemNPIAhNjEM8bg3mOGGT99Zr/view?usp=sharing"
                target="_blank"
                className="dark:text-white font-semibold hover:scale-105 transition-all"
              >
                Click Here
              </a>
            </div>
            <Slider {...settings}>
              {Object.keys(sponsorData).map((key) => (
                <div className="w-full flex flex-row items-center mt-5">
                  <div className=" w-full rounded-md flex flex-wrap justify-center items-center gap-4">
                    {sponsorData[key].map((sponsor) => {
                      return (
                        <>
                          <button
                            className={`w-1/3 
												p-2`}
                            data-aos="fade-up"
                            onClick={() => {
                              window.open(sponsor.src, "_blank");
                            }}
                          >
                            <ThemeImage
                              dark={sponsor.dark}
                              light={sponsor.light}
                              className={"w-full rounded-md h-full"}
                            />
                          </button>
                        </>
                      );
                    })}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      
      <hr className="border border-gray-300 w-3/4 mx-auto my-2" />
    </section>
  );
}

export default PreviousSponsors;
