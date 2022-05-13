import React, { useState } from "react";
import "./App.css";
import InitialPage from "../InitialPage/InitialPage";
import { UserContext } from "../../UserContext";

function App() {
  const [name, setName] = useState("Benko");

  return (
    <UserContext.Provider value={{ name, setName }}>
      <InitialPage />
    </UserContext.Provider>
  );
}

export default App;
