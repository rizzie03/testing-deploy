import SignInStyle from "./signin.module.scss";
import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { LoginAction } from "../../../redux/action/actions/auth";
import { useDispatch, useSelector } from "react-redux";


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

  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);

  const validasiInputEmail = (data) => {
    console.log(isEmail);
    if (data === "") {
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  const validasiInputPassword = (data) => {
    console.log(isPassword);
    if (data === "") {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  return (
    <div className={SignInStyle.signinContainer}>
      <h1 className={SignInStyle.signinHeader}>Welcome back!</h1>
      {isPassword !== true ? (
        <span className={SignInStyle.signinSpanError}>
          Invalid email and password combination
        </span>
      ) : null}

      <form>
        <input
          className={
            isPassword === true
              ? SignInStyle.signinInput
              : SignInStyle.signinInputError
          }
          className={SignInStyle.signInputError}
          name="email"
          className={SignInStyle.signinInput}
          type="text"
          placeholder="Email"
          onChange={(e) => {
            validasiInputPassword(e.target.value);
            changeInput(e);
          }}
        />
        <div className={SignInStyle.signinPasswordContainer}>
          <input
            className={
              isPassword === true
                ? SignInStyle.signinInput
                : SignInStyle.signinInputError
            }
            name="password"
            className={SignInStyle.signinInputPassword}
            type={showPass ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => {
              validasiInputPassword(e.target.value);
              changeInput(e);
            }}
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
