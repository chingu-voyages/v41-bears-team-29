import { StyleSheet } from "react-native";

// ADD PADDING OF 4em ON EACH PAGE CONTAINER

export const globalStyles = StyleSheet.create({
  headerTitle: {
    fontSize: 40,
    fontFamily: "FuzzyBubbles-Bold",
    textAlign: "center",
  },
  appName: {
    fontSize: 80,
    fontFamily: "Gloria-regular",
  },
  appNameHeader: {
    fontSize: 60,
    fontFamily: "Gloria-regular",
  },
  pageContainer: {
    flex: 1,
    padding: 20,
  },

  profileIcon: {
    height: 100,
    width: 100,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "red",
  },
  bgContainer: {
    flex: 1,
  },
  userList: {
    flexDirection: "row",
    width: "100%",
    flex: 3,
    overflow: "hidden",
  },
  input: {
    borderColor: "#96CEB4",
    padding: 8,
    borderRadius: 10,
    fontSize: 10,
    width: 200,
    borderBottomWidth: 1,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 6,
    textAlign: "center",
  },
  button: {
    margin: 10,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#96CEB4",
    backgroundColor: "#FEF1E6",
    padding: 15,
    textAlign: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "black",
    fontFamily: "FuzzyBubbles-Bold",
  },
  buttonSpecial: {
    margin: 10,
    borderRadius: 5,
    borderWidth: 5,
    borderColor: "#E99497",
    backgroundColor: "#FEF1E6",
    padding: 5,
    textAlign: "center",
    width: 150,
    height: 40,
  },
  text: {
    fontFamily: "Schoolbell-regular",
    fontSize: 18,
  },
});
