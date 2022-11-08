import { createContext, useEffect, useReducer } from "react";
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
  const [currentUser, setCurrentUser] = useState({
    name: "",
    photo: "",
    id: "",
  });
  const [correctAnswer, setCorrectAnswer] = useState("CORRECT");
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
        currentUser,
        setCurrentUser,
        users,
        setUsers,
        photo,
        setPhoto,
        owners,
        setOwners,
        correctAnswer,
        setCorrectAnswer,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
