import { StyleSheet } from 'react-native'

// ADD PADDING OF 4em ON EACH PAGE CONTAINER

export const globalStyles = StyleSheet.create({
  headerTitle: {
    fontSize: 40,
  },
  appName: {
    fontSize: 80,
  },
  pageContainer: {
    flex: 1,
    padding: 20,
  },

  goBackBtn: {
    fontSize: 20,
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    borderRadius: 5
  },
  profileIcon: {
    height: 100,
    width: 100,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red'
  },
  bgContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 4
  }
})
