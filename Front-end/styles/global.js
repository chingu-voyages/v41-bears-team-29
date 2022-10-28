import { StyleSheet } from "react-native";

// ADD PADDING OF 4em ON EACH PAGE CONTAINER

export const globalStyles = StyleSheet.create({
  headerTitle: {
    fontSize: 40,
    fontFamily: "FuzzyBubbles-Bold",
  },
  appName: {
    fontSize: 80,
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
});
