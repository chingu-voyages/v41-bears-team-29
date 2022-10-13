import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Choosing({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Choosing</Text>
      <Button
        title="go to Score"
        onPress={() => navigation.navigate('Score')}
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
