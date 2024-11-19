import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Back arrow icon

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Let’s recover your password!</Text>
      <Text style={styles.subtitle}>
        We’ll send you a link to your email to reset your password.
      </Text>

      {/* Email Input */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="john@example.com"
        placeholderTextColor="#999"
        keyboardType="email-address"
      />

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAF4', // Light background color
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'AlbertSans-Medium',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#666',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
    color: '#000',
    marginBottom: 30,
  },
  verifyButton: {
    backgroundColor: '#32CD32', // Light green
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  verifyButtonText: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
    color: '#fff',
  },
});

export default ForgotPasswordScreen;
