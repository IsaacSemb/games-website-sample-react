//
// PASSING DATA VIA PROPS ( PROPERTIES )
//

/* 
if we have different list types, we can make this dynamic
we just have to cleverly design the list by use of objects

example

{
list_heading: string
list_items: list
}
so called examples or models are called interfaces
*/

interface ListGroupsProps {
  heading: string;
  items: string[];
  itemSelected: (item: string) => void;
}

import { useState } from "react";
function ListGroups({ items, heading, itemSelected }: ListGroupsProps) {
  // const items = ["kampala", "nairobi", "mombasa", "london"];
  //  console.log ( useState(initial) ); // in browser [ initial, boundState ]

  const [selectedItem, setSelectedItem] = useState<null | number>(null);

  // event handler
  function handleClick(itemIndex: number) {
    setSelectedItem(itemIndex);
  }

  //
  // IF YOUI HAVE MANY LISTS, EACH LIST WILL HAVE ITS OWN STATE
  //

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
              itemSelected(item); // selcting item can do different things where the component has been used
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroups;
