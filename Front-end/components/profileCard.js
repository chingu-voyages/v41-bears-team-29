import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function profileCard({ navigation }) {
  const goToCapute = () => {
    console.log('click');
  };

  return (
    <View style={styles.container} onPress={() => goToCapute}>
      <Image
        style={styles.profilePhoto}
        source={require('../assets/img/profilePhoto.jpg')}
      ></Image>
      <Text style={styles.profileName}>Profile name</Text>
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
  },
});
