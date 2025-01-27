import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";
import FeaturedPet from "./Components/FeaturedPet";

function App() {
  const [day, setDay] = useState("02/24/23");
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      {/* <FeaturedPet day={day} /> */}
      <EmployeeList />
      {/* <button
        onClick={() => setDay(day === "02/24/23" ? "02/25/23" : "02/26/23")}
      >
        Change Day
      </button>
      <button onClick={() => setCount(count + 1)}>
        Force App to re-render
      </button> */}
    </>
  );
}

export default App;
