// import { MouseEvent } from "react";
import { useState } from "react";

function ListGroup() {
  const items = ["kampala", "nairobi", "mombasa", "london"];

  const [selectedItem, setSelectedItem] = useState<null | number>(null);

  function handleClick(itemIndex: number) {
    setSelectedItem(itemIndex);
    
    
  }

  return (
    <>
      <h1>List</h1>

      {items.length === 0 ? <p>NO ITEMS</p> : null}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              handleClick(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
