import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';

const VerifyEmailModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>

          {/* Email Icon */}
          <Image
            source={{
              uri: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1732151638/Artwork_ek9843.png',
            }}
            style={styles.image}
          />

          {/* Title and Text */}
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
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end', // Positions the content at the bottom
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      },
      modalContent: {
        backgroundColor: '#F6FCEB',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        paddingBottom:0,
        width: '100%',
        alignItems: 'center',
        height:500
      },
  closeButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#E5E5E5',
    padding: 5,
    borderRadius: 50,
  },
  closeButtonText: {
    fontSize: 20,
    fontFamily: 'AlbertSans-Regular',
    color: '#000',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: 'AlbertSans-Regular',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    fontFamily: 'AlbertSans-Regular',
  },
  emailText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginVertical: 10,
    textAlign: 'center',
    fontFamily: 'AlbertSans-Regular',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  verifyButton: {
    backgroundColor: '#8FF15F',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%', 


  },
  verifyButtonText: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Regular',
    color: '#fff',
  },
});

export default VerifyEmailModal;
