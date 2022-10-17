import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import ProfileCard from '../components/profileCard';
import bgImage from '../assets/img/bg40.jpg';
import { globalStyles } from '../styles/global';

export default function Login({ navigation }) {
  return (
    <ImageBackground source={bgImage} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <Text style={globalStyles.appName}>What's that?!</Text>
        <Text style={globalStyles.headerTitle}>Who is ready to play?</Text>
        <View style={styles.profileContainer}>
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </View>
        <Button
          title="go to Capture"
          onPress={() => navigation.navigate('Capture')}
        />{' '}
        <Button
          title="go to ProfileAdmin"
          onPress={() => navigation.navigate('ProfileAdmin')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '4em',
  },
  profileContainer: {
    flexDirection: 'row',
    gap: '3em',
    padding: '2em',
    border: 'solid 3px blue',
  },
  headerTitle: {
    fontSize: '4rem',
  },
  appName: {
    fontSize: '6rem',
  },
});
