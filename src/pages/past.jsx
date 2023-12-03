import React from "react";
import Header from "../partials/Header";
import { useContext } from "react";
import { DarkThemeContext } from "../App";
import Gallery from "../partials/Gallery";
import Winners from "../partials/Winners";
import Sponsor from "../partials/Current_sponsor";
import { useState } from "react";

function past() {

	const { setIsDarkTheme, isDarkTheme } = useContext(DarkThemeContext);

	return (
		<div className="dark:bg-black transition-all flex flex-col min-h-screen overflow-hidden" id="">
			<Header UpdateTheme={() => setIsDarkTheme(!isDarkTheme)} />
            <main className="flex-grow">
				<Gallery />
				<Sponsor />
				<Winners />
			</main>
        </div>
        
	);
}

export default past;
