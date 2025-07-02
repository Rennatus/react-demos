import { useState } from "react";
import "./index.css";
const From = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (username.length > 8) {
      (setErrorUserName(""), setUserColor("green"));
    } else {
      setErrorUserName("username must be 8 letter long.");
      setUserColor("[red");
    }
    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmailColor("green");
      setErrorEmail("");
      setEmailColor("green");
    } else {
      setEmailColor("red");
      setErrorEmail("Email should have @gmail");
    }
    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setPasswordColor("red");
      setErrorPassword("password should be 8 letter long.");
    }
    if (confirmPassword === "" && confirmPassword == confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPassword("green");
    } else {
      setConfirmPasswordColor("red");
      setErrorConfirmPassword("password didn't match.");
    }
  };
  return (
    <div className="card">
      <div className="card-image"></div>

      <form>
        <input
          type="text"
          style={{ borderColor: userColor }}
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <p className="error">{errorUserName}</p>
        <input
          type="text"
          style={{ borderColor: emailColor }}
          value={email}
          placeholder="emial"
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error">{errorEmail}</p>
        <input
          type="password"
          style={{ borderColor: passwordColor }}
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error">{errorPassword}</p>
        <input
          type="password"
          style={{ borderColor: confirmPasswordColor }}
          value={confirmPassword}
          placeholder="comfirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p className="error">{confirmPassword}</p>
        <button className="submit-btn" onClick={validate}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default From;
