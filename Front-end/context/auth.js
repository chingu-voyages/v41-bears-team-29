import React, { useState, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    photo: "",
    id: "",
  });
  const [users, setUsers] = useState([
    { name: "Tom", photo: require("../assets/img/profilePhoto.jpg"), id: "1" },
    {
      name: "Alise",
      photo: require("../assets/img/profilePhoto2.jpg"),
      id: "2",
    },
    {
      name: "Javi",
      photo: require("../assets/img/profilePhoto3.jpg"),
      id: "3",
    },
  ]);

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, users, setUsers }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
