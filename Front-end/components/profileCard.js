import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ProfileCard({ user }) {
  console.log(user);
  return (
    <View style={styles.container} onPress={() => goToCapute}>
      <TouchableOpacity>
        <Image
          style={styles.profilePhoto}
          source={require('../assets/img/profilePhoto.jpg')}
        ></Image>
        <Text style={styles.profileName}>{user?.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profilePhoto: {
    width: '15em',
    height: '15em',
    border: 'solid 5px #BEAEE2',
    borderRadius: 10,
  },
  profileName: {
    textAlign: 'center',
    paddingTop: '.5em',
    fontSize: '2rem',
  },
});
