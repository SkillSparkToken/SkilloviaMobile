import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Color } from '../../Utils/Theme'; // Adjust colors based on your project theme.

const SkillDetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>My skills</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Image */}
        <Image
          source={{ uri: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1732448078/Rectangle_1087_roezng.png' }} // Replace with your actual image URL
          style={styles.skillImage}
        />

        {/* Title and Edit/Delete */}
        <View style={styles.row}>
          <Text style={styles.title}>Dog walking</Text>
          <View style={styles.icons}>
        
            <TouchableOpacity style={styles.editIcon}>
              <Icon name="edit" size={24} color={Color.secondary} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Experience Level */}
        <Text style={styles.experience}>Experience level: Expert</Text>

        {/* Rating */}
        <View style={styles.rating}>
          {[...Array(4)].map((_, index) => (
            <Icon key={index} name="star" size={20} color="#FFC107" />
          ))}
          <Icon name="star-outline" size={20} color="#FFC107" />
        </View>

        {/* Description */}
        <Text style={styles.description}>
          Hey there! I'm a dedicated dog lover ready to take your furry friend
          on exciting walks. With a genuine passion for pets and a commitment to
          their well-being, I'll ensure your pet enjoys every adventure.
        </Text>

        {/* Hourly Rate and Tokens */}
        <View style={styles.details}>
          <Text style={styles.detailItem}>Hourly rate: <Text style={styles.bold}>£20</Text></Text>
          <Text style={styles.detailItem}>2 spark tokens</Text>
        </View>

        {/* Reviews Section */}
        <View style={styles.reviewsHeader}>
          <Text style={styles.reviewsTitle}>Reviews (120)</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {/* Sample Reviews */}
        <View style={styles.review}>
          <Text style={styles.reviewAuthor}>Winifred Stamm</Text>
          <Text style={styles.reviewContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            hendrerit nulla at sem convallis interdum...
          </Text>
        </View>
        <View style={styles.review}>
          <Text style={styles.reviewAuthor}>Winifred Stamm</Text>
          <Text style={styles.reviewContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            hendrerit nulla at sem convallis interdum...
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
   marginTop:40
  
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'AlbertSans-Bold',
    marginLeft: 10,
    color: '#333',
  },
  content: {
    paddingHorizontal: 16,
  },
  skillImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontFamily: 'AlbertSans-Bold',
    color: '#333',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editIcon: {
    marginLeft: 16,
  },
  experience: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#777',
    marginBottom: 8,
  },
  rating: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    color: '#555',
    marginBottom: 16,
    lineHeight: 20,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  detailItem: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    color: '#555',
  },
  bold: {
    fontFamily: 'AlbertSans-Bold',
    color: '#333',
  },
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    alignItems: 'center',
  },
  reviewsTitle: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
    color: '#333',
  },
  seeAll: {
    fontSize: 14,
    color: Color.secondary,
    fontFamily: 'AlbertSans-Regular',
  },
  review: {
    backgroundColor: Color.gray,
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  reviewAuthor: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Bold',
    color: '#333',
    marginBottom: 4,
  },
  reviewContent: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    color: '#555',
  },
});

export default SkillDetailsScreen;
