import React from "react";
import SnippetSearch from "../components/snippet-search";
import CodeExplainer from "../components/code-explainer";

const SnippetsSearch = () => {
  return (
    <div className="h-full flex flex-col mx-2 my-2 gap-4">
      <SnippetSearch />
      <CodeExplainer />
    </div>
  );
};

export default SnippetsSearch;
