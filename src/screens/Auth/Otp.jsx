import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Back arrow icon

const CreateAccount = ({ navigation }) => {
  const [countdown, setCountdown] = useState(10);

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

        <View style={styles.otpContainer}>
          {Array(4).fill().map((_, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              maxLength={1}
              keyboardType="numeric"
            />
          ))}
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('personal')} style={styles.button}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>

        <Text style={styles.resendText}>Resend OTP in {countdown}s</Text>
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
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
  },
  backButton: {
    marginTop: 50,
  },
  backText: {
    fontSize: 16,
    color: '#000',
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
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#32CD32',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
  },
  resendText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    fontFamily: 'AlbertSans-Medium',
  },
  loginText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    fontFamily: 'AlbertSans-Medium',
  },
  link: {
    color: '#32CD32',
    textDecorationLine: 'underline',
    fontFamily: 'AlbertSans-Medium',
  },
  termsText: {
    fontSize: 12,
    color: '#666',
   
    fontFamily: 'AlbertSans-Medium',
  },
});

export default CreateAccount;
