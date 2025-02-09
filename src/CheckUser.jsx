import { createContext, useState } from "react";
import PropTypes from "prop-types";

export let DataBase = createContext();

const CheckUser = ({ children }) => {
  const [db, setDb] = useState([
    { username: "hari", password: "12345", email: "a@g.com" },
  ]);
  return (
    <DataBase.Provider value={{ db, setDb }}>{children}</DataBase.Provider>
  );
};

CheckUser.propTypes = {
  children: PropTypes.children,
};

export default CheckUser;
