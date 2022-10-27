import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'

export default function EditProfileCard({ user, deleteUserHandler }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={styles.container}>
        <TouchableOpacity>
          <Image style={styles.profilePhoto} source={user.photo}></Image>
          <View>
            <Text style={styles.profileName}>{user.name}</Text>
            <Button onPress={() => deleteUserHandler(user.id)} title='X' />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16
  },
  profilePhoto: {
    width: '15%',
    height: '15%',
    borderRadius: 10
  },
  profileName: {
    textAlign: 'center',
    paddingTop: 8,
    fontSize: 32
  }
})
