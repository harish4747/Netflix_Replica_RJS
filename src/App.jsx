import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import CheckUser from "./CheckUser";
import Player from "./pages/Player/Player";
import { ToastContainer } from "react-toastify";

const App = () => {
  let style = {
    color: "white",
    backgroundColor: "black",
  };

  return (
    <>
      <CheckUser>
        <ToastContainer theme="dark" toastStyle={style} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </CheckUser>
    </>
  );
};

export default App;
