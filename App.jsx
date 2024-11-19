import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/Auth/Login';
import Onboarding from './src/screens/Onboarding';
import CreateAccountScreen from './src/screens/Auth/signup';
import ForgotPasswordScreen from './src/screens/Auth/ForgotPsw';
import Otp from './src/screens/Auth/Otp';
import PersonalDetails from './src/screens/Auth/PersonalDetails';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onboard">

        {/* Onboarding Screen */}
        <Stack.Screen
          name="onboard"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={CreateAccountScreen}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="otp"
          component={Otp}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="personal"
          component={PersonalDetails}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="forgotpsw"
          component={ForgotPasswordScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
