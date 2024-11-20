import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity, Image, FlatList, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color } from '../../Utils/Theme';

const Home = () => {
  const services = [
    { id: '1', title: 'DIY', image: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Baby sitting', image: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Arts & Crafts', image: 'https://via.placeholder.com/150' },
  ];

  const renderService = ({ item }) => (
    <View style={styles.serviceCard}>
      <Image source={{ uri: item.image }} style={styles.serviceImage} />
      <Text style={styles.serviceTitle}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.container}>
        {/* Location and Search */}
        <View style={styles.header}>
          <View style={styles.locationWrapper}>
            <Icon name="location-outline" size={20} color="gray" />
            <Text style={styles.locationText}>3329 Joyce St</Text>
            <Icon name="chevron-down-outline" size={20} color="gray" />
          </View>
          <Icon name="search-outline" size={24} color="gray" />
        </View>
        <TextInput
          style={styles.searchBar}
          placeholder="Search people, skills and communities"
          placeholderTextColor="#A9A9A9"
        />
        {/* Cards */}
        <TouchableOpacity style={[styles.card, { backgroundColor: '#005F73' }]}>
          <Text style={styles.cardTitle}>Please verify your email</Text>
          <Text style={styles.cardDescription}>
            We sent a confirmation email to example@gmail.com, please visit your email to review and activate your account
          </Text>
          <Text style={styles.cardAction}>Activate your account ▶</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, { backgroundColor: '#94D82D' }]}>
          <Text style={styles.cardTitle}>Complete your profile</Text>
          <Text style={styles.cardDescription}>
            Add your skills and interests, set your availability time and find clients.
          </Text>
          <Text style={styles.cardAction}>Complete profile ▶</Text>
        </TouchableOpacity>
        {/* Services */}
        <Text style={styles.sectionTitle}>Explore services</Text>
        <FlatList
          data={services}
          horizontal
          renderItem={renderService}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.serviceList}
        />
      
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: Color.background,
    
    },
    container: {
      flex: 1,
      backgroundColor: Color.background,
      paddingHorizontal: 20,
      paddingTop: 10,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    locationWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    locationText: {
      fontSize: 16,
      fontFamily: 'AlbertSans-Medium', // Added fontFamily
      color: '#000',
      marginHorizontal: 5,
    },
    searchBar: {
      backgroundColor: '#F0F0F0',
      borderRadius: 10,
      padding: 10,
      marginBottom: 20,
      fontSize: 14,
      fontFamily: 'AlbertSans-Medium', // Added fontFamily
    },
    card: {
      borderRadius: 10,
      padding: 15,
      marginBottom: 10,
    },
    cardTitle: {
      fontSize: 16,
      fontFamily: 'AlbertSans-Medium', // Added fontFamily
      color: '#FFFFFF',
 
      marginBottom: 5,
    },
    cardDescription: {
      fontSize: 14,
      fontFamily: 'AlbertSans-Medium', // Added fontFamily
      color: '#FFFFFF',
      marginBottom: 10,
    },
    cardAction: {
      fontSize: 14,
      fontFamily: 'AlbertSans-Medium', // Added fontFamily
      color: '#FFFFFF',

    },
    sectionTitle: {
      fontSize: 18,
      fontFamily: 'AlbertSans-Medium', // Added fontFamily

      marginTop: 20,
      marginBottom: 10,
    },
    serviceList: {
      paddingBottom: 10,
    },
    serviceCard: {
      marginRight: 15,
      alignItems: 'center',
    },
    serviceImage: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginBottom: 5,
    },
    serviceTitle: {
      fontSize: 14,
      fontFamily: 'AlbertSans-Medium', // Added fontFamily
     
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingVertical: 10,
      borderTopWidth: 1,
      borderTopColor: '#E0E0E0',
    },
    navItem: {
      alignItems: 'center',
    },
    navText: {
      fontSize: 12,
      fontFamily: 'AlbertSans-Medium', // Added fontFamily
      color: 'gray',
      marginTop: 5,
    },
  });
  

export default Home;
