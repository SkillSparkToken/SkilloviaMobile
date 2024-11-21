import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Color } from '../../Utils/Theme';

const VerifyEmail = ({ onClose }) => {
  return (
    <View style={styles.modalContent}>
      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>

      {/* Email Icon */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1732151638/Artwork_ek9843.png',
          }}
          style={styles.image}
        />
      </View>

      {/* Title and Message */}
      <Text style={styles.title}>Verify email</Text>
      <Text style={styles.subtitle}>We need to verify your email</Text>
      <Text style={styles.emailText}>example@gmail.com</Text>
      <Text style={styles.infoText}>
        Check your email and click the link to activate your account
      </Text>

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: '#F6FCEB',
        width: '100%',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
      },
  closeButton: {
    alignSelf: 'flex-end',
    backgroundColor: Color.gray,
    padding: 5,
    borderRadius: 50,
  },
  closeButtonText: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
    color: Color.text,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 18,
    fontFamily: 'AlbertSans-Bold',
    color: Color.secondary,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'AlbertSans-Regular',
    color: Color.text,
  },
  emailText: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
    color: Color.text,
    marginVertical: 10,
  },
  infoText: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'AlbertSans-Regular',
    color: Color.text,
    marginBottom: 20,
  },
  verifyButton: {
    backgroundColor: Color.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  verifyButtonText: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
    color: Color.secondary,
  },
});

export default VerifyEmail;
