import React, { useState, useRef } from "react";
import { FcCollapse, FcExpand } from "react-icons/fc";

const Accordion = ({ title, content }) => {
  const [isOpened, setOpened] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentElement = useRef(null);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px");
  };
  return (
    <div
      onClick={HandleOpening}
      className="max-w-full w-full bg-gray-100 rounded-lg cursor-pointer "
    >
      <div className={" p-4  flex justify-between text-blue-900/75"}>
        <h4 className="font-semibold">{title}</h4>
        {isOpened ? <FcCollapse /> : <FcExpand />}
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className="bg-gray-200 overflow-hidden transition-all duration-200 rounded-b-lg"
      >
        {content.map((e, i) => (
          <p key={i} className="p-4">
            {e.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
