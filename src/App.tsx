import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <h2>Mi aplicación de react desde cero</h2>
      <Button text="Outlined" type="outlined" />
      <Button text="Filled" type="filled" icon=<p>parrafo</p> />
    </div>
  );
};

export default App;
