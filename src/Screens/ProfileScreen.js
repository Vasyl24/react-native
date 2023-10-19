import { ImageBackground, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import Svg, { Circle, Path } from 'react-native-svg';

export const ProfileScreen = () => {
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
        <View style={styles.profilePhotoContainer}>
          <Image style={styles.profilePhoto} source={require('../../images/mountain.jpg')} />

          <Svg width={37} height={37} viewBox="0 0 37 37" style={styles.iconPlus}>
            <Circle cx="18.4999" cy="18.5" r="12" transform="rotate(-45 18.4999 18.5)" fill="white" stroke="#E8E8E8" />
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.2574 13.5503L13.5503 14.2574L17.7929 18.5L13.5503 22.7426L14.2574 23.4497L18.5 19.2071L22.7426 23.4497L23.4498 22.7426L19.2071 18.5L23.4498 14.2574L22.7426 13.5503L18.5 17.7929L14.2574 13.5503Z"
              fill="#BDBDBD"
            />
          </Svg>
        </View>

        <Text style={styles.text}>Natali Romanova</Text>

        <Image style={styles.gallery} source={require('../../images/Rectangle.jpg')} />
        <Text style={styles.text}>Ліс</Text>
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
    minWidth: '100%',
    justifyContent: 'center',
  },
  profilePhoto: {
    position: 'absolute',
    // top: '-50%',
    left: '50%',
    transform: [{ translateX: -60 }, { translateY: -50 }],

    width: 120,
    height: 120,
    borderRadius: 16,
    zIndex: 2,
    margin: 'auto',
  },
  //   profilePhotoContainer: {
  //     position: 'relative',
  //     display: 'flex',
  //     justifyContent: 'center',
  //     alignItems: 'center',

  //     marginLeft: 'auto',
  //     marginRight: 'auto',

  // width: 120,
  // height: 120,
  //   },
  iconPlus: {
    position: 'absolute',
    // top: 18,
    right: '50%',
    transform: [{ translateX: 78 }, { translateY: 18 }],

    zIndex: 3,
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
    minWidth: '100%',
    // paddingTop: 32,
    // paddingBottom: 34,
    paddingLeft: 16,
    paddingRight: 16,
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
  gallery: {
    width: '100%',
    borderRadius: 8,
    marginTop: 32,
  },
});
