import SignInStyle from "./signin.module.scss";
import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { LoginAction } from "../../../redux/action/actions/auth";
import { useDispatch } from "react-redux";

function SignIn() {
  const [showPass, setShowPass] = useState(false);
  const dispatch = useDispatch();
  const [login, setLogin] = useState({ email: "", password: "" });
  const changeInput = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(LoginAction(login));
  };

  console.log("login", login);

  return (
    <div className={SignInStyle.signinContainer}>
      <h1 className={SignInStyle.signinHeader}>Welcome back!</h1>
      <span className={SignInStyle.signinSpanError}>
        Invalid email and password combination
      </span>
      <form>
        <input
          className={SignInStyle.signInputError}
          name="email"
          className={SignInStyle.signinInput}
          type="text"
          placeholder="Email"
          onChange={(e) => changeInput(e)}
        />
        <div className={SignInStyle.signinPasswordContainer}>
          <input
            name="password"
            className={SignInStyle.signinInputPassword}
            type={showPass ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => changeInput(e)}
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
        <button
          onClick={(e) => submitLogin(e)}
          type="submit"
          className={SignInStyle.signinButton}
        >
          Sign In
        </button>
      </form>
      <p className={SignInStyle.signinText}>Forgot Password?</p>
    </div>
  );
}

export default SignIn;
