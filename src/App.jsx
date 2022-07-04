import React, { useState, useEffect } from "react";
import Construction from "./pages/construction";
import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    const themeMode =
      window.localStorage.getItem("themeMode") === "light" ? true : false;
    setTheme(themeMode);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("themeMode", theme ? "light" : "dark");
  }, [theme]);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Construction theme={theme} onChangeTheme={() => setTheme(!theme)} />
    </ThemeProvider>
  );
}

export default App;
