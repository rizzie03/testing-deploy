import SignInStyle from "./signin.module.scss";
import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";

function SignIn() {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className={SignInStyle.signinContainer}>
      <h1 className={SignInStyle.signinHeader}>Welcome back!</h1>
      <span className={SignInStyle.signinSpanError}>
        Invalid email and password combination
      </span>
      <form>
        <input
          className={SignInStyle.signinInput}
          type="text"
          placeholder="Email"
          //onChange={(e) => setName(e.target.value)}
        />
        <div className={SignInStyle.signinPasswordContainer}>
          <input
            className={SignInStyle.signinInputPassword}
            type={showPass ? "text" : "password"}
            placeholder="Password"
            //onChange={(e) => setName(e.target.value)}
          />
          {showPass ? (
            <FiEye
              className={SignInStyle.eyeIcon}
              onClick={() => setShowPass(!showPass)}
            />
          ) : (
            <FiEyeOff
              className={SignInStyle.eyeIcon}
              onClick={() => setShowPass(!showPass)}
            />
          )}
        </div>
        <button type="submit" className={SignInStyle.signinButton}>
          Sign In
        </button>
      </form>
      <p className={SignInStyle.signinText}>Forgot Password?</p>
    </div>
  );
}

export default SignIn;
