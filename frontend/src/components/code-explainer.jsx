import { useState } from "react";

const CodeExplainer = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleProcessData = async () => {
    try {
      const response = await fetch("http://localhost:5000/code-explain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      const data = await response.json();
      setOutput(data.result);
    } catch (error) {
      console.error(error);
    }
  };

  const displayData = output.split("\n");

  return (
    <div className="h-screen flex flex-col justify-center items-center mx-8 gap-4">
      <textarea
        type="text"
        onChange={handleInput}
        className="h-36 w-full p-4 border-2 border-black rounded-md"
      />
      <button
        onClick={handleProcessData}
        className="bg-indigo-500 rounded-md h-8 w-[10%]"
      >
        Click me
      </button>
      <div>
        {displayData.map((data, index) => (
          <p key={index}>{data}</p>
        ))}
      </div>
    </div>
  );
};

export default CodeExplainer;
