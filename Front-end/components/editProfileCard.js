import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function editProfileCard() {
  return (
    <View style={styles.container} onPress={() => goToCapute}>
      <Image
        style={styles.profilePhoto}
        source={require('../assets/img/profilePhoto.jpg')}
      ></Image>
      <View>
        <Text style={styles.profileName}>Profile name</Text>
        <Button title="X" />
      </View>
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
