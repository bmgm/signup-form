import { useState } from "react";
import s from "./LoginSignup.module.css";

const LoginSignup = () => {
  const [action, setAction] = useState("Log In");

  return (
    <div className={s.loginSignup}>
      <div className={s.header}>
        <h2>{action}</h2>
        <div className={s.inputs}>
          {action === "Log In" ? (
            <div></div>
          ) : (
            <input type="text" placeholder="Name" />
          )}

          <input type="Email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          {action === "Sign Up" ? (
            <div></div>
          ) : (
            <a className={s.forgotP} href="">
              forgot password?
            </a>
          )}
        </div>
        <div className={s.submit}>
          <button
            className={action === "Sign Up" ? s.signup : s.signupGrey}
            type="submit"
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </button>
          <button
            className={action === "Log In" ? s.login : s.loginGrey}
            onClick={() => {
              setAction("Log In");
            }}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
