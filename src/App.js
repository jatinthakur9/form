import "./App.css";
import { useState } from "react";

function App() {
  const [usernamee, setUsernamee] = useState("");
  function handleUsername(e) {
    console.log(usernamee);
    setUsernamee(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form Submitted  Hello ", usernamee, password);
  }

  const [password, setPassword] = useState("");

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const [gender, setGender] = useState("male");
  return (
    <div>
      <h1>Form Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {" "}
          <label htmlFor="username"> UserName: </label>
          <input
            type="text"
            id="username"
            value={usernamee}
            onChange={handleUsername}
          />
        </div>

        <div>
          <label htmlFor="password"> Password: </label>

          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </div>

        <button type="submit"> Submit </button>
      </form>
      <h1> Radio Button</h1>

      <div>
        <label htmlFor="Male"> Male</label>
        <input
          type="radio"
          checked={gender === "male"}
          onChange={() => {
            setGender("male");
          }}
        />
      </div>

      <div></div>
      <label htmlFor="Female">Female</label>
      <input
        type="radio"
        checked={gender === "female"}
        onChange={() => {
          setGender("female");
        }}
      />
    </div>
  );
}

export default App;
