import { useState } from 'react'

function App1() {

    const [ game, setGame ] = useState({
        id:1,
        player:{
            name:'Semb'
        }
    })

    function handleClick(){

        setGame({
            ...game, 
            player:{...game.player, name:"Mimi"},
        })

    }



  return (
    <>
        <h1>name: {game.player.name}</h1>
        <button onClick={handleClick}> change name</button>
    </>
  )
}

export default App1