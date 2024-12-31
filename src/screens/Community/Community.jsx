// App.js
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Color } from '../../Utils/Theme';

const windowWidth = Dimensions.get('window').width;

const CommunityScreen = () => {
  const features = [
    {
      id: 1,
      title: 'Connect with people',
      description: 'Follow your neighbors and see what theyre up to',
      icon: '👥'
    },
    {
      id: 2,
      title: 'Share skills',
      description: 'Share your unique skills with your community',
      icon: '💡'
    },
    {
      id: 3,
      title: 'Volunteer for Local Events',
      description: 'Participate in community events, clean-up activities, or fundraisers to support local initiatives',
      icon: '❤️'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageGrid}>
          <Image
            source={{ uri: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1735602469/Frame_1000003971_mu3jrs.png" }}
            style={styles.largeImage}
          />
          <View style={styles.smallImagesContainer}>
            <Image
              source={{ uri: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1735602471/Frame_1000003970_e9fd3s.png" }}
              style={styles.smallImage}
            />
            <Image
              source={{ uri: "https://res.cloudinary.com/dmhvsyzch/image/upload/v1735602460/Frame_1000003970_1_kuvqtl.png" }}
              style={styles.smallImage}
            />
          </View>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.title}>Welcome to Community</Text>
          <Text style={styles.subtitle}>
            Building connections, sharing knowledge, and fostering a sense of belonging within your neighborhood.
          </Text>

          {features.map((feature) => (
            <View key={feature.id} style={styles.featureItem}>
              <Text style={styles.featureIcon}>{feature.icon}</Text>
              <View style={styles.featureTextContainer}>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            </View>
          ))}

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Check it out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
  imageGrid: {
    width: windowWidth,
    height: windowWidth * 0.8,
  },
  largeImage: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover',
  },
  smallImagesContainer: {
    flexDirection: 'row',
    height: '40%',
  },
  smallImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontFamily: 'AlbertSans-Bold',
    fontSize: 24,
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontFamily: 'AlbertSans-Regular',
    fontSize: 13,
    color: '#666',
    marginBottom: 24,
    lineHeight: 18,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
  
    paddingVertical: 16,

  },
  featureIcon: {
    fontSize: 24,
    marginRight: 16,
    backgroundColor: Color.primary,
    padding: 6,
    borderRadius: 5,
  },
  featureTextContainer: {
    flex: 1,
    
  },
  featureTitle: {
    fontFamily: 'AlbertSans-SemiBold',
    fontSize: 16,
    marginBottom: 4,
    color: '#333',
  },
  featureDescription: {
    fontFamily: 'AlbertSans-Regular',
    fontSize: 13,
    color: '#666',
    lineHeight: 20,
  },
  button: {
    backgroundColor: Color.primary,
    paddingVertical: 16,
    borderRadius: 120,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontFamily: 'AlbertSans-SemiBold',
    color: Color.secondary,
    fontSize: 16,
  },
});

export default CommunityScreen;