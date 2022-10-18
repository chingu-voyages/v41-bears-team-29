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
      name: "Elliot",
      photo: require("../assets/img/profilePhoto3.jpg"),
      id: "3",
    },
    {
      name: "Dany",
      photo: require("../assets/img/profilePhoto4.jpg"),
      id: "4",
    },
    {
      name: "Jorge",
      photo: require("../assets/img/profilePhoto3.jpg"),
      id: "5",
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
