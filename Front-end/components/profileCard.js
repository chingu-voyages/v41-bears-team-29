import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

export default function ProfileCard({ user }) {
  return (
    <View style={styles.container}>
      <Image style={styles.profilePhoto} source={user?.photo}></Image>
      <Text style={styles.profileName}>{user?.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "120%",
    width: "100%",
    backgroundColor: "white",
    border: "solid 5px #BEAEE2",
    margin: "auto",
    borderRadius: 10,
    boxShadow: "4px 3px 22px -2px rgba(0,0,0,0.59)",

  },
  profilePhoto: {
    width: "80%",
    height: "70%",
    border: "solid 2px #BEAEE2",
    borderRadius: 10,
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "5%",
  },
  profileName: {
    textAlign: "center",
    paddingTop: ".5em",
    marginTop: "4%",
    fontWeight: "bold",
    // fontSize: '2rem',
  },
});

//edited this file to add a white card border and box shadow to the profile card, profile still looks decent on capture page - Elliott 10/21/22