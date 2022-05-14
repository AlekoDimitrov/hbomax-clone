import React, { useState } from "react";
import "./App.css";
import InitialPage from "../InitialPage/InitialPage";
import { UserContext } from "../../UserContext";
import { ThemeContext } from "../../ThemeContext";

function App() {
  const [name, setName] = useState("Aleko");
  const [theme, setTheme] = useState("background1");

  return (
    <UserContext.Provider value={{ name, setName }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <InitialPage />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
