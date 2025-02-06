import { createContext, useState } from "react";

export let DataBase = createContext();

const CheckUser = ({ children }) => {
  const [db, setDb] = useState([
    { username: "hari", password: "12345", email: "a@g.com" },
  ]);
  return (
    <DataBase.Provider value={{ db, setDb }}>{children}</DataBase.Provider>
  );
};

export default CheckUser;
