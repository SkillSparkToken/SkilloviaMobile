import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color } from '../../Utils/Theme';

const PeopleNearProfile = ({navigation}) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Icon
        key={index}
        name="star"
        size={16}
        color={index < rating ? '#FFD700' : '#E0E0E0'}
        style={{ marginRight: 2 }}
      />
    ));
  };

  const renderSkillItem = ({ title, experienceLevel, rating }) => (
    <View style={styles.skillItem}>
      <View style={styles.skillInfo}>
        <Text style={styles.skillTitle}>{title}</Text>
        <Text style={styles.experienceLevel}>Experience level: {experienceLevel}</Text>
        <View style={styles.ratingContainer}>
          {renderStars(rating)}
        </View>
      </View>
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.container}>
        {/* Header with back button */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>

        {/* Profile Info */}
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1733889871/1bbed8f28e0d4ba2f5d0cb1ee0dce7b9_cswcnb.jpg',
            }}
            style={styles.profileImage}
          />

          <View>

          <Text style={styles.name}>Darnell Mertz</Text>
          <Text style={styles.username}>@smrulope123</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1.2k</Text>
              <Text style={styles.statLabel}>followers</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>604</Text>
              <Text style={styles.statLabel}>following</Text>
            </View>
            <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
          </View>
      
          </View>

        
        </View>

        {/* Bio */}
        <View style={styles.bioSection}>
          <Text style={styles.bioTitle}>Bio</Text>
          <Text style={styles.bioText}>
            Passionate about creativity and innovation, this individual thrives on exploring new ideas and pushing boundaries. With a love for nature and travel, they find...
          </Text>
        </View>

        {/* Skills */}
        <View style={styles.skillsSection}>
          <Text style={styles.skillsTitle}>Skills</Text>
          {renderSkillItem({
            title: 'Dog walking',
            experienceLevel: 'Expert',
            rating: 4,
          })}
          {renderSkillItem({
            title: 'Baby sitting',
            experienceLevel: 'Expert',
            rating: 3,
          })}
          {renderSkillItem({
            title: 'Electrical fixing',
            experienceLevel: 'Expert',
            rating: 5,
          })}
        </View>
      </ScrollView>
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
    paddingTop:20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
    marginLeft: 12,
  },
  profileSection: {
    alignItems: 'center',
    paddingTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    marginRight:10
  },
  name: {
    fontSize: 20,
    fontFamily: 'AlbertSans-Bold',
    marginBottom: 4,
  },
  username: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#666',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  statNumber: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#666',
  },
  statDivider: {
    width: 1,
    height: 24,
    backgroundColor: '#E0E0E0',
  },
  followButton: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
  },
  followButtonText: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
  },
  bioSection: {
    padding: 16,
  },
  bioTitle: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
    marginBottom: 8,
  },
  bioText: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#333',
    lineHeight: 20,
  },
  skillsSection: {
    padding: 16,
  },
  skillsTitle: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
    marginBottom: 16,
  },
  skillItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Color.gray,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  skillInfo: {
    flex: 1,
  },
  skillTitle: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
    marginBottom: 4,
  },
  experienceLevel: {
    fontSize: 12,
    fontFamily: 'AlbertSans-Medium',
    color: '#666',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  bookButton: {
    backgroundColor: '#FFE664',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 16,
  },
  bookButtonText: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
  },
});

export default PeopleNearProfile;
