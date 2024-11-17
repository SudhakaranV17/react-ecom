import "./App.scss";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import { useState } from "react";
import { clsx } from "clsx";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isFixed, setIsFixed] = useState(true);

  // Toggle sidebar state
  const sidebarHandler = () => {
    setIsFixed(!isFixed);
  };

  return (
    <>
      <div
        className={clsx(
          `absolute top-0 w-full transition-all ease-in-out duration-300 z-0`,
          isFixed ? "pl-[15vw]" : "pl-[5vw]"
        )}
      >
        <Header />
      </div>

      <div className="flex">
        <div
          className={clsx(
            "hover:w-[15vw] transition-all group ease-in-out duration-300 bg-black/90 relative",
            isFixed ? "w-[15vw]" : "w-[5vw]"
          )}
          // Ref to calculate the width dynamically
        >
          <Sidebar sidebarHandler={sidebarHandler} isFixed={isFixed} />
        </div>

        <div className="flex-grow pt-[110px] pl-16">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
