import { useState } from 'react'

function App2() {

    const [ pizza, setPizza ] = useState({
        name:"Spicy Pepper",
        toppings: [ "mushrooms" ]
})

    function handleClick(){

        setPizza({
            ...pizza, toppings:[...pizza.toppings, 'cheese'],
        })

    }



  return (
    <>
        <h1>name: {pizza.name}</h1>
        <h1>name: {...pizza.toppings}</h1>
        <button onClick={handleClick}> change name</button>
    </>
  )
}

export default App2