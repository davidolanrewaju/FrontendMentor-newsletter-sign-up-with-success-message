/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const { onSubmit } = props; //Call the prop that was passed to this component from the "App" component
  const [email, setEmail] = useState("");
  let [error, setError] = useState("");

  const formCheck = (e) => {
    e.preventDefault();
    if (email == "") {
      setError("Please fill in the form");
    } else {
      setError("");
      onSubmit(email);
    }
  };

  return (
    <>
      <form onSubmit={formCheck}>
        <div className="error-container">
          <label htmlFor="email">Email Address</label>
          <span>{error}</span>
        </div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          className="email"
          placeholder="email@company.com"
          value={email}
        />
        <input
          type="submit"
          className="btn"
          value=" Subscribe to monthly newsletter"
        />
      </form>
    </>
  );
};

export default Form;
