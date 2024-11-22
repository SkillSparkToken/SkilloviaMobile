import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, StatusBar } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color } from '../../Utils/Theme';

const AddSkillScreen = ({ navigation }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [searchText, setSearchText] = useState('');

  // Skills list
  const skills = [
    'Electrical Services',
    'Laundry',
    'Fast Foods',
    'Food Bowls',
    'Make up',
    'Grocery Shopping',
    'Fashion Designer',
  ];

  // Filtered skills based on search input
  const filteredSkills = skills.filter((skill) =>
    skill.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Custom Status Bar */}
      <StatusBar backgroundColor="#F8F8F8" barStyle="dark-content" translucent={false} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add a skill</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search skills"
        placeholderTextColor="#B0B0B0"
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Title */}
      <Text style={styles.title}>Select your skill</Text>

      {/* Skills List */}
      <FlatList
        data={filteredSkills}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.skillItem,
              selectedSkill === item && styles.selectedSkillItem,
            ]}
            onPress={() => setSelectedSkill(item)}
          >
            <Text
              style={[
                styles.skillText,
                selectedSkill === item && styles.selectedSkillText,
              ]}
            >
              {item}
            </Text>
            {/* Circle Icon */}
            <Ionicons
              name={selectedSkill === item ? 'checkmark-circle' : 'ellipse-outline'}
              size={20}
              color={selectedSkill === item ? '#32CD32' : '#B0B0B0'}
            />
          </TouchableOpacity>
        )}
      />

      {/* Next Button */}
      <TouchableOpacity
        style={[styles.nextButton, !selectedSkill && styles.disabledButton]}
        onPress={() =>
          selectedSkill &&
          navigation.navigate('NextScreen', { skill: selectedSkill })
        }
        disabled={!selectedSkill}
      >
        <Text style={styles.nextButtonText}>Next, Experience level</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Color.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 17,
    fontFamily: 'AlbertSans-Bold',
    marginLeft: 10,
    color: '#333333',
  },
  searchInput: {
    backgroundColor: Color.gray,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 16,
    fontSize: 16,
    fontFamily: 'AlbertSans-Regular',
  },
  title: {
    fontSize: 18,
    fontFamily: 'AlbertSans-Bold',
    marginBottom: 16,
    color: '#333333',
  },
  skillItem: {
    padding: 16,
    backgroundColor: Color.gray,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  skillText: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
    color: '#333333',
  },
  selectedSkillItem: {
    borderColor: '#32CD32',
    backgroundColor: '#E8FFE8',
  },
  selectedSkillText: {
    color: '#32CD32',
    fontFamily: 'AlbertSans-Bold',
  },
  nextButton: {
    backgroundColor: '#32CD32',
    padding: 16,
    borderRadius: 30,
    marginTop: 24,
  },
  nextButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
  },
  disabledButton: {
    backgroundColor: '#A9A9A9',
  },
});

export default AddSkillScreen;
