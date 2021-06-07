import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';

// Screens
import { Home, OnBoarding, DestinationDetail } from './screens';
// Tabs
import Tabs from './navigation/tabs';
import { SIZES, COLORS, icons } from './constants';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });
  if (!fontsLoaded) {
    console.log('font load fail');
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName={''}>
          {/* Screens */}
          <Stack.Screen
            name="Onboarding"
            component={OnBoarding}
            options={{
              title: null,
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerLeft: null,
              headerRight: () => (
                <TouchableOpacity
                  style={{
                    paddingRight: SIZES.padding,
                  }}
                  onPress={() => {
                    console.log('xx');
                  }}
                >
                  <Image
                    source={icons.barMenu}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                </TouchableOpacity>
              ),
            }}
          />

          <Stack.Screen
            name="DestinationDetail"
            component={DestinationDetail}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>

          {/* Tab */}
          <Stack.Screen
            name="Home"
            component={Tabs}
            options={{
              title: null,
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerLeft: () => (
                <TouchableOpacity
                  style={{
                    paddingLeft: SIZES.padding,
                  }}
                  onPress={() => {
                    console.log('back');
                  }}
                >
                  <Image
                    source={icons.back}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity
                  style={{
                    paddingRight: SIZES.padding,
                  }}
                  onPress={() => {
                    console.log('menu');
                  }}
                >
                  <Image
                    source={icons.menu}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
