import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function EditProfileCard({ user, deleteUserHandler }) {
  console.log(user);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <TouchableOpacity>
          <Image style={styles.profilePhoto} source={user.photo}></Image>
          <View>
            <Text style={styles.profileName}>{user.name}</Text>
            <Button onPress={() => deleteUserHandler(user.id)} title="X" />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "1em",
  },
  profilePhoto: {
    width: "15em",
    height: "15em",
    border: "solid 5px #BEAEE2",
    borderRadius: 10,
  },
  profileName: {
    textAlign: "center",
    paddingTop: ".5em",
    // fontSize: '2rem',
  },
});
