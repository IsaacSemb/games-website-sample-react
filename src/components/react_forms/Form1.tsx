/* eslint-disable no-irregular-whitespace */
// import { FormEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface formData {
  name: string;
  age: number;
}

function Form1() {
  const { register, handleSubmit, formState } = useForm<formData>();

  // useForm OBJECT PROPERTIES
  // formState: Object { defaultValues: Getter, … } -- has an errors properties ----
  // getFieldState: function getFieldState(name, formState)​
  // getValues: function getValues(fieldNames)​
  // handleSubmit: function handleSubmit(onValid, onInvalid)​---------------
  //register: function register(name, options)​ ----------------------------
  // reset: function reset(formValues, keepStateOptions)​
  // resetField: function resetField(name, options)​
  // setError: function setError(name, error, options)​
  // setFocus: function setFocus(name, options)​
  // setValue: function setValue(name, value, options)​
  // trigger: async function trigger(name, options)​
  // unregister: function unregister(name, options)​
  // watch: function watch(name, defaultValue)

  // REGISTER OBJECT PROPERTIES
  // name: undefined​
  // onBlur: async function onChange(event)​
  // onChange: async function onChange(event)​
  // ref: function ref(ref)​
  // <prototype>: Object { … }

  function onSubmit(data: FieldValues) {
    console.log(data);
    
  }

  console.log(formState.errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register(
            "name",
            // options
            {
              required: true,
              minLength: 3,
              maxLength: 10,
            }
          )}
          // value={person.name}
          // onChange={(evt) => {
          //   console.log(person);
          //   setPerson({ ...person, name: evt.target.value });
          // }}
          id="name"
          type="text"
          className="form-control"
        />

        {/* our error logic incase any */}
        {/* TO AVOID THESE RULES GETTING OUT OF HAND WE CAN EMPLOY A LIBRARY LIKE ZOD */}
        {formState.errors.name?.type === "required" && (
          <p className="text-danger">this field is required</p>
        )}
        {formState.errors.name?.type === "minLength" && (
          <p className="text-danger">name must be more than 3 characters</p>
        )}
        {formState.errors.name?.type === "maxLength" && (
          <p className="text-danger">name must be less than 10 characters</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register(
            "age",
            // options
            {
              required:true,
              min: 18,
              max: 30,
            }
          )}
          // value={person.age}
          // onChange={(evt) => {
          //   setPerson({ ...person, age: evt.target.value });
          // }}
          id="age"
          type="number"
          className="form-control"
        />
        {/* TO AVOID THESE RULES GETTING OUT OF HAND WE CAN EMPLOY A LIBRARY LIKE ZOD */}
        {formState.errors.age?.type === "required" && (
          <p className="text-danger">this field is required</p>
        )}
        {formState.errors.age?.type === "min" && (
          <p className="text-danger">must be above 18 years</p>
        )}
        {formState.errors.age?.type === "max" && (
          <p className="text-danger">must be below 30 years</p>
        )}
      </div>
      <button disabled={!formState.isValid} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Form1;
