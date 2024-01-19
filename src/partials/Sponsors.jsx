import React from "react";

import ThemeImage from "../components/Image";

import Devfolio from "../images/sponsors/devfolio.png";
import Polygon from "../images/sponsors/polygon.png";
import Replit from "../images/sponsors/replit.png";
import Replitwhite from "../images/sponsors/replitwhite.png";
import Devfoliowhite from "../images/sponsors/devfoliowhite.png";
import Polygonwhite from "../images/sponsors/polygonwhite.png";
import Quarbz from "../images/sponsors/quarbz.jpeg";
import Rosenfeld from "../images/sponsors/rosenfeld.webp";
import RosenfeldWhite from "../images/sponsors/rosenfeldWhite.webp";
import Axure from "../images/sponsors/axure.png";
import GMC from "../images/sponsors/GMC.png";
import Beeceptor from "../images/sponsors/beeceptor.png";

function Sponsors() {
  let sponsorData = {
    "Title Sponsor": [
      {
        dark: Quarbz,
        light: Quarbz,
        src: "https://quarbz.com/",
        alt: "QUARBZ LOGO",
      },
    ],
    "Platinum Sponsors": [
      {
        dark: Devfoliowhite,
        light: Devfolio,
        src: "https://devfolio.co/",
        alt: "DEVFOLIO LOGO",
      },
      {
        dark: Polygonwhite,
        light: Polygon,
        src: "https://polygon.technology/",
        alt: "POLYGON LOGO",
      },
    ],
    "Gold Sponsors": [
      {
        dark: Replitwhite,
        light: Replit,
        src: "https://replit.com",
        alt: "REPLIT LOGO",
      },
    ],
    "Silver Sponsors": [
      {
        dark: RosenfeldWhite,
        light: Rosenfeld,
        src: "https://rosenfeldmedia.com/",
        alt: "ROSENFELD LOGO",
      },
      {
        dark: Beeceptor,
        light: Beeceptor,
        src: "https://beeceptor.com/",
        alt: "BEECEPTOR LOGO",
      },
      // {
      //   dark: Solanawhite,
      //   light: Solana,
      //   src: "https://solana.com/",
      // },
      // {
      //   dark: Replitwhite,
      //   light: Replit,
      //   src: "https://replit.com/",
      // },
      // {
      //   dark: Streamyard,
      //   light: Streamyard,
      //   src: "https://streamyard.com/",
      // },
      // {
      //   dark: GOG,
      //   light: GOG,
      //   src: "https://www.geeksforgeeks.org/",
      // },
      // {
      //   dark: NS,
      //   light: NS,
      //   src: "https://www.newtonschool.co/",
      // },
      // {
      //   dark: xyzwhite,
      //   light: xyz,
      //   src: "https://gen.xyz/",
      // },
      {
        dark: Axure,
        light: Axure,
        src: "https://www.axure.com/",
        alt: "AXURE LOGO",
      },
    ],
    "Certificate Partners": [
      {
        dark: GMC,
        light: GMC,
        src: "https://givemycertificate.com/",
        alt: "GIVE_MY_CERTIFICATE LOGO",
      },
    ],
  };

  const SponsorStyles = {
    "Title Sponsor": "w-1/2 md:w-40",
    "Platinum Sponsors": "w-1/2 md:w-1/4 lg:w-1/5",
    "Gold Sponsors": "w-1/2 md:w-1/4 lg:w-1/5",
    "Silver Sponsors": "w-1/2 md:w-1/4 lg:w-1/5",
    "Certificate Partners": "w-1/2 md:w-1/4 lg:w-1/5",
  };

  return (
    <section className="relative" id="sponsors">
      {/* Section background (needs .relative class on parent and next sibling elements) */}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="dark:text-white h2 mb-4" data-aos="zoom-in">
              Sponsors
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
            {Object.keys(sponsorData).map((key) => (
              <div className="w-full flex flex-col items-center mt-5">
                <div className="flex w-full flex-row items-center justify-center mb-2">
                  <hr className={`w-20 m-2 dark:text-white`} />
                  <h1 className="dark:text-white h4 my-5 text-xl md:text-2xl">
                    {key}
                  </h1>
                  <hr className={`w-20 m-2 dark:text-white`} />
                </div>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  {sponsorData[key].map((sponsor) => {
                    return (
                      <button
                        className={`w-1/3 ${SponsorStyles[key]} p-2`}
                        data-aos="fade-up"
                        onClick={() => {
                          window.open(sponsor.src, "_blank");
                        }}
                      >
                        <ThemeImage
                          dark={sponsor.dark}
                          light={sponsor.light}
                          alt={sponsor.alt}
                          className={"w-full rounded-md"}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border" />
      </div>
    </section>
  );

  //   Dummy sponsors
  // return (
  // 	<section className="relative" id="sponsors">
  // 		{/* Section background (needs .relative class on parent and next sibling elements) */}

  // 		<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
  // 			<div className="pt-12 md:pt-20">
  // 				{/* Section header */}
  // 				<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
  // 					<h1 className="dark:text-white h2 mb-4" data-aos="zoom-in">
  // 						Sponsors
  // 					</h1>
  // 					<div
  // 						className="my-5 flex justify-center items-center gap-2"
  // 						data-aos="zoom-in">
  // 						<p className="text-gray-600">Want To Sponsor Us?</p>
  // 						<a
  // 							href="https://drive.google.com/file/d/1rygr-fCBemNPIAhNjEM8bg3mOGGT99Zr/view?usp=sharing"
  // 							target="_blank"
  // 							className="dark:text-white font-semibold hover:scale-105 transition-all">
  // 							Click Here
  // 						</a>
  // 					</div>
  // 					<SponsorsCard/>
  // 				</div>
  // 			</div>

  // 			<div className="border" />
  // 		</div>
  // 	</section>
  // );
}

export default Sponsors;
