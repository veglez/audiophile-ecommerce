import React from "react";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <h2>Mi aplicación de react desde cero</h2>
      <Button text="Outlined" type="outlined" />
      <Button text="Filled" type="filled" />
    </div>
  );
};

export default App;
