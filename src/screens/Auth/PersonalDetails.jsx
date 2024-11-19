import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Back arrow icon
import { Color } from '../../Utils/Theme';
const PersonalDetails = ({ navigation }) => {
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
        <Text style={styles.title}>Personal details</Text>
        <Text style={styles.subtitle}>Input your personal details</Text>

        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="First name"
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Last name"
          />
        </View>
        <TextInput style={styles.input} placeholder="Enter email" />
        <TextInput style={styles.input} placeholder="Select gender" />
        <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>

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
    marginTop: 60,
  },
  backText: {
    fontSize: 16,
    color: '#000',
  },
  content: {
    marginTop: 40,
  },
  title: {
    fontSize: 26,
    fontFamily: 'AlbertSans-Bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    fontFamily: 'AlbertSans-Medium',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    // backgroundColor: '#FFF',
    width: '100%',
    fontFamily: 'AlbertSans-Medium',
  },
  halfInput: {
    width: '48%',
    fontFamily: 'AlbertSans-Medium',
  },
  button: {
    backgroundColor: Color.primary,
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: Color.secondary,
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
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
  },
  termsText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    fontFamily: 'AlbertSans-Medium',
  },
});

export default PersonalDetails;
