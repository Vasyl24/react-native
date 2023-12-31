import { StyleSheet, Text, View, ImageBackground, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';

export const LoginScreen = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [showText, setShowText] = useState('show');

  const handlePasswordVisibility = () => {
    if (showText === 'show') {
      setShowText('show-slash');
      setPasswordVisibility(!passwordVisibility);
    } else if (showText === 'show-slash') {
      setShowText('show');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const signIn = () => {
    console.log({ loginEmail, loginPassword });
  };

  const [fontsLoaded] = useFonts({
    Roboto: require('../../src/assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../images/mountain.jpg')} resizeMode="cover" style={styles.backgroundPhoto}></ImageBackground>
      <View style={styles.background}>
        <Text style={styles.text}>Увійти</Text>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
            value={loginEmail}
            onChangeText={setLoginEmail}
            autoComplete="email"
          />
          <View>
            <TextInput
              style={[styles.input, { marginTop: 16 }]}
              placeholder="Пароль"
              value={loginPassword}
              onChangeText={(text) => setLoginPassword(text)}
              autoComplete="password"
              secureTextEntry={passwordVisibility}
            />
            <Pressable style={styles.showBtn} onPress={handlePasswordVisibility}>
              <Text>Показати</Text>
            </Pressable>
          </View>
        </SafeAreaView>

        <Pressable style={styles.enterBtn} onPress={signIn}>
          <Text style={styles.enterBtnText}>Увійти</Text>
        </Pressable>

        <Text style={styles.register}>
          Немає акаунту? <Text style={{ textDecorationLine: 'underline' }}>Зареєструватися</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundPhoto: {
    flex: 1,
    width: 400,
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '60%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  text: {
    paddingTop: 32,
    textAlign: 'center',
    color: '#212121',
    fontFamily: 'Roboto',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 500,
    // lineHeight: 'normal',
    letterSpacing: 0.3,
  },
  input: {
    width: 343,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#f6f6f6',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 33,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 16,
  },
  showBtn: {
    position: 'absolute',
    alignSelf: 'center',
    right: 46,
    bottom: 16,
  },
  enterBtn: {
    backgroundColor: '#ff6c00',
    marginTop: 43,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 100,
  },
  enterBtnText: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 146.5,
    paddingLeft: 146.5,

    color: '#ffffff',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
  },
  register: {
    textAlign: 'center',
    marginTop: 16,
  },
});
