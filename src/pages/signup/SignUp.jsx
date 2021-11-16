import { useState } from "react";
import SignUpStyle from "./signup.module.scss";
import { FiEyeOff, FiEye } from "react-icons/fi";

function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const [showCPass, setShowCPass] = useState(false);

  return (
    <div className={SignUpStyle.signupContainer}>
      <h1 className={SignUpStyle.signupHeader}>Join us!</h1>
      <form>
        <input
          className={SignUpStyle.signupInputError}
          type="text"
          placeholder="First Name"
          //onChange={(e) => setName(e.target.value)}
        />
        <span className={SignUpStyle.signupSpanError}>
          This field is required
        </span>
        <input
          className={SignUpStyle.signupInputError}
          type="text"
          placeholder="Last Name"
          //onChange={(e) => setName(e.target.value)}
        />
        <span className={SignUpStyle.signupSpanError}>
          This field is required
        </span>
        <input
          className={SignUpStyle.signupInputError}
          type="text"
          placeholder="Email"
          //onChange={(e) => setName(e.target.value)}
        />
        <span className={SignUpStyle.signupSpanError}>Email is invalid</span>
        <div className={SignUpStyle.signupPasswordContainerError}>
          <input
            className={SignUpStyle.signupInputPassword}
            type={showPass ? "text" : "password"}
            placeholder="Password"
            //onChange={(e) => setName(e.target.value)}
          />

          {showPass ? (
            <FiEye
              className={SignUpStyle.eyeIcon}
              onClick={() => setShowPass(!showPass)}
            />
          ) : (
            <FiEyeOff
              className={SignUpStyle.eyeIcon}
              onClick={() => setShowPass(!showPass)}
            />
          )}
        </div>
        <span className={SignUpStyle.signupSpanError}>
          Password must be at least 6 characters
        </span>
        <div className={SignUpStyle.signupPasswordContainerError}>
          <input
            className={SignUpStyle.signupInputPassword}
            type={showCPass ? "text" : "password"}
            placeholder="Confirm Password"
            //onChange={(e) => setName(e.target.value)}
          />
          {showCPass ? (
            <FiEye
              className={SignUpStyle.eyeIcon}
              onClick={() => setShowCPass(!showCPass)}
            />
          ) : (
            <FiEyeOff
              className={SignUpStyle.eyeIcon}
              onClick={() => setShowCPass(!showCPass)}
            />
          )}
        </div>
        <span className={SignUpStyle.signupSpanError}>
          Confirmation password is not the same as the password
        </span>
        <button type="submit" className={SignUpStyle.signupButton}>
          Sign Up
        </button>
      </form>
      <p className={SignUpStyle.signupText}>Having issue when signup?</p>
    </div>
  );
}

export default SignUp;
