import { useState } from "react";
import SignUpStyle from "./signup.module.scss";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { RegisterAction } from "../../../redux/action/actions/auth";
import { useDispatch } from "react-redux";

function SignUp() {
  const [showPass, setShowPass] = useState(false);
  const [showCPass, setShowCPass] = useState(false);

  const dispatch = useDispatch();
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
   
  });
  const changeInput = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const submitRegister = (e) => {
    e.preventDefault();
    dispatch(RegisterAction(register));
  };
  console.log("register", register);

  const [firstName, setFirstName] = useState("");
  const [isFirstName, setIsFirstName] = useState(true);
  const [lastName, setLastName] = useState("");
  const [isLastName, setIsLastName] = useState(true);
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);

  const validasiInputFirstName = (data) => {
    console.log(isFirstName);
    if (data === "") {
      setIsFirstName(false);
    } else {
      setIsFirstName(true);
    }
  };

  const validasiInputLastName = (data) => {
    console.log(isLastName);
    if (data === "") {
      setIsLastName(false);
    } else {
      setIsLastName(true);
    }
  };

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

  const validasiInputConfirmPassword = (data) => {
    console.log(isConfirmPassword);
    if (data === "" || isConfirmPassword !== register.password) {
      setIsConfirmPassword(false);
    } else {
      setIsConfirmPassword(true);
    }
  };

  return (
    <div className={SignUpStyle.signupContainer}>
      <h1 className={SignUpStyle.signupHeader}>Join us!</h1>
      <form>
        <input 
          className={
            isFirstName === true
              ? SignUpStyle.signupInput
              : SignUpStyle.signupInputError
          }
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={(e) => {
            validasiInputFirstName(e.target.value);
            changeInput(e);
          }}
        />
        {isFirstName !== true ? (
          <span className={SignUpStyle.signupSpanError}>
            This field is required
          </span>
        ) : null}

        <input 
          className={
            isLastName === true
              ? SignUpStyle.signupInput
              : SignUpStyle.signupInputError
          }
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            validasiInputLastName(e.target.value);
            changeInput(e);

          }}
        />
        {isLastName !== true ? (
          <span className={SignUpStyle.signupSpanError}>
            This field is required
          </span>
        ) : null}

        <input 
        
          className={
            isEmail === true
              ? SignUpStyle.signupInput
              : SignUpStyle.signupInputError
          }
          name="email"
          type="text"
          placeholder="Email"
          onChange={(e) => {
            validasiInputEmail(e.target.value);
            changeInput(e);

          }}
        />
        {isEmail !== true ? (
          <span className={SignUpStyle.signupSpanError}>Email is invalid</span>
        ) : null}

        <div className={SignUpStyle.signupPasswordContainerError}>
          <input 
            className={
              isPassword === true
                ? SignUpStyle.signupInput
                : SignUpStyle.signupInputError
            }
            name="password"
            type={showPass ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => {
              validasiInputPassword(e.target.value);
              changeInput(e);

            }}
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
        {isPassword !== true ? (
          <span className={SignUpStyle.signupSpanError}>
            Password must be at least 6 characters
          </span>
        ) : null}

        <div className={SignUpStyle.signupPasswordContainerError}>
          <input 
            className={
              isConfirmPassword === true
                ? SignUpStyle.signupInput
                : SignUpStyle.signupInputError
            }
            name="confirmPassword"
            type={showCPass ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => {
              validasiInputConfirmPassword(e.target.value);
             
            }}
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
        {isConfirmPassword !== true ? (
          <span className={SignUpStyle.signupSpanError}>
            Confirmation password is not the same as the password
          </span>
        ) : null}

        <button
          onClick={(e) => submitRegister(e)}
          type="submit"
          className={SignUpStyle.signupButton}
        >
          Sign Up
        </button>
      </form>
      <p className={SignUpStyle.signupText}>Having issue when signup?</p>
    </div>
  );
}

export default SignUp;
