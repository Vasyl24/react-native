import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import Svg, { Circle, Path } from 'react-native-svg';

export const CommentsScreen = () => {
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
          <Svg width={24} height={24} viewBox="0 0 24 24" style={styles.leftArrow}>
            {/* <Path id="Shape" d="M20 12H4" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round" />
            <Path id="Shape_2" d="M10 18L4 12L10 6" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round" /> */}

            <Path d="M14.356 10.057c0.4-0.381 0.415-1.014 0.035-1.414s-1.014-0.415-1.414-0.034l1.379 1.448zM5.977 15.276c-0.4 0.381-0.415 1.014-0.034 1.414s1.014 0.415 1.414 0.035l-1.379-1.448zM7.356 15.276c-0.4-0.381-1.033-0.365-1.414 0.035s-0.365 1.033 0.034 1.414l1.379-1.448zM12.977 23.391c0.4 0.381 1.033 0.365 1.414-0.035s0.365-1.033-0.035-1.414l-1.379 1.448zM6.667 15c-0.552 0-1 0.448-1 1s0.448 1 1 1v-2zM25.333 17c0.552 0 1-0.448 1-1s-0.448-1-1-1v2zM12.977 8.609l-7 6.667 1.379 1.448 7-6.667-1.379-1.448zM5.977 16.724l7 6.667 1.379-1.448-7-6.667-1.379 1.448zM6.667 17h18.667v-2h-18.667v2z" />
          </Svg>
        </View>
        <Text style={styles.text}>Коментарі</Text>
      </View>

      <View style={styles.commentPageContainer}>
        <Image style={styles.commentImg} source={require('../../images/Rectangle.jpg')} />

        <View>
          <View style={[styles.commentContainer, { marginTop: 32 }]}>
            <Image style={styles.profileAvatar} source={require('../../images/ellipse-1.jpg')} />
            <View style={styles.commentTextContainer}>
              <Text>Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!</Text>
              <Text style={styles.commentDate}>09 червня, 2020 | 08:40</Text>
            </View>
          </View>

          <View style={[styles.commentContainer, { flexDirection: 'row-reverse' }]}>
            <Image style={styles.profileAvatar} source={require('../../images/ellipse.jpg')} />
            <View style={styles.commentTextContainer}>
              <Text>A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.</Text>
              <Text style={styles.commentDate}>09 червня, 2020 | 09:14</Text>
            </View>
          </View>

          <View style={styles.commentContainer}>
            <Image style={styles.profileAvatar} source={require('../../images/ellipse-1.jpg')} />
            <View style={styles.commentTextContainer}>
              <Text>Thank you! That was very helpful!</Text>
              <Text style={styles.commentDate}>09 червня, 2020 | 09:20</Text>
            </View>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Коментувати..."
            // value={loginPassword}
            // onChangeText={(text) => setLoginPassword(text)}
            // autoComplete="password"
            // secureTextEntry={passwordVisibility}
          />
          <Svg width={37} height={37} viewBox="0 0 37 37" style={styles.iconArrow}>
            <Circle cx="17" cy="17" r="17" fill="#FF6C00" />
            <Path
              d="M17 10L17.3536 9.64645C17.1583 9.45118 16.8417 9.45118 16.6464 9.64645L17 10ZM21.6464 15.3536C21.8417 15.5488 22.1583 15.5488 22.3536 15.3536C22.5488 15.1583 22.5488 14.8417 22.3536 14.6464L21.6464 15.3536ZM11.6464 14.6464C11.4512 14.8417 11.4512 15.1583 11.6464 15.3536C11.8417 15.5488 12.1583 15.5488 12.3536 15.3536L11.6464 14.6464ZM16.5 24C16.5 24.2761 16.7239 24.5 17 24.5C17.2761 24.5 17.5 24.2761 17.5 24H16.5ZM16.6464 10.3536L21.6464 15.3536L22.3536 14.6464L17.3536 9.64645L16.6464 10.3536ZM16.6464 9.64645L11.6464 14.6464L12.3536 15.3536L17.3536 10.3536L16.6464 9.64645ZM16.5 10V17H17.5V10H16.5ZM16.5 17V24H17.5V17H16.5Z"
              fill="white"
            />
          </Svg>
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
  commentPageContainer: {
    minWidth: '100%',
    paddingTop: 32,
    paddingBottom: 34,
    paddingLeft: 16,
    paddingRight: 16,
  },
  commentImg: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 8,
  },

  commentContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 24,
    columnGap: 16,
  },
  commentTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    padding: 16,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
  },
  commentDate: {
    marginTop: 8,
    alignSelf: 'flex-end',
    color: '#BDBDBD',
    textAlign: 'right',
    fontFamily: 'Roboto',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 400,
  },
  inputContainer: {
    marginTop: 30,
  },
  input: {
    position: 'relative',
    maxWidth: '100%',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  iconArrow: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
});
