import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Color } from '../../../Utils/Theme';

const InwardBookings = ({navigation}) => {

  const bookingData = [
    {
      id: '1',
      title: 'AC Unit Repair',
      description: 'This is a booking description for this particular card. You can click on this card to...',
      date: '23 Sept. 2022 • 12:30 AM',
      status: 'Active',
      image: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1734130826/BookingAvatar_embal8.png', 
    },

  ];

  const BookingCard = ({ booking }) => {
    return (
      <TouchableOpacity onPress={()=> navigation.navigate("inwardsDetails")} style={styles.card}>
        {/* Image section */}
        <Image source={{ uri: booking.image }} style={styles.cardImage} />
        
        <View style={styles.cardContent}>
          <Text style={styles.title}>{booking.title}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {booking.description}
          </Text>
          <Text style={styles.date}>{booking.date}</Text>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>{booking.status}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.bookingsContainer}>
      <FlatList
        data={bookingData}
        renderItem={({ item }) => <BookingCard booking={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default InwardBookings;

const styles = StyleSheet.create({
  bookingsContainer: {
    flex: 1,
    backgroundColor: Color.background,
    paddingTop:20
  },
  card: {
    backgroundColor: Color.gray,
    borderRadius: 8,
    margin: 10,
    flexDirection: 'row',
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d3d3d3', 
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
    objectFit:"cover",
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
    color: '#333',
  },
  description: {
    fontSize: 12,
    fontFamily: 'AlbertSans-Regular',
    color: '#666',
    marginVertical: 4,
  },
  date: {
    fontSize: 12,
    fontFamily: 'AlbertSans-Regular',
    color: '#999',
    marginTop: 4,
  },
  statusContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: Color.primary,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  statusText: {
    color: Color.secondary,
    fontSize: 12,
    fontFamily: 'AlbertSans-Medium',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'AlbertSans-Regular',
    color: '#666',
  },
});
