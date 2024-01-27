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
    <div
      id="auth-inputs"
      style={{
        width: "100%",
        maxWidth: "28rem",
        padding: "2rem",
        margin: "0 auto",
        borderRadius: "0.5rem",
        boxShadow:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        background: "linear-gradient(180deg, #474232 0%, #28271c 100%)",
        color: "white",
      }}
    >
      <div
        className="controls"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <p>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontSize: "0.75rem",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: emailNotValid ? "#f87171" : "#6b7280",
            }}
          >
            Email
          </label>
          <input
            type="email"
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              lineHeight: "1.5",
              color: emailNotValid ? "#ef4444" : "#374151",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: emailNotValid ? "#f73f3f" : "transparent",
              borderRadius: "0.25rem",
              backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db",
              boxShadow:
                "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            }}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontSize: "0.75rem",
              fontWeight: "700",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: passwordNotValid ? "#f87171" : "#6b7280",
            }}
          >
            Password
          </label>
          <input
            type="password"
            style={{
              width: "100%",
              padding: "0.75rem 1rem",
              lineHeight: "1.5",
              color: passwordNotValid ? "#ef4444" : "#374151",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: passwordNotValid ? "#f73f3f" : "transparent",
              borderRadius: "0.25rem",
              backgroundColor: passwordNotValid ? "#fed2d2" : "#d1d5db",
              boxShadow:
                "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            }}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>
      <div
        className="actions"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "1rem",
        }}
      >
        <button
          type="button"
          style={{
            cursor: "pointer",
            background: "none",
            lineHeight: "inherit",
            outline: "none",
            color: "#f0b322",
            border: "none",
          }}
          className="text-button"
        >
          Create a new account
        </button>
        <button
          className="button"
          style={{
            cursor: "pointer",
            background: "none",
            lineHeight: "inherit",
            outline: "none",
            padding: "1rem 2rem",
            fontWeight: "600",
            textTransform: "uppercase",
            borderRadius: "0.25rem",
            color: "#1f2937",
            backgroundColor: "#f0b322",
            borderRadius: "6px",
            border: "none",
          }}
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
