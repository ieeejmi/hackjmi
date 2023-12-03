import React, { useState, useRef, useEffect, useMemo, useContext } from "react";

import SponsorsCard from "../components/Sponsors/SponsorsCard";

import { DarkThemeContext } from "../App";
import { Link } from "react-router-dom";

function Sponsors(props) {
	const { isDarkTheme } = useContext(DarkThemeContext);



	

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
							data-aos="zoom-in">
							<p className="text-gray-600">Want To Sponsor Us?</p>
							<a
								href="https://drive.google.com/file/d/1rygr-fCBemNPIAhNjEM8bg3mOGGT99Zr/view?usp=sharing"
								target="_blank"
								className="dark:text-white font-semibold hover:scale-105 transition-all">
								Click Here
							</a>
						</div>
						<SponsorsCard/>
					</div>
				</div>

				<div className="border" />
			</div>
		</section>
	);
}

export default Sponsors;
