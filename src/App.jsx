import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Outlet />
      <h2>Footer</h2>
    </>
  );
}

export default App;
