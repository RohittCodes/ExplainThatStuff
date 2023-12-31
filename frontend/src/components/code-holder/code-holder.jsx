import React from "react";
import CodeCard from "./code-card";
import { useMyContext } from "../../lib/context-provider";

const CodeHolder = () => {
  const { data } = useMyContext();

  const handleAddData = async () => {
    try {
      const response = await fetch("http://localhost:5000/codes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
      console.log("Done");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-w-[32rem] max-w-[32rem] h-full flex flex-col gap-2 items-end">
      <div className="w-full h-full rounded-md ring-1 px-2 py-4 overflow-y-scroll ring-black">
        <div className="flex flex-col gap-2">
          {data.map((data, index) => (
            <CodeCard key={index} title={data.title} code={data.key} />
          ))}
        </div>
      </div>
      <button
        className="w-fit bg-indigo-500 px-2 py-2 rounded-md shadow-md text-xl"
        onClick={() => {
          handleAddData();
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default CodeHolder;
