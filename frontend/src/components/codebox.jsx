import { useState } from "react";
import { useMyContext } from "../lib/context-provider";

const Codebox = () => {
  const { pushToData } = useMyContext();
  const [inputValue, setInputValue] = useState("");

  const handleAddData = () => {
    if (inputValue === "") {
      return;
    }

    const newData = { key: inputValue };
    pushToData(newData);
    setInputValue("");
  };

  return (
    <div className="w-full flex flex-col gap-2 items-end">
      <textarea
        name=""
        id=""
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className="w-full h-full rounded-md ring-black ring-1 focus:outline-none resize-none p-2 font-mono"
      />
      <button
        onClick={handleAddData}
        className="w-fit bg-indigo-500 px-2 py-2 rounded-md shadow-md text-xl"
      >
        Add Snippet
      </button>
    </div>
  );
};

export default Codebox;
