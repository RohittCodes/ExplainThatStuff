import React from "react";

const SnippetDisplay = (props) => {
  return (
    <div className="flex w-full border-2 rounded-md px-2 py-2">
      <div className="w-full flex justify-between">
        <p className="text-xl">{props.title}</p>
        <p>{props.code}</p>
        <p>{props.by}</p>
      </div>
      {/* <button>Some</button> */}
    </div>
  );
};

export default SnippetDisplay;
