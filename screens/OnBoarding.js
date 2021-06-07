import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { COLORS, images, SIZES, FONTS } from '../constants';

const OnBorading = ({ navigation }) => {
  return (
    <SafeAreaView style={sytles.container}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={images.onboardingImage}
          resizeMode="contain"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            alignItems: 'center',
            marginHorizontal: SIZES.padding,
            ...FONTS.body3,
          }}
        >
          <Text style={{ ...FONTS.h2 }}>Digital Ticket</Text>
          <Text
            style={{
              color: COLORS.gray,
              marginTop: SIZES.padding,
              textAlign: 'center',
            }}
          >
            Now that you have successfully run the app, let's modify it. Open
            App.js in your text editor
          </Text>
        </View>
        <TouchableOpacity
          style={{
            marginTop: SIZES.padding * 2,
            width: '70%',
            height: 50,
            backgroundColor: COLORS.primary,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Start!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const sytles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default OnBorading;
