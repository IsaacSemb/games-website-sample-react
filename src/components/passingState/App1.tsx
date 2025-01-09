import { useState } from "react";
import Cart from "./Cart";
import NavBar from "./NavBar";

function App1() {

  const [cartItems, setCartItems] = useState(["p1", "p2", "p3", "p4"]);


  function handleOnClearClick(){
    setCartItems([])
  }

  
  return (
    <>
      <NavBar itemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClearClick={handleOnClearClick} />
    </>
  );
}

export default App1;
