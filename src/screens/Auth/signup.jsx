import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import apiClient from '../../Hooks/Api'; // Import apiClient for API calls
import { Color } from '../../Utils/Theme';

const CreateAccountScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const handleVerify = async () => {
    if (!phoneNumber) {
      Alert.alert('Error', 'Please enter a phone number');
      return;
    }
  
    setLoading(true); // Start loading
  
    try {
      const response = await apiClient.post('/api/auth/sendverificationcode', {
        phone: phoneNumber,
      });
  
      if (response.data.status === 'success') {
        // Navigate to OTP screen with the phone number
        navigation.navigate('otp', { phoneNumber });
      } else {
        const message = response.data.message || 'Failed to send verification code';
        Alert.alert('Error', message);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const message = error.response.data.message || 'Invalid request. Please check the phone number.';
        Alert.alert('Validation Error', message);
      } else {
        Alert.alert('Error', 'Something went wrong. Please try again');
      }
    } finally {
      setLoading(false); // End loading
    }
  };
  
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
        placeholderTextColor={styles.placeholder.color} 
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />

      {/* Verify Button */}
      <TouchableOpacity
        onPress={handleVerify}
        style={[styles.verifyButton, loading && styles.verifyButtonDisabled]}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" /> // Loading spinner
        ) : (
          <Text style={styles.verifyButtonText}>Verify</Text>
        )}
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
    backgroundColor: Color.background,
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
  placeholder: {
    color: '#999', 
    fontFamily: 'AlbertSans-Medium',// Custom placeholder color
  },
  verifyButton: {
    backgroundColor: Color.primary,
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  verifyButtonDisabled: {
    backgroundColor: '#A9A9A9', // Disabled button color
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
    color: Color.secondary,
  },
  termsText: {
    fontSize: 12,
    fontFamily: 'AlbertSans-Medium',
    color: Color.secondary,
    textAlign: 'center',
  },
  link: {
    color: '#32CD32',
  },
});

export default CreateAccountScreen;
