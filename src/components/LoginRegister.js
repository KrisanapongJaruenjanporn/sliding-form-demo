import React, { useState } from "react";
import "../style/LoginRegister.css";

const LoginRegister = () => {
  const [addclass, setaddclass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberMeToggle = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form>
          <h1>Create Account</h1>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit">Create Account Now</button>
          <div class="flex-row">
            <h6> Have an account ?</h6>
            <button
              className="ghost"
              id="signUp"s
              onClick={() => setaddclass("")}
            >
              Sign In Now
            </button>
          </div>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
          <h3>WELCOME TO</h3>
          <h1>HoPak</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <div class="flex-row">
            <label>
              <input type="checkbox" />
            </label>
            <h6> Remember Me</h6>
            <h6 className="forgot"> Forgot Password ?</h6>
          </div>
          <button type="submit">sign In</button>
          <div class="flex-row">
            <h6> Don’t have an account ?</h6>
            <button
              className="ghost"
              id="signUp"
              onClick={() => setaddclass("right-panel-active")}
            >
              Sign Up Now
            </button>
          </div>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left"></div>
          <div className="overlay-panel overlay-right"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
