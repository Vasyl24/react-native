import { StyleSheet, Text, View, Image, ImageBackground, SafeAreaView, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import Svg, { Path } from 'react-native-svg';

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
          <Svg width={24} height={24} viewBox="0 0 24 24" style={styles.leftArrow} xmlns="http://www.w3.org/2000/svg">
            <Path id="Shape" d="M20 12H4" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round" />
            <Path id="Shape_2" d="M10 18L4 12L10 6" stroke="#212121" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round" />
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

        <TextInput
          style={styles.input}
          placeholder="Коментувати..."
          // value={loginPassword}
          // onChangeText={(text) => setLoginPassword(text)}
          // autoComplete="password"
          // secureTextEntry={passwordVisibility}
        />
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
  input: {
    width: '100%',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 30,
  },
});
