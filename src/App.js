import "./App.css";
import ExampleUseRef from "./Components/ExampleUseRef";
// import { useState } from "react";
// import HandleMultipleInputs from "./Components/HandleMultipleInputs";

function App() {
  // const [usernamee, setUsernamee] = useState("");
  // function handleUsername(e) {
  //   console.log(usernamee);
  //   setUsernamee(e.target.value);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("Form Submitted  Hello ", usernamee, passsword);
  // }

  // const [passsword, setPassword] = useState("");

  // function handlePassword(e) {
  //   setPassword(e.target.value);
  // }

  // const [gender, setGender] = useState("male");
  return (
    <div>
      {/* <h1>Form Tutorial</h1>
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
          <label htmlFor="passsword"> Passsword: </label>

          <input
            type="passsword"
            id="passsword"
            value={passsword}
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
      <div>
        <label htmlFor="Female">Female</label>
        <input
          type="radio"
          checked={gender === "female"}
          onChange={() => {
            setGender("female");
          }}
        />
      </div>
      <br></br>
      handlemultpleinputs
      <HandleMultipleInputs /> */}

      {/* 
      Form input using userefhook */}

      <ExampleUseRef />
    </div>
  );
}

export default App;
