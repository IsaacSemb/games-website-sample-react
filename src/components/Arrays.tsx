import { useState } from "react";

function Arrays() {
  const [person, setPerson] = useState({
    name: "isaac",
    address: {
      street: "curzon",
      flat: "uni locks",
    },
  });

  function handleClick() {
    const newperson = {
      ...person,
      address: { ...person.address, flat: "ABC" },
    };
    setPerson({ ...newperson });
  }

  return (
    <div>
      <button onClick={handleClick}>press me</button>
      <h1>{person.name}</h1>
      <h1>{person.address.flat}</h1>
    </div>
  );
}

export default Arrays;
