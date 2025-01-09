import { useState } from "react";

function App3() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart(
      // copy items intoo new object
      {
        ...cart,
        // alter the items array by producing new array
        items: cart.items.map(
          // arrow function inside the map
          (item) => {
            // look for the id you want to change
            if (item.id === 1) {
              // if you find it change it
              return { ...item, quantity: 7 };
              // if it doesnt match, just return the item
            } else {
              return item;
            }
          }
        ),
      }
    );

    console.log(cart);
  };

  return (
    <>
      <button onClick={handleClick}>change</button>
    </>
  );
}

export default App3;
