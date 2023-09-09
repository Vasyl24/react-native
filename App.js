// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { RegistrationScreen } from './src/Screens/RegistrationScreen';
import { LoginScreen } from './src/Screens/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen></RegistrationScreen>
      <LoginScreen></LoginScreen>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 50 : 100,

  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
