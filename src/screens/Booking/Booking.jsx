// src/screens/Booking/Booking.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InwardBookings from './BookingInward/InwardBookings';
import OutwardBookings from './BookingOutward/OutwardBooking';
import { Color } from '../../Utils/Theme';

const TopTab = createMaterialTopTabNavigator();

const Booking = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bookings</Text>
        <Text style={styles.headerHistory}>History</Text>
      </View>
      <TopTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Color.secondary,
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: { fontFamily: 'AlbertSans-Bold' },
          tabBarIndicatorStyle: { backgroundColor: Color.secondary },
          tabBarStyle: {
            backgroundColor: Color.background,
          },
        }}>
        <TopTab.Screen name="Inward Bookings" component={InwardBookings} />
        <TopTab.Screen name="Outward Bookings" component={OutwardBookings} />
      </TopTab.Navigator>
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    paddingTop: 40
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    // backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'AlbertSans-Bold',
    color: '#333',
  },
  headerHistory: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
    color: Color.secondary,
  },
 
});

export default Booking;