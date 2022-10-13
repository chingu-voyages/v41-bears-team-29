import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import EditProfileCard from '../components/editProfileCard';
import bgImage from '../assets/img/bg40.jpg';

export default function ProfileAdmin({ navigation }) {
  return (
    <ImageBackground source={bgImage} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Button
            title="go back"
            onPress={() => navigation.navigate('Login')}
          />
          <Text style={styles.header}>Profiles</Text>
        </View>
        <Text style={styles.newPlayer}>New Player</Text>
        <View style={styles.addProfile}>
          <Text style={styles.formText}>Name:</Text>
          <input></input>
          <Text style={styles.formText}>Photo:</Text>
          <Button style={styles.addPhoto} title="+" />
        </View>
        <View style={styles.profilesContainer}>
          <EditProfileCard />
          <EditProfileCard />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4em',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
  },
  addProfile: {
    flexDirection: 'row',
    gap: '1em',
  },
  profilesContainer: {
    flexDirection: 'row',
    gap: '2em',
  },
  header: {
    fontSize: '4rem',
  },
  newPlayer: {
    fontSize: '3rem',
  },
  formText: {
    fontSize: '2rem',
  },
});
