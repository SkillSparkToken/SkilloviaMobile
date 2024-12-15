import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, Image, StatusBar, Pressable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color } from '../../Utils/Theme'; // If you don't have this, use your preferred colors.
import { useNavigation } from '@react-navigation/native';
const Search = () => {

  const navigation = useNavigation(); // Add this hook
  return (
    <SafeAreaView style={styles.safeArea}>
  
      <View style={styles.container}>
        {/* Location */}
        <View style={styles.headerRow}>
          <View style={styles.locationWrapper}>
            <Icon name="location-outline" size={20} color="#6B7280" />
            <Text style={styles.locationText}>3329 Joyce St</Text>
            <Icon name="chevron-down-outline" size={20} color="#6B7280" />
          </View>

          {/* Notification and Profile Icons */}
          <View style={styles.iconWrapper}>
            <View style={[styles.iconBadgeWrapper, { backgroundColor: '#FFEE87' }]}>
              <Icon name="notifications-outline" size={20} />
              <View style={styles.badge} />
            </View>
            <TouchableOpacity  onPress={() => navigation.navigate('Chats')} style={[styles.iconBadgeWrapper, { backgroundColor: '#8FF15F' }]}>
              <Icon name="chatbubbles" size={20} color="#00B761" />
              <View style={styles.badge} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchWrapper}>
          <Icon name="search-outline" size={20} color="#6B7280" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search people, skills and communities"
            placeholderTextColor="#6B7280"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
 
    paddingVertical: 10,
    paddingBottom: 30
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    color: '#1F2937',
    fontFamily: 'AlbertSans-Medium', 
    marginHorizontal: 5,
  },
  iconWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  iconBadgeWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  badge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF0000',
    position: 'absolute',
    top: 5,
    right: 5,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
 
    borderRadius: 50,
    paddingHorizontal: 10,
    borderWidth:1,
    borderColor: 'gray',
    
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#1F2937',
    fontFamily: 'AlbertSans-Medium', // Replace with your font or default
  },
});

export default Search;
