import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, StatusBar,   TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Color } from '../../Utils/Theme';

const Profile = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent={true} barStyle="dark-content" hidden={false} />
      
      <TouchableOpacity onPress={() => navigation.navigate('settings')} style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
        <FontAwesome name="gear" size={20} color="black" />
      </TouchableOpacity>
      
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1732127824/ba7f483bdba74da74c4b90318ac19403_cjqfe2.jpg' }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Darnell Mertz</Text>
          <Text style={styles.username}>@sample123</Text>
          <View style={styles.followInfo}>
            <View style={styles.followItem}>
              <Text style={styles.followCount}>1.2k</Text>
              <Text style={styles.followLabel}>followers</Text>
            </View>
            <View style={styles.followItem}>
              <Text style={styles.followCount}>604</Text>
              <Text style={styles.followLabel}>following</Text>
            </View>
          </View>
        </View>
      </View>

      <View    style={styles.pocketsContainer}>
        <Text style={styles.ft}>Pockets</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
       
        >
          <View style={styles.pocket}>
           
            <View style={styles.pocketInfo}>
              <Text style={styles.pocketTitle}>Cash balance</Text>
              <Text style={styles.cash}>£3,000.00</Text>
            </View>
            <Icon name="lock-closed-outline" size={20} color="#000" />
          </View>
          <View style={styles.pocket1}>
           
            <View style={styles.pocketInfo}>
              <Text style={styles.pocketTitle}>Spare change</Text>
              <Text style={styles.cash}>£50.00</Text>
            </View>
            <Icon name="lock-closed-outline" size={20} color="#000" />
          </View>
          {/* Add more pocket cards if needed */}
        </ScrollView>
      </View>
      
      <View style={styles.bioSection}>
        <Text style={styles.bioTitle}>Bio</Text>
        <Text style={styles.bioText}>
          Passionate about creativity and innovation, this individual thrives on
          exploring new ideas and pushing boundaries. With a love for nature and
          travel, they find...
        </Text>
      </View>
      
      <View style={styles.skillsSection}>
        <Text style={styles.skillsTitle}>Skills</Text>
        {[1, 2, 3].map((_, i) => (
          <View key={i} style={styles.skillCard}>
            <Text style={styles.skillName}>Dog walking</Text>
            <Text style={styles.experienceLevel}>Experience level: Expert</Text>
            <View style={styles.rating}>
              {[...Array(5)].map((_, index) => (
                <Icon
                  key={index}
                  name="star"
                  size={16}
                  color="#FFD700"
                  style={styles.starIcon}
                />
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'AlbertSans-Bold',
    color: '#000',
  },
  profileSection: {
    flexDirection: 'row',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 30,
    marginRight: 16,
  },
  name: {
    fontSize: 20,
    fontFamily: 'AlbertSans-Bold',
    marginTop: 10,
  },
  username: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'AlbertSans-Light',
  },
  followInfo: {
    flexDirection: 'row',
    marginTop: 10,
  },
  followItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  followCount: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
    color: '#000',
  },
  followLabel: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    color: '#555',
  },
  pocketsContainer: {
    marginTop: 20,
  },
  pocket: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.primary,
    marginRight: 10,
    borderRadius: 10,
    padding: 20,
    minWidth: 280,

  },

  pocket1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.card,
    marginRight: 10,
    borderRadius: 10,
    padding: 20,
    minWidth: 280,

  },
  pocketInfo: {
    flex: 1,
    marginLeft: 1,
  },
  pocketIcon: {
    marginRight: 10,
  },
  ft: {
    fontSize: 16,
    marginBottom:10,
    fontFamily: 'AlbertSans-Medium',
  },
  pocketTitle: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
  },
  cash: {
    fontSize: 20,
    fontFamily: 'AlbertSans-ExtraBold',
    color: '#000',
    marginVertical: 10,
  },
  bioSection: {
    marginTop: 20,
  },
  bioTitle: {
    fontSize: 18,
    fontFamily: 'AlbertSans-Medium',
  },
  bioText: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
    fontFamily: 'AlbertSans-Regular',
  },
  skillsSection: {
    marginTop: 20,
    paddingBottom:10,
  },
  skillsTitle: {
    fontSize: 18,
    fontFamily: 'AlbertSans-Medium',
  },
  skillCard: {
    backgroundColor: Color.gray,
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
   
  },
  skillName: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
  },
  experienceLevel: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
    fontFamily: 'AlbertSans-Regular',
  },
  rating: {
    flexDirection: 'row',
  },
  starIcon: {
    marginRight: 2,
  },
});

export default Profile;
