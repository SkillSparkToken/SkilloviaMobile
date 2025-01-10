import React, { useState, useCallback } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  StatusBar,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Color } from '../../Utils/Theme';

// Dummy data for suggestions
const DUMMY_DATA = [
  // People
  { id: '1', name: 'John Developer', type: 'person', skills: 'React Native, JavaScript' },
  { id: '2', name: 'Sarah Designer', type: 'person', skills: 'UI/UX, Figma' },
  { id: '3', name: 'Mike Handler', type: 'person', skills: 'Electrical Repairs, Carpentry' },
  { id: '4', name: 'Tom Cleaner', type: 'person', skills: 'House Cleaning, Deep Cleaning' },
  
  // Communities
  { id: '5', name: 'Home Improvement Pros', type: 'community', members: '8.2k members' },
  { id: '6', name: 'Professional Cleaners Network', type: 'community', members: '4.5k members' },
  { id: '7', name: 'Handyman Hub', type: 'community', members: '6.1k members' },
  
  // Skills
  { id: '8', name: 'Electrical Repairs', type: 'skill', people: '2.5k+ people' },
  { id: '9', name: 'Carpentry', type: 'skill', people: '3k+ people' },
  { id: '10', name: 'Painting (Interior/Exterior)', type: 'skill', people: '4.2k+ people' },
  { id: '11', name: 'Appliance Repair', type: 'skill', people: '1.8k+ people' },
  { id: '12', name: 'Furniture Assembly', type: 'skill', people: '2.3k+ people' },
  { id: '13', name: 'Handyman Services', type: 'skill', people: '5k+ people' },
  { id: '14', name: 'Lock Repair and Locksmith Services', type: 'skill', people: '1.2k+ people' },
  { id: '15', name: 'Roofing Repairs', type: 'skill', people: '1.5k+ people' },
  { id: '16', name: 'Window and Glass Repair', type: 'skill', people: '1.3k+ people' },
  { id: '17', name: 'House Cleaning', type: 'skill', people: '6.8k+ people' },
  { id: '18', name: 'Deep Cleaning', type: 'skill', people: '4.2k+ people' },
  { id: '19', name: 'Carpet Cleaning', type: 'skill', people: '2.1k+ people' },
  { id: '20', name: 'Gutter Cleaning', type: 'skill', people: '1.7k+ people' },
  { id: '21', name: 'Pressure Washing', type: 'skill', people: '2.4k+ people' },
  { id: '22', name: 'Pool Cleaning and Maintenance', type: 'skill', people: '1.9k+ people' },
  { id: '23', name: 'Garage Organization', type: 'skill', people: '1.6k+ people' },
  { id: '24', name: 'Decluttering Services', type: 'skill', people: '2.2k+ people' },
  { id: '25', name: 'Chimney Sweeping', type: 'skill', people: '900+ people' },
];

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = useCallback((text) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setSuggestions([]);
      return;
    }

    // Filter suggestions based on search query
    const filteredSuggestions = DUMMY_DATA.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase()) ||
      (item.type === 'person' && item.skills.toLowerCase().includes(text.toLowerCase()))
    );
    setSuggestions(filteredSuggestions);
  }, []);

  const renderSuggestionItem = ({ item }) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => {
        // Handle suggestion selection
        console.log('Selected:', item);
      }}
    >
      <View style={styles.suggestionContent}>
        <Icon
          name={
            item.type === 'person'
              ? 'person-outline'
              : item.type === 'community'
              ? 'people-outline'
              : 'build-outline'  
          }
          size={24}
          color="#6B7280"
          style={styles.suggestionIcon}
        />
        <View>
          <Text style={styles.suggestionTitle}>{item.name}</Text>
          <Text style={styles.suggestionSubtitle}>
            {item.type === 'person'
              ? item.skills
              : item.type === 'community'
              ? item.members
              : item.people}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        translucent={Platform.OS === 'android'}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Icon name="arrow-back" size={24} color="#1F2937" />
         
          </TouchableOpacity>
        </View>
        
        <View style={styles.searchContainer}>
            
          <View style={styles.searchWrapper}>
            <Icon name="search-outline" size={20} color="#6B7280" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search people, skills and communities"
              placeholderTextColor="#6B7280"
              autoFocus={true}
              value={searchQuery}
              onChangeText={handleSearch}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity
                onPress={() => {
                  setSearchQuery('');
                  setSuggestions([]);
                }}
              >
                <Icon name="close-circle" size={20} color="#6B7280" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <FlatList
          data={suggestions}
          renderItem={renderSuggestionItem}
          keyExtractor={(item) => item.id}
          keyboardShouldPersistTaps="always"
          contentContainerStyle={styles.suggestionsContainer}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    fontFamily: 'AlbertSans-Regular',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 8,
    fontFamily: 'AlbertSans-Regular',
  },
  backButton: {
    padding: 8,
    flexDirection: 'row',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#F3F4F6',
    borderRadius: 30,
    borderWidth:1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderColor: '#D3D3D3',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
    fontSize: 16,
    color: '#1F2937',
    fontFamily: 'AlbertSans-Regular',

  },

  texx: {
    marginLeft: 10,
    fontSize: 14,
    color: '#1F2937',
    fontFamily: 'AlbertSans-Medium',
  },
  suggestionsContainer: {
    padding: 16,
  },
  suggestionItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  suggestionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  suggestionIcon: {
    marginRight: 12,
  },
  suggestionTitle: {
    fontSize: 16,
    color: '#1F2937',
    fontFamily: 'AlbertSans-Regular',
  },
  suggestionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    fontFamily: 'AlbertSans-Regular',
    marginTop: 2,
  },
});

export default SearchScreen;