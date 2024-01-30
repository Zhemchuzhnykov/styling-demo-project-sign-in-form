import inputsClasses from "./AuthInputs.module.css";
import { useState } from "react";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div className={inputsClasses["auth-inputs"]}>
      <div className={inputsClasses.controls}>
        <p>
          <label
            className={`${inputsClasses["controls-label"]} ${
              emailNotValid ? inputsClasses["label-invalid"] : ""
            }`}
          >
            Email
          </label>
          <input
            type="email"
            className={`${inputsClasses["controls-input"]} ${
              emailNotValid ? inputsClasses["input-invalid"] : ""
            }`}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label
            className={`${inputsClasses["controls-label"]} ${
              passwordNotValid ? inputsClasses["label-invalid"] : ""
            }`}
          >
            Password
          </label>
          <input
            type="password"
            className={`${inputsClasses["controls-input"]} ${
              passwordNotValid ? inputsClasses["input-invalid"] : ""
            }`}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>
      <div className={inputsClasses.actions}>
        <button
          type="button"
          className={`${inputsClasses.button} ${inputsClasses["text-button"]}`}
        >
          Create a new account
        </button>
        <button
          className={`${inputsClasses.button} ${inputsClasses["sign-in-button"]}`}
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
