import "./App.scss";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import { useState } from "react";
import { clsx } from "clsx";
function App() {
  const [isFixed, setIsFixed] = useState(true);
  const sidebarHandler = () => {
    setIsFixed(!isFixed);
    console.log(isFixed);
  };
  return (
    <div className="flex">
      <div
        className={clsx(
          "hover:w-[15vw] transition-all group",
          isFixed ? "w-[15vw] " : "w-[5vw]"
        )}
      >
        <Sidebar sidebarHandler={sidebarHandler} isFixed={isFixed} />
      </div>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
