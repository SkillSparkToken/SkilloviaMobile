import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import apiClient from '../../Hooks/Api';
import { Color } from '../../Utils/Theme';

const OtpScreen = ({ route, navigation }) => {
  const { phoneNumber } = route.params; 
  const [otp, setOtp] = useState(['', '', '', '']); 
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(30); 
  const [timerActive, setTimerActive] = useState(false);
  const inputRefs = useRef([]);

  // Handle OTP input change and focus on next input
  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1].focus(); 
    }
  };

  // OTP verification
  const handleOtpVerification = async () => {
    const otpCode = otp.join('');
    if (!otpCode || otpCode.length < 4) {
      Alert.alert('Error', 'Please enter the full OTP');
      return;
    }

    try {
      setLoading(true);
      const response = await apiClient.post('/api/auth/verifyphone', {
        phone: phoneNumber,
        code: otpCode,
      });

      if (response.data.status === 'success') {
        navigation.navigate('personal'); 
      } else {
        Alert.alert('Error', response.data.message || 'OTP verification failed');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again');
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP functionality and countdown timer
  const handleResendOtp = () => {
    setCountdown(30); 
    setTimerActive(true);
  
  };

  useEffect(() => {
    if (timerActive && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (countdown === 0) {
      setTimerActive(false); 
    }
  }, [countdown, timerActive]);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
        hidden={false}
      />
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Create account</Text>
        <Text style={styles.subtitle}>Input OTP verification</Text>
        <Text style={styles.subtitle}>A code was sent to {phoneNumber}</Text>

        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="numeric"
              value={value}
              onChangeText={(text) => handleOtpChange(text, index)}
            />
          ))}
        </View>

        <TouchableOpacity
          onPress={handleOtpVerification}
          style={[styles.verifyButton, loading && styles.verifyButtonDisabled]}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.verifyButtonText}>Verify OTP</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.resendText}>
          Resend OTP in {countdown}s
        </Text>
        {!timerActive && (
          <TouchableOpacity onPress={handleResendOtp} style={styles.resendButton}>
            <Text>Resend OTP</Text>
          </TouchableOpacity>
        )}

        <Text style={styles.loginText}>
          Already have an account?{' '}
          <Text style={styles.link} onPress={() => navigation.navigate('login')}>
            Log in
          </Text>
        </Text>

        <Text style={styles.termsText}>
          By continuing to use Skillovia, you agree to our{' '}
          <Text style={styles.link}>Terms of Service</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 50,
  },
  content: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontFamily: 'AlbertSans-Bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
    fontFamily: 'AlbertSans-Medium',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#CCC',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 10,
  },
  verifyButton: {
    backgroundColor: Color.primary,
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
  },
  verifyButtonDisabled: {
    backgroundColor: '#ccc',
  },
  resendText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    fontFamily: 'AlbertSans-Medium',
  },
  resendButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 14,
    color: Color.secondary,
    marginBottom: 20,
    fontFamily: 'AlbertSans-Medium',
  },
  link: {
    color: Color.secondary,
    textDecorationLine: 'underline',
    fontFamily: 'AlbertSans-Medium',
  },
  termsText: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'AlbertSans-Medium',
  },
});

export default OtpScreen;
