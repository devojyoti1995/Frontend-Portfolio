import React, { useState } from "react";
import Home from "./Home";
function DetailForm() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    linkedin: "",
    title: "",
    text: "",

    project1: "",
    projectdetail1: "",
    projecturl1: "",

    project2: "",
    projectdetail2: "",
    projecturl2: "",

    project3: "",
    projectdetail3: "",
    projecturl3: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  if (isSubmit === false) {
    return (
      <div>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            type="textarea"
            value={state.name}
            onChange={changeHandler}
          ></input>
          <br />
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            type="textarea"
            value={state.email}
            onChange={changeHandler}
          ></input>
          <br />
          <label htmlFor="address">Address: </label>
          <input
            name="address"
            type="textarea"
            value={state.address}
            onChange={changeHandler}
          ></input>
          <br />
          <label htmlFor="project1">Project1: </label>
          <input
            name="project1"
            type="text"
            value={state.project1}
            onChange={changeHandler}
          ></input>
          <br />
          <label htmlFor="projectdetail1">Projectdetail: </label>
          <input
            name="projectdetail1"
            type="text"
            value={state.projectdetail1}
            onChange={changeHandler}
          ></input>
          <br />
          <label htmlFor="projecturl1">Projecturl: </label>
          <input
            name="projecturl1"
            type="text"
            value={state.projecturl1}
            onChange={changeHandler}
          ></input>

          {/*  */}

          {/* <br />
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            type="text"
            value={state.name}
            onChange={changeHandler}
          ></input>
          <br />
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            type="text"
            value={state.name}
            onChange={changeHandler}
          ></input>
          <br />
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            type="text"
            value={state.name}
            onChange={changeHandler}
          ></input>
          <br />
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            type="text"
            value={state.name}
            onChange={changeHandler}
          ></input>
          <br />
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            type="text"
            value={state.name}
            onChange={changeHandler}
          ></input>
          <br />
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            type="text"
            value={state.name}
            onChange={changeHandler}
          ></input>
          <br />
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            type="text"
            value={state.name}
            onChange={changeHandler}
          ></input>
          <br />
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            type="text"
            value={state.name}
            onChange={changeHandler}
          ></input>
          <br />
          <label htmlFor="name">Name: </label>
          <input
            name="name"
            type="text"
            value={state.name}
            onChange={changeHandler}
          ></input>
          <br /> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
    return <Home state={state} />;
  }
}

export default DetailForm;
