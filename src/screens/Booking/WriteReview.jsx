import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { Color } from '../../Utils/Theme';

const WriteReview = ({ navigation }) => {
  const handleBackPress = () => {
    if (navigation) {
      navigation.goBack();
    } else {
      console.warn('No navigation prop provided!');
    }
  };

  return (
    <View style={styles.container}>
      {/* StatusBar */}
      <StatusBar barStyle="dark-content" backgroundColor="#F9F9F9" />

      {/* Back Icon */}
      <TouchableOpacity style={styles.backIcon} onPress={handleBackPress}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>Rate your experience with Makeup Girl?</Text>

      {/* Rating Section */}
      <View style={styles.starsContainer}>
        {[...Array(5)].map((_, index) => (
          <Text key={index} style={styles.star}>
            ★
          </Text>
        ))}
      </View>

      {/* Review Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter a description..."
        placeholderTextColor="#A0A0A0"
        multiline
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    padding: 20,
  },
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'AlbertSans-Bold', 
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
    marginTop: 60, 
  },
  starsContainer: {
    flexDirection: 'row',

    marginBottom: 20,
  },
  star: {
    fontSize: 32,
    color: '#FFD700',
    marginHorizontal: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium', // Custom font
    color: '#000',

    marginBottom: 20,
    textAlignVertical: 'top', // For multiline input
    height: 120,
  },
  submitButton: {
    backgroundColor: Color.primary,
    borderRadius: 50,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold', // Custom font
    color: Color.secondary,
  },
});

export default WriteReview;
