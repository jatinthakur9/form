import React from "react";
import { useState } from "react";

function HandleMultipleInputs() {
  //firstname
  //lastname
  //username
  //email
  //password
  //confirm password
  //phone number
  //address

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }
  function handleChange(e) {
    setData((prevstate) => {
      return { ...prevstate, [e.target.id]: [e.target.value] };
    });
  }
  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
      <div className="formGroup">
        <label htmlFor="firstName">firstname : </label>
        <br></br>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={data.firstName}
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="lastName">lastName : </label>
        <br></br>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={data.lastName}
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="userName">userName : </label>
        <br></br>
        <input
          type="text"
          name="userName"
          id="userName"
          value={data.userName}
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="email">email : </label>
        <br></br>
        <input
          type="email"
          name="email"
          id="email"
          value={data.email}
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="password">password : </label>
        <br></br>
        <input
          type="password"
          name="password"
          id="password"
          value={data.password}
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="confirmPassword">confirmPassword : </label>
        <br></br>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={data.confirmPassword}
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="phone">phone : </label>
        <br></br>
        <input
          type="text"
          name="phone"
          id="phone"
          value={data.phone}
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="address">address : </label>
        <br></br>
        <input
          type="text"
          name="address"
          id="address"
          value={data.address}
          onChange={handleChange}
        />
        <br></br>

        <input type="submit" value="Signup" />
      </div>
    </form>
  );
}

export default HandleMultipleInputs;
