import { FormEvent, useRef } from "react";



function Form() {

  const nameRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef<HTMLInputElement>(null)

  const person = {name:'', age:0} 


  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();
    if (nameRef.current !== null){
      console.log(nameRef.current.value)
      person.name = nameRef.current.value
    }
    if (ageRef.current !== null){
      console.log(ageRef.current.value)
      person.age = parseInt(ageRef.current.value)
    }
    console.log(person);
    
    
  }










  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label  htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form;
