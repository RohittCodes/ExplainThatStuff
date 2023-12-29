import React from "react";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import SnippetDisplay from "./snippet-display";
import CodeExplainer from "./code-explainer";

const SnippetSearch = () => {
  const codeSnippets = [
    { title: "Add two numbers", code: "Somecode", by: "Someone" },
    { title: "Add two numbers", code: "Somecode", by: "Someone" },
    { title: "Add two numbers", code: "Somecode", by: "Someone" },
  ];
  return (
    <div className="flex flex-col">
      <div className="h-full flex flex-col gap-2">
        <div className="w-full flex border-[3px] border-black rounded-full pr-2">
          <button className="w-12 h-12 flex items-center justify-center">
            <FaMicrophone size={22} />
          </button>
          <input
            type="text"
            placeholder="Type your query or speak using mic..."
            className="w-full h-12 focus:outline-none border-none font-normal text-xl"
          />
          <button className="w-12 h-12 flex items-center justify-center">
            <FaSearch size={22} />
          </button>
        </div>
        <div className="h-fit grid grid-rows-3 border-2 rounded-md py-2 px-2 gap-2">
          {codeSnippets.map((codes, index) => (
            <SnippetDisplay
              title={codes.title}
              by={codes.by}
              code={codes.code}
            />
          ))}
        </div>
      </div>
      <div>
        <CodeExplainer />
      </div>
    </div>
  );
};

export default SnippetSearch;
