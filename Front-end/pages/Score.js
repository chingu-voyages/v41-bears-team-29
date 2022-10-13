import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Score({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Score</Text>
      <Button
        title="go to Capture"
        onPress={() => navigation.navigate('Capture')}
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
