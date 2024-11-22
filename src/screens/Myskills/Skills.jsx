import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Color } from '../../Utils/Theme';

const skills = [
  {
    id: '1',
    title: 'Dog walking',
    level: 'Expert',
    description:
      "Hey there! I'm a dedicated dog lover ready to take your furry friend on exciting walks. With a genuine passion for pets and a commitment to...",
    hourlyRate: '£20',
    tokens: '2 spark tokens',
  },
  {
    id: '2',
    title: 'Dog walking',
    level: 'Expert',
    description:
      "Hey there! I'm a dedicated dog lover ready to take your furry friend on exciting walks. With a genuine passion for pets and a commitment to...",
    hourlyRate: '£20',
    tokens: '2 spark tokens',
  },
];

const MySkillsScreen = ({ navigation }) => {
  const renderSkillCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.skillTitle}>{item.title}</Text>
        <TouchableOpacity>
          <Icon name="edit" size={20} color="#4F4F4F" />
        </TouchableOpacity>
      </View>
      <Text style={styles.skillLevel}>Experience level: {item.level}</Text>
      <View style={styles.rating}>
        {[...Array(4)].map((_, index) => (
          <Icon key={index} name="star" size={16} color="#FFC107" />
        ))}
        <Icon name="star-outline" size={16} color="#FFC107" />
      </View>
      <Text style={styles.skillDescription}>{item.description}</Text>
      <View style={styles.footer}>
        <Text style={styles.hourlyRate}>{item.hourlyRate}</Text>
        <Text style={styles.tokens}>{item.tokens}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* StatusBar */}
      <StatusBar translucent  barStyle="dark-content" />
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.header}>My skills</Text>
      </View>
      {/* Skill Cards */}
      <FlatList
        data={skills}
        keyExtractor={(item) => item.id}
        renderItem={renderSkillCard}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
      {/* Add Skill Button */}
      <TouchableOpacity onPress={() => navigation.navigate('addskill')} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add a skill</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 60,
  },
  header: {
    fontSize: 20,
    fontFamily: 'AlbertSans-Bold',
    marginLeft: 10,
    color: '#333333',
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: Color.gray,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    // elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  skillTitle: {
    fontSize: 18,
    fontFamily: 'AlbertSans-Bold',
    color: '#333333',
  },
  skillLevel: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#777777',
    marginBottom: 8,
  },
  rating: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  skillDescription: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    color: '#555555',
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hourlyRate: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Bold',
    color: '#333333',
  },
  tokens: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    color: '#555555',
  },
  addButton: {
    backgroundColor: Color.primary,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 16,
  },
  addButtonText: {
    color: Color.secondary,
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
  },
});

export default MySkillsScreen;
