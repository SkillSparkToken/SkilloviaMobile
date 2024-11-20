import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/Auth/Login';
import Onboarding from './src/screens/Onboarding';
import CreateAccountScreen from './src/screens/Auth/signup';
import ForgotPasswordScreen from './src/screens/Auth/ForgotPsw';
import Otp from './src/screens/Auth/Otp';
import PersonalDetails from './src/screens/Auth/PersonalDetails';
import WelcomeScreen from './src/screens/Auth/WelocmeScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/Home/Home';
import Community from './src/screens/Community/Community';
import Profile from './src/screens/Profile/Profile';
import Booking from './src/screens/Booking/Booking';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator for Home
const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'search' : 'search';
          }     else if (route.name === 'Booking') {
            iconName = focused ? 'person' : 'person-outline';
          }
          
          else if (route.name === 'Community') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

      

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#32CD32',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontFamily: 'AlbertSans-Medium' }, // Apply the font here
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Booking" component={Booking} options={{ headerShown: false }} />
      <Tab.Screen name="Community" component={Community} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onboard">
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
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={HomeTabs} // Use Tab Navigator for Home
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
