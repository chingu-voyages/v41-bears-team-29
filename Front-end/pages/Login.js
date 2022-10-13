import { StyleSheet, Text, View, Button } from 'react-native';
import ProfileCard from '../components/profileCard';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>What's that?!</Text>
      <Text style={styles.header}>Who is ready to play?</Text>
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
        title="go to Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF1E6',

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
  appName: {
    fontSize: '6rem',
  },
  header: {
    fontSize: '3rem',
  },
});
