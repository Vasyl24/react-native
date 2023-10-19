// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
// import { RegistrationScreen } from './src/Screens/RegistrationScreen';
// import { LoginScreen } from './src/Screens/LoginScreen';
import { CreatePostsScreen } from './src/Screens/CreatePostsScreen';
import { CommentsScreen } from './src/Screens/CommentsScreen';
import { ProfileScreen } from './src/Screens/ProfileScreen';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          {/* <RegistrationScreen></RegistrationScreen> */}
          {/* <StatusBar style="auto" /> */}
          {/* <LoginScreen></LoginScreen> */}
          {/* <CreatePostsScreen></CreatePostsScreen> */}
          {/* <CommentsScreen></CommentsScreen> */}
          <ProfileScreen></ProfileScreen>
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
