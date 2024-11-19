import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Back arrow icon

const CreateAccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Create account</Text>

      {/* Input Label */}
      <Text style={styles.label}>Input your phone number</Text>

      {/* Phone Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
      />

      {/* Verify Button */}
      <TouchableOpacity  onPress={() => navigation.navigate('otp')} style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>

      {/* Already have an account */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text style={styles.loginLink}>Log in</Text>
        </TouchableOpacity>
      </View>

      {/* Terms and Privacy Policy */}
      <Text style={styles.termsText}>
        By continuing to use Skillovia, you agree to our{' '}
        <Text style={styles.link}>Terms of Service</Text> and{' '}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>
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
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#333',
    marginBottom: 10,
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
    marginBottom: 30,
  },
  verifyButtonText: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
    color: '#fff',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginText: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#333',
  },
  loginLink: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#32CD32', // Light green color for the link
  },
  termsText: {
    fontSize: 12,
    fontFamily: 'AlbertSans-Medium',
    color: '#666',
    textAlign: 'center',
  },
  link: {
    color: '#32CD32', // Light green for links
  },
});

export default CreateAccountScreen;
