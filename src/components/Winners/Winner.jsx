import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Winner = ({ winner, index, currentIndex, nextSlide, prevSlide }) => {
  const [showMore, setShowMore] = useState(false);
  const clipLen = 580;

  return (
    <div
      key={index}
      className={`flex flex-col lg:flex-row mx-2 w-90 m-2 ${
        index === currentIndex ? "" : "hidden"
      }`}
    >
      <div className="flex-1 overflow-hidden rounded">
        <img src={winner.img} alt="" className="w-full h-full" />
      </div>
      <div className="flex-1 p-5 dark:text-white">
        <p className="mb-5 text-center text-3xl font-bold">{winner.teamName}</p>
        <div className="flex justify-start gap-2">
          <p className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2 text-left ">Project name: </p>
          <p className="text-left text-lg">{winner.projectName}</p>
        </div>
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2 text-left">Members:</h3>
        <ul className="list-none list-inside flex flex-wrap gap-2">
          {winner.TeamMember &&
            winner.TeamMember.map((member, memberIndex) => (
              <li
                key={memberIndex}
                className="bg-blue-100 text-blue-900 dark:bg-blue-800 dark:text-white px-3 py-1 rounded-full text-sm"
              >
                {member}
              </li>
            ))}
        </ul>
        <p className="italic text-gray text-2xl dark:text-gray-300 mt-3">Review</p>
        <div className="italic text-gray-500 mt-15 h-60 overflow-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300 dark:scrollbar-thumb-blue-300 dark:scrollbar-track-gray-700">
          <p className="text-left">“
            {winner.Review.length < clipLen || showMore
              ? winner.Review
              : winner.Review.slice(0, clipLen)}
            {winner.Review.length >= clipLen && !showMore && (
              <span
                className="text-cyan-900 cursor-pointer"
                onClick={() => setShowMore(true)}
              >
                ...read more 
              </span>
            )}
            ”
          </p>
        </div>
        <div className="flex justify-between mt-8">
          <button
            className="flex items-center p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
            onClick={prevSlide}
          >
            <FaArrowLeft className="text-2xl text-gray-600 dark:text-gray-300" />
          </button>
          <button
            className="flex items-center p-3 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
            onClick={nextSlide}
          >
            <FaArrowRight className="text-2xl text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Winner;
