import { useState } from "react"

function ObjectStateHandling() {

  const [ drink1, setDrink1 ] = useState({
    title:"Americano",
    price:5
  })
  const [ drink2, setDrink2 ] = useState({
    title:"Americano",
    price:5
  })


  function handleClick1(){
    const drink1 = { title:"Americano", price:20 }
    setDrink1(drink1)
  }


  function handleClick2(){
    const drink = { title:"Americano", price:20 }
    setDrink2({...drink,title:"espresso"} )
  }



  return (
    <div>
      <button onClick={handleClick1}>change1</button>
      <p>{drink1.price}</p>

      <button onClick={handleClick2}>change2</button>
      <p>{drink2.title}</p>
    </div>
  )
}

export default ObjectStateHandling