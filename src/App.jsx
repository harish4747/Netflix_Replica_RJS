import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import CheckUser from "./CheckUser";
import Player from "./pages/Player/Player";

const App = () => {
  return (
    <div>
      <CheckUser>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/player" element={<Player/>}/>
        </Routes>
      </CheckUser>
    </div>
  );
};

export default App;
