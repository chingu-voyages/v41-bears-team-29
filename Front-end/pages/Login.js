import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login here</Text>
      <Button
        title="go to Capture"
        onPress={() => navigation.navigate('Capture')}
      />{' '}
      <Button
        title="go to Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="go to Profile"
        onPress={() => navigation.navigate('ProfileAdmin')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
