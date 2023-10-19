import { StyleSheet, Text, View, ImageBackground, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import Svg, { Path } from 'react-native-svg';

export const CreatePostsScreen = () => {
  const [fontsLoaded] = useFonts({
    Roboto: require('../../src/assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.defaultPhoto}>
          <Svg width={24} height={24} viewBox="0 0 24 24" style={styles.leftArrow} xmlns="http://www.w3.org/2000/svg">
            <Path id="Shape" d="M20 12H4" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round" />
            <Path id="Shape_2" d="M10 18L4 12L10 6" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round" />
          </Svg>
        </View>
        <Text style={styles.text}>Створити публікацію</Text>
      </View>

      <View style={styles.addPhotoContainer}>
        <View style={styles.addPhoto}>
          <View style={styles.addPhotoCircle}>
            <Svg width={24} height={24} viewBox="0 0 24 24" style={styles.cameraIcon} xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M11.9998 15.2C13.7671 15.2 15.1998 13.7673 15.1998 12C15.1998 10.2327 13.7671 8.79999 11.9998 8.79999C10.2325 8.79999 8.7998 10.2327 8.7998 12C8.7998 13.7673 10.2325 15.2 11.9998 15.2Z"
                fill="#BDBDBD"
              />
              <Path
                d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z"
                fill="#BDBDBD"
              />
            </Svg>
          </View>
        </View>
        <Text style={styles.textAddPhoto}>Завантажте фото</Text>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Назва..."
            // value={loginPassword}
            // onChangeText={(text) => setLoginPassword(text)}
            // autoComplete="password"
            // secureTextEntry={passwordVisibility}
          />
          <View style={styles.locationContainer}>
            <Svg width={24} height={24} viewBox="0 0 24 24" style={styles.locationIcon} xmlns="http://www.w3.org/2000/svg" fill="none">
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z"
                stroke="#BDBDBD"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                stroke="#BDBDBD"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </Svg>
            <TextInput
              style={[styles.input, styles.locationInput]}
              placeholder="Місцевість..."
              // value={loginPassword}
              // onChangeText={(text) => setLoginPassword(text)}
              // autoComplete="password"
              // secureTextEntry={passwordVisibility}
            />
          </View>

          <View style={styles.buttonsContainer}>
            <Pressable style={styles.publishBtn}>
              <Text style={styles.publishBtnText}>Опублікувати</Text>
            </Pressable>

            <Pressable style={styles.deleteBtn}>
              <Svg width={24} height={24} viewBox="0 0 24 24" style={styles.deleteIcon} xmlns="http://www.w3.org/2000/svg" fill="none">
                <Path d="M3 6H5H21" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round" />
                <Path
                  d="M19.5 6C19.5 5.72386 19.2761 5.5 19 5.5C18.7239 5.5 18.5 5.72386 18.5 6H19.5ZM5.5 6C5.5 5.72386 5.27614 5.5 5 5.5C4.72386 5.5 4.5 5.72386 4.5 6H5.5ZM7.5 6C7.5 6.27614 7.72386 6.5 8 6.5C8.27614 6.5 8.5 6.27614 8.5 6H7.5ZM15.5 6C15.5 6.27614 15.7239 6.5 16 6.5C16.2761 6.5 16.5 6.27614 16.5 6H15.5ZM18.5 6V20H19.5V6H18.5ZM18.5 20C18.5 20.8284 17.8284 21.5 17 21.5V22.5C18.3807 22.5 19.5 21.3807 19.5 20H18.5ZM17 21.5H7V22.5H17V21.5ZM7 21.5C6.17157 21.5 5.5 20.8284 5.5 20H4.5C4.5 21.3807 5.61929 22.5 7 22.5V21.5ZM5.5 20V6H4.5V20H5.5ZM8.5 6V4H7.5V6H8.5ZM8.5 4C8.5 3.17157 9.17157 2.5 10 2.5V1.5C8.61929 1.5 7.5 2.61929 7.5 4H8.5ZM10 2.5H14V1.5H10V2.5ZM14 2.5C14.8284 2.5 15.5 3.17157 15.5 4H16.5C16.5 2.61929 15.3807 1.5 14 1.5V2.5ZM15.5 4V6H16.5V4H15.5Z"
                  fill="#BDBDBD"
                />
                <Path d="M10 11V17" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round" />
                <Path d="M14 11V17" stroke="#BDBDBD" stroke-linecap="round" stroke-linejoin="round" />
              </Svg>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    position: 'relative',
    borderBottomColor: 'rgba(0, 0, 0, 0.30)',
    borderBottomWidth: 0.5,
    minWidth: '100%',
  },
  text: {
    paddingTop: 57,
    paddingBottom: 11,
    textAlign: 'center',
    color: '#212121',
    fontFamily: 'Roboto',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 22,
    letterSpacing: -0.408,
  },
  leftArrow: {
    position: 'absolute',
    left: 10,
    top: 54,
  },
  addPhotoContainer: {
    minWidth: '100%',
    paddingTop: 32,
    paddingBottom: 34,
    width: 343,
    paddingLeft: 16,
    paddingRight: 16,
  },
  addPhoto: {
    width: '100%',
    height: 240,

    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
  },
  addPhotoCircle: {
    width: 60,
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: '50%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAddPhoto: {
    marginTop: 8,
    color: '#BDBDBD',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
  },
  input: {
    marginTop: 32,
    paddingTop: 16,
    paddingBottom: 16,
    borderColor: '#e8e8e8',
    borderBottomWidth: 1,

    color: '#BDBDBD',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
  },
  locationInput: {
    position: 'relative',
    marginTop: 16,
    paddingLeft: 28,
  },
  locationIcon: {
    position: 'absolute',
    bottom: 13,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  publishBtn: {
    width: '100%',
    marginTop: 32,
    borderRadius: 100,
    backgroundColor: '#F6F6F6',
  },
  publishBtnText: {
    color: '#BDBDBD',
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,

    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 32,
    paddingLeft: 32,
  },

  deleteBtn: {
    width: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 120,
    borderRadius: 100,
    backgroundColor: '#F6F6F6',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 23,
    paddingLeft: 23,
  },
});
