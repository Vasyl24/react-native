// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import { RegistrationScreen } from './src/Screens/RegistrationScreen';
import { LoginScreen } from './src/Screens/LoginScreen';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <RegistrationScreen></RegistrationScreen>
          {/* <StatusBar style="auto" /> */}
          {/* <LoginScreen></LoginScreen> */}
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  height: Platform.OS === 'ios' ? 50 : 100,

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // paddingBottom: 30,
  },
});
