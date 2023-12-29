import React from "react";

const CodeCard = (props) => {
  return (
    <div className="w-full px-1 py-2 text-xl rounded-sm ring-1 ring-black font-mono">
      <p className="truncate">{props.value}</p>
    </div>
  );
};

export default CodeCard;
