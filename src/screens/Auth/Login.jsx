import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For the back arrow icon

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Welcome back!</Text>

      {/* Email Input */}
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="john@example.com"
        placeholderTextColor="#999"
        keyboardType="email-address"
      />

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="********"
        placeholderTextColor="#999"
        secureTextEntry={true}
      />

      {/* Forgot Password */}
      <TouchableOpacity onPress={() => navigation.navigate('forgotpsw')}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>

      {/* Sign-Up Link */}
      <Text style={styles.footerText}>
        Don’t have an account?{' '}
        <Text style={styles.signupText} onPress={() => navigation.navigate('signup')}>
          Sign up
        </Text>
      </Text>

      {/* Terms and Privacy */}
      <Text style={styles.termsText}>
        By continuing to use Skillovia, you agree to our{' '}
        <Text style={styles.linkText}>Terms of Service</Text> and{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>.
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
    fontSize: 28,
    fontFamily: 'AlbertSans-Medium',
    color: '#000',
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
    marginBottom: 20,
  },
  forgotPassword: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#1877F2',
    textAlign: 'right',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#32CD32',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
    color: '#fff',
  },
  footerText: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  signupText: {
    fontFamily: 'AlbertSans-Bold',
    color: '#1877F2',
  },
  termsText: {
    fontSize: 12,
    fontFamily: 'AlbertSans-Medium',
    color: '#666',
    textAlign: 'center',
  },
  linkText: {
    fontFamily: 'AlbertSans-Bold',
    color: '#1877F2',
  },
});

export default LoginScreen;
