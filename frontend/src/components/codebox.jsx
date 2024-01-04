import { useState } from "react";
import { useMyContext } from "../lib/context-provider";

const Codebox = () => {
  const { pushToData } = useMyContext();
  const [inputValue, setInputValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [writtenBy, setWrittenBy] = useState("");

  const handleAddData = () => {
    if (inputValue === "") {
      return;
    }

    const newData = { key: inputValue, title: titleValue, by: writtenBy };
    pushToData(newData);
    setInputValue("");
  };

  return (
    <div className="w-full flex flex-col gap-2 items-end">
      <input
        type="text"
        onChange={(e) => {
          setTitleValue(e.target.value);
        }}
        className="w-full h-[56px] rounded-md ring-black ring-1 focus:outline-none p-2"
        placeholder="What it does??"
      />
      <textarea
        name=""
        id=""
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className="w-full h-full rounded-md ring-black ring-1 focus:outline-none resize-none p-2 font-mono"
      />
      <input
        type="text"
        onChange={(e) => {
          setWrittenBy(e.target.value);
        }}
        placeholder="Written by??"
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
