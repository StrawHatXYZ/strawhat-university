import React, { useState, useRef } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";
import { BiCheck } from "react-icons/bi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";

const Accordion = ({ key, id, title, content, module }) => {
  const [isOpened, setOpened] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentElement = useRef(null);
  const percentage = 10;

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px");
  };
  return (
    <>
      <div className="max-w-full w-full  bg-white hover:bg-secondary-300 cursor-pointer">
        <div
          onClick={HandleOpening}
          className={" p-6  flex justify-between items-center text-black"}
        >
          <h4 className="font-semibold flex items-center">
            <div className="flex flex-col justify-center items-center">
              <span className="text-xs text-primary-600/75">Module</span>
              <span className="text-xl text-primary-600/75">{id + 1}</span>
            </div>
            <span className="ml-10 text-xl">{title}</span>
          </h4>
          <div className="flex items-center">
            <span className="w-10 h-10 mr-6">
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "round",

                  // Text size
                  textSize: "25px",
                  pathTransitionDuration: 0.5,

                  pathColor: `rgba(67, 25, 255,${percentage / 100})`,
                  textColor: `rgba(67, 25, 255)`,
                })}
              />
            </span>

            {isOpened ? <FcCollapse /> : <FcExpand />}
          </div>
        </div>
        <div
          ref={contentElement}
          style={{ height: height }}
          className="bg-white overflow-hidden transition-all duration-200 divide-y divide-gray-100"
        >
          {content.map((e, i) => (
            <Link
              key={i}
              href={`/courses/${module}/${e.name
                .toLowerCase()
                .split(" ")
                .join("-")}`}
            >
              <div
                className="flex items-center justify-between hover:bg-secondary-300"
                key={i}
              >
                <p className="p-4  font-semibold">
                  {i + 1}. {e.name}
                </p>

                {(i + e.name.length) % 3 == 0 ? (
                  <span className="text-xs text-primary-600/75 mr-8">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full  bg-white border-2 border-primary-500 "></div>
                  </span>
                ) : (
                  <span className="text-xs text-primary-600/75 mr-8">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full  bg-primary-500 ">
                      <BiCheck className="text-white text-2xl" />
                    </div>
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Accordion;
