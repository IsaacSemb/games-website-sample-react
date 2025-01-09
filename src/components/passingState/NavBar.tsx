

interface navBarProps{
  itemsCount: number
}

function NavBar({itemsCount}:navBarProps) {
  return (
    <h1>NavBar: {itemsCount}</h1>
  )
}

export default NavBar