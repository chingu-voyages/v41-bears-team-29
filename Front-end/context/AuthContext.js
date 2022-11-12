import { createContext, useEffect, useReducer, useState } from "react";
import { defaultAuthContextState, AuthReducer, init } from "./AuthReducer";
import UsersEndpoints from "../Api/Users";

const usersEndpoints = new UsersEndpoints();

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const [AuthState, AuthDispatch] = useReducer(
    AuthReducer,
    defaultAuthContextState,
    init
  );
  ///////
  const [photo, setPhoto] = useState();
  const [newPlayers, setNewPlayers] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  ////////

  useEffect(() => {
    const controller = new AbortController();

    usersEndpoints
      .getUser(controller)
      .then((data) => {
        AuthDispatch({ type: "update_user", payload: data });
      })
      .catch((error) => {
        AuthDispatch({ type: "reset_all" });
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        AuthState,
        AuthDispatch,
        photo,
        setPhoto,
        newPlayers,
        setNewPlayers,
        selectedImage,
        setSelectedImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
