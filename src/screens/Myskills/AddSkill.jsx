import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';

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
      <TextInput
        style={styles.searchInput}
        placeholder="Search skills"
        value={searchText}
        onChangeText={setSearchText}
      />

      <Text style={styles.title}>Select your skill</Text>

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
            {selectedSkill === item && <View style={styles.selectedIndicator} />}
          </TouchableOpacity>
        )}
      />

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
    backgroundColor: '#F8F8F8',
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 16,
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333',
  },
  skillItem: {
    padding: 16,
    backgroundColor: '#FFFFFF',
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
    color: '#333333',
  },
  selectedSkillItem: {
    borderColor: '#32CD32',
    backgroundColor: '#E8FFE8',
  },
  selectedSkillText: {
    color: '#32CD32',
    fontWeight: 'bold',
  },
  selectedIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#32CD32',
  },
  nextButton: {
    backgroundColor: '#32CD32',
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
  },
  nextButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#A9A9A9',
  },
});

export default AddSkillScreen;
