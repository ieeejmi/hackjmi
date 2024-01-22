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
        <p className="text-center ">Project name</p>
        <p className="text-center text-lg">{winner.projectName}</p>
        <ul className="list-none list-inside">
          MEMBERS:-
          {winner.TeamMember &&
            winner.TeamMember.map((member, memberIndex) => (
              <li key={memberIndex}>{member}</li>
            ))}
        </ul>
        <p className="italic text-gray text-2xl dark:text-gray-300">Review</p>
        <div className="italic text-gray-500 mt-15 h-60 overflow-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-300 dark:scrollbar-thumb-blue-300 dark:scrollbar-track-gray-700">
          <p>
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
          </p>
        </div>
        <div className="flex justify-between m-6">
          <div className="flex items-center cursor-pointer" onClick={prevSlide}>
            <FaArrowLeft
              style={{ fontSize: "2rem" }}
              className="text-gray-500 dark:text-gray-300"
            />
          </div>
          <div className="flex items-center cursor-pointer" onClick={nextSlide}>
            <FaArrowRight
              style={{ fontSize: "2rem" }}
              className="text-gray-500 dark:text-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winner;
