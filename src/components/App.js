import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [theme, setTheme] = useState(false)

  function handleClick () {
    return setTheme (!theme)
}
  const appClass = theme ? "App dark" : "App light"
  const modeType = theme ? "Dark Mode" : "Light Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{modeType}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
