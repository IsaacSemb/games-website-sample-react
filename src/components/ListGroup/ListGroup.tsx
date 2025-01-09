

interface ListGroupProps {
  heading: string;
  items: string[];
  onItemSelected: (item: string) => void;
}

import { useState } from "react";
function ListGroup({ items, heading, onItemSelected }: ListGroupProps) {

  const [selectedItem, setSelectedItem] = useState<null | number>(null);

  // event handler
  function handleClick(itemIndex: number) {
    setSelectedItem(itemIndex);
  }

  return (
    <>
      <h1>{heading}</h1>

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
              onItemSelected(item); // selcting item can do different things where the component has been used
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
