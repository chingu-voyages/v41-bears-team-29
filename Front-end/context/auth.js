import React, { useState, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: "",
    photo: "",
    id: "",
  });
  const [owners, setOwners] = useState([]);
  const [users, setUsers] = useState([
    {
      name: "Tom",
      photo: require("../assets/img/profilePhoto.jpg"),
      id: "1",
      score: [{}],
      type: "user",
    },
    {
      name: "Alise",
      photo: require("../assets/img/profilePhoto2.jpg"),
      id: "2",
      score: [{}],
      type: "user",
    },
    {
      name: "Elliot",
      photo: require("../assets/img/profilePhoto3.jpg"),
      id: "3",
      score: [{}],
      type: "user",
    },
    {
      name: "Dany",
      photo: require("../assets/img/profilePhoto4.jpg"),
      id: "4",
      score: [{}],
      type: "user",
    },
    {
      name: "Jorge",
      photo: require("../assets/img/profilePhoto3.jpg"),
      id: "5",
      score: [{}],
      type: "user",
    },
  ]);
  const [photo, setPhoto] = useState();
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        users,
        setUsers,
        photo,
        setPhoto,
        owners,
        setOwners,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
