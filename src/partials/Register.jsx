import React, { useState, useRef, useEffect, useContext } from "react";
import { DarkThemeContext } from "../App";
import Transition from "../utils/Transition";

function Register() {
  const { isDarkTheme } = useContext(DarkThemeContext);
  const buttonTheme = isDarkTheme ? "dark" : "light";
  return (
    <section className="relative" id="register">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="dark:text-white h2 mb-4">Register</h1>
            <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center sm:items-center mb-2"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
            <div
                className="apply-button self-center justify-center"
                data-hackathon-slug="hackjmi2025"
                data-button-theme="light"
            ></div>
            </div>
            <section className="text-gray-600 dark:text-white w-full text-left">              
              <strong>To register, follow these steps:</strong>
              <ol className="flex flex-col gap-2 mt-4 mb-4">
                <li>1. Click the "Apply with Devfolio" button above</li>
                <li>
                  2. Create an account on devfolio. If you already have an
                  account, sign in.
                </li>
                <li>3. Complete your application and submit for review.</li>
                <li>
                  4. If you have a team, register your team on Devfolio and add
                  team members.
                </li>
                <li>
                  5. Manage your team and submissions on your Devfolio hackathon
                  dashboard.
                </li>
              </ol>
              {/* <div className="flex gap-2">
                <p className="font-semibold">Or you can apply at</p>
                <a
                  href="http://hack-jmi.devfolio.co"
                  target="_blank"
                  className="text-orange-600 font-semibold"
                >
                  hack-jmi.devfolio.co
                </a>
              </div> */}
              {/* Coming Soon */}
            </section>
          </div>
        </div>

        <div className="border" />
      </div>
    </section>
  );
}

export default Register;
