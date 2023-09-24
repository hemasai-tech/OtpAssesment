import {View, Text, Platform} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../src/components/LoginScreen';
import OTPVerifyScreen from '../src/components/OtpScreen';

const Stack = createNativeStackNavigator();

const customHeaderOptions = {
  headerStyle: {
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowOpacity: 0, // For iOS
        borderBottomWidth: 0, // For iOS
      },
      android: {
        elevation: 0, // For Android
      },
    }),
  },
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    elevation: 0,
  },
  headerLeft: null,
  headerBackVisible: false,
};

const StackNavigation = () => {
  return (
    <NavigationContainer style={{backgroundColor: 'white'}}>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={customHeaderOptions}
          component={LoginScreen}
        />
        <Stack.Screen
          name="OTP Verify"
          options={customHeaderOptions}
          component={OTPVerifyScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
