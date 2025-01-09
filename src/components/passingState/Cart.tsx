interface cartProps {
  cartItems: string[];
  onClearClick: ()=>void;
}

function Cart({ cartItems, onClearClick }: cartProps) {
  return (
    <>
      <h1>Cart</h1>

      {cartItems.map((item) => (
        <h4 key={item}>{item}</h4>
      ))}

      <button onClick={onClearClick}>CLEAR CART</button>

    </>
  );
}

export default Cart;
