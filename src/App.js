import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Soda from "./Soda";
import Chips from "./Chips";
import FreshSardines from "./FreshSardines";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Soda" element={<Soda />} />
          <Route path="/Chips" element={<Chips />} />
          <Route path="/Fresh_Sardines" element={<FreshSardines />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
