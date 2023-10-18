import { ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import Svg, { Path } from 'react-native-svg';

export const RegistrationScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
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
    console.log({ login, email, password });
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
        <View style={styles.defaultPhoto}>
          <Svg width={25} height={25} viewBox="0 0 32 32" style={styles.iconPlus}>
            <Path
              d="M31.36 16c0 8.483-6.877 15.36-15.36 15.36s-15.36-6.877-15.36-15.36c0-8.483 6.877-15.36 15.36-15.36s15.36 6.877 15.36 15.36z"
              fill="#fff"
              style="fill: var(--color1, #fff); stroke: var(--color2, #ff6c00)"
              stroke="#ff6c00"
              strokeLinejoin="miter"
              strokeLinecap="butt"
              strokeMiterlimit="4"
              strokeWidth="1.28"
            />
            <Path
              fill="#ff6c00"
              style="fill: var(--color2, #ff6c00)"
              d="M16.64 7.68h-1.28v7.68h-7.68v1.28h7.68v7.68h1.28v-7.68h7.68v-1.28h-7.68v-7.68z"
            />
          </Svg>
        </View>
        <Text style={styles.text}>Реєстрація</Text>

        <SafeAreaView>
          <TextInput style={styles.input} placeholder="Логін" value={login} onChangeText={setLogin} />

          <TextInput
            style={[styles.input, styles.inputMail]}
            placeholder="Адреса електронної пошти"
            value={email}
            onChangeText={setEmail}
            autoComplete="email"
          />
          <View>
            <TextInput
              style={[styles.input, styles.password]}
              placeholder="Пароль"
              value={password}
              onChangeText={(text) => setPassword(text)}
              autoComplete="password"
              secureTextEntry={passwordVisibility}
            />
            <Pressable style={styles.showBtn} onPress={handlePasswordVisibility}>
              <Text>Показати</Text>
            </Pressable>
          </View>
        </SafeAreaView>

        <Pressable style={styles.registerBtn} onPress={signIn}>
          <Text style={styles.registerBtnText}>Зареєструватися</Text>
        </Pressable>

        <Text style={styles.login}>Вже є акаунт? Увійти</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  backgroundPhoto: {
    flex: 1,
    width: 400,
    justifyContent: 'center',
  },
  defaultPhoto: {
    width: 120,
    height: 120,
    backgroundColor: '#f6f6f6',
    borderRadius: 16,
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -60 }, { translateY: -50 }],
    zIndex: 2,
    margin: 'auto',
  },
  iconPlus: {
    position: 'absolute',
    bottom: 14,
    right: -12.5,
  },
  background: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '70%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  text: {
    color: '#212121',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 500,
    letterSpacing: 0.3,
    textAlign: 'center',
    paddingTop: 92,
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
  inputMail: {
    marginTop: 16,
  },
  password: {
    marginTop: 16,
  },
  showBtn: {
    position: 'absolute',
    alignSelf: 'center',
    right: 46,
    bottom: 16,
  },
  registerBtn: {
    backgroundColor: '#ff6c00',
    marginTop: 43,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 100,
  },
  registerBtnText: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 111.5,
    paddingLeft: 111.5,

    color: '#ffffff',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
  },
  login: {
    textAlign: 'center',
    marginTop: 16,
  },
});
