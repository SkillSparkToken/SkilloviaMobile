/* eslint-disable react/no-unstable-nested-components */
import React , {useEffect}from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
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
import SettingsScreen from './src/screens/Settings/Settings';
import MySkillsScreen from './src/screens/Myskills/Skills';
import AddSkillScreen from './src/screens/Myskills/AddSkill';
import ExprienceLevel from './src/screens/Myskills/ExprienceLevel';
import SkillDescription from './src/screens/Myskills/Description';
import HourlyRate from './src/screens/Myskills/HourlyRate';
import EditProfile from './src/screens/Profile/EditProfile';
import NotificationSettings from './src/screens/Notification/Notification';
import Apperance from './src/screens/Settings/Apperance';
import SecurityScreen from './src/screens/Security/Security';
import HomeIcon from './assets/Icons/explore.svg';
import KYCList from './src/screens/Kyc/KycList';
import IDscreen from './src/screens/Kyc/IDscreen';
import ChangePasswordScreen from './src/screens/Security/ChangPassword';
import SkillDetailsScreen from './src/screens/Myskills/SkillDetails';
import EmptySkillsScreen from './src/screens/Myskills/EmptySKill';
import PeopleNearProfile from './src/screens/PeopleNearby/PeopleNeearProfile';
import Explore from './src/screens/Explore/Explore';
import ViewService from './src/screens/Booking/BookService/ViewService';
import BookServiceForm from './src/screens/Booking/BookService/BookServiceForm';
import SummaryPage from './src/screens/Booking/BookService/SummaryPage';
import InwardDetails from './src/screens/Booking/BookingInward/InwardDetails';
import ServiceCompleted from './src/screens/Booking/BookingInward/SerciceCompleted';
import MessagesListScreen from './src/screens/Chat/MessagesListScreen';
import ChatScreen from './src/screens/Chat/ChatScreen';
import Notify from './src/screens/Chat/Notify';
import BookingProgress from './src/screens/Booking/BookingOutward/BookingProgress';
import OutwardDetails from './src/screens/Booking/BookingOutward/OutwardDetails';
import WriteReview from './src/screens/Booking/WriteReview';
import CommunityListScreen from './src/screens/Community/CommunityList';
import Feed from './src/screens/Community/Feed';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator for Home
const HomeTabs = () => {
  return (
    <Tab.Navigator
   
      screenOptions={({ route }) => ({
        animation: 'shift',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'Booking') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Community') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#32CD32',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontFamily: 'AlbertSans-Medium',  animation: 'shift',  },
        tabBarStyle: {
          backgroundColor: '#F0F6E6', // Background color of the tab bar
         
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Community" component={Community} options={{ headerShown: false }} />
      <Tab.Screen name="Booking" component={Booking} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const App = () => {

  useEffect(() => {
    SplashScreen.hide(); 
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="onboard"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, 
        }}
      >
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
          component={HomeTabs} 
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="settings"
          component={SettingsScreen} 
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="myskill"
          component={MySkillsScreen} 
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="addskill"
          component={AddSkillScreen} 
          options={{ headerShown: false }}
        />


<Stack.Screen
          name="exprience"
          component={ExprienceLevel} 
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="description"
          component={SkillDescription} 
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="rate"
          component={HourlyRate} 
          options={{ headerShown: false }}
        />

        {/* profile */}

<Stack.Screen
          name="editprofile"
          component={EditProfile} 
          options={{ headerShown: false }}
        />

        {/* notification */}

        <Stack.Screen
          name="notification"
          component={NotificationSettings} 
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="appearance"
          component={Apperance} 
          options={{ headerShown: false }}
        />


<Stack.Screen
          name="security"
          component={SecurityScreen} 
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="kyclist"
          component={KYCList} 
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="id"
          component={IDscreen} 
          options={{ headerShown: false }}
        />
<Stack.Screen
          name="editpsw"
          component={ChangePasswordScreen} 
          options={{ headerShown: false }}
        />


<Stack.Screen
          name="skilldetails"
          component={SkillDetailsScreen} 
          options={{ headerShown: false }}
        />


<Stack.Screen
          name="empty"
          component={EmptySkillsScreen} 
          options={{ headerShown: false }}
        />


<Stack.Screen
          name="peopleProfile"
          component={PeopleNearProfile} 
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="explore"
          component={Explore} 
          options={{ headerShown: false }}
        />


<Stack.Screen
          name="viewservice"
          component={ViewService} 
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="serviceform"
          component={BookServiceForm} 
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="summarypage"
          component={SummaryPage} 
          options={{ headerShown: false }}
        />


<Stack.Screen
          name="inwardsDetails"
          component={InwardDetails} 
          options={{ headerShown: false }}
        />


<Stack.Screen
          name="servicesCompleted"
          component={ServiceCompleted} 
          options={{ headerShown: false }}
        />


<Stack.Screen
          name="bookingProgress"
          component={BookingProgress} 
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="outwardDetails"
          component={OutwardDetails} 
          options={{ headerShown: false }}
        />


<Stack.Screen
          name="review"
          component={WriteReview}
          options={{ headerShown: false }}
        />



<Stack.Screen
          name="Chats"
          component={MessagesListScreen}
          options={{ headerShown: false }}
        />


<Stack.Screen
          name="message"
          component={ChatScreen}
          options={{ headerShown: false }}
        />

<Stack.Screen
          name="notify"
          component={Notify}
          options={{ headerShown: false }}
        />


<Stack.Screen
          name="communityList"
          component={CommunityListScreen}
          options={{ headerShown: false }}
        />




<Stack.Screen
          name="feed"
          component={Feed}
          options={{ headerShown: false }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
