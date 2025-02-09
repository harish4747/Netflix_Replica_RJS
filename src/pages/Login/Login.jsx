import "./Login.css";
import logo from "../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataBase } from "../../CheckUser";
import { toast } from "react-toastify";

const Login = () => {
  let { db, setDb } = useContext(DataBase);

  const navigate = useNavigate();
  const [signState, setSignState] = useState("Sign In");

  const [details, setDetails] = useState({
    username: "",
    password: "",
    email: "",
  });

  useEffect(() => {
    console.log(db);
    signState == "Sign Up" ? navigate("/home") : navigate("/");
  }, [db]);

  const handleSignIn = (e) => {
    e.preventDefault();
    if (
      signState == "Sign Up" &&
      details.username &&
      details.password &&
      details.email
    ) {
      if (!details.email.includes("@") && details.email.length < 5) {
        toast.error("Enter Valid Email");
      } else if (details.password.length < 4) {
        toast.error("Password minimum length is 4");
      } else {
        setDb([...db, details]);
        setDetails({
          username: "",
          password: "",
          email: "",
        });
      }
    } else if (signState == "Sign In" && details.password && details.email) {
      let isUser = db.filter((val) => {
        return val.email === details.email && val.password === details.password;
      });
      isUser.length !== 0
        ? navigate("/home")
        : toast.error("Check user Name and Password");
    } else {
      toast.error("Input fields should not be empty");
    }
  };

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState == "Sign Up" ? (
            <input
              type="text"
              placeholder="Enter Name"
              onChange={handleChange}
              name="username"
              value={details.username}
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
            name="email"
            value={details.email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={details.password}
          />
          <button onClick={handleSignIn}>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help</p>
          </div>
        </form>
        <div className="form-switch">
          {signState == "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign up now
              </span>
            </p>
          ) : (
            <p>
              Already have account{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign in now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
