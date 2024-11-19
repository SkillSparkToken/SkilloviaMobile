import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Status Bar visible but transparent */}
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
      {/* Static Background Image */}
      <ImageBackground
        source={{
          uri: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1732032776/212760ab183179b3b25c4e05722b52ed_rvwdpf.jpg',
        }}
        style={styles.backgroundImage}
      >
        {/* Overlay Content */}
        <View style={styles.overlay}>
          <Text style={styles.title}>Get some shit {'\n'} done!</Text>

          {/* Social Login Buttons */}
          <TouchableOpacity style={[styles.socialButton, styles.facebook]}>
            <Icon name="facebook" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.socialText}>Continue with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialButton, styles.google]}>
            <Icon name="google" size={20} color="#DB4437" style={styles.icon} />
            <Text style={[styles.socialText, styles.googleText]}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.socialButton, styles.apple]}>
            <Icon name="apple" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.socialText}>Continue with Apple</Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <Text style={styles.orText}>or</Text>
          </View>

          {/* Create Account Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('signup')}
            style={styles.createAccountButton}
          >
            <Text style={styles.createAccountText}>Create an account</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Already have an account?{' '}
            <Text
              style={styles.loginText}
              onPress={() => navigation.navigate('login')}
            >
              Log in
            </Text>
          </Text>

          <Text style={styles.termsText}>
            By continuing to use Skillovia, you agree to our Terms of Service and
            Privacy Policy
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
  },
  title: {
    fontSize: 38,
   
    color: '#fff',
    width:"100%",
   
    marginBottom: 20,
    fontFamily: 'AlbertSans-Bold', 
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 25,
  },
  facebook: {
    backgroundColor: '#1877F2',
  },
  google: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  apple: {
    backgroundColor: '#000',
  },
  socialText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 10,
    fontFamily: 'AlbertSans-Medium',
  },
  googleText: {
    color: '#DB4437',
  },
  icon: {
    marginRight: 10,
  },
  divider: {
    marginVertical: 20,
  },
  orText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'AlbertSans-Light',
  },
  createAccountButton: {
    backgroundColor: '#32CD32',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 15,
    alignItems: 'center',
      fontFamily: 'AlbertSans-Medium',
  },
  createAccountText: {
    fontSize: 16,
    color: '#fff',
    
    fontFamily: 'AlbertSans-Bold',
  },
  footerText: {
    fontSize: 15,
    color: '#fff',
    marginTop: 20,
    width:"100%",

    fontFamily: 'AlbertSans-Regular',
  },
  loginText: {
  
    textDecorationLine: 'underline',
    fontFamily: 'AlbertSans-Medium',
  },
  termsText: {
    fontSize: 12,
    color: '#fff',
  
    marginTop: 10,
    fontFamily: 'AlbertSans-Light',
  },
});

export default Onboarding;
