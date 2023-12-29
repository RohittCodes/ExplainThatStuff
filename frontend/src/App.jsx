import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SnippetAdder from "./pages/snippet-adder";
import SnippetsSearch from "./pages/snippets-search.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col gap-4">
        <Navbar />
        <Routes>
          <Route path="/add" element={<SnippetAdder />} />
          <Route path="/snippets" element={<SnippetsSearch />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
