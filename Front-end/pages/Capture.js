import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Capture({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Capture</Text>
      <Button
        title="go to Choosing"
        onPress={() => navigation.navigate('Choosing')}
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
