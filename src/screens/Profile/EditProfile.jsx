import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Switch,
  StatusBar,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color } from '../../Utils/Theme';

const EditProfile = ({ navigation }) => {
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'John',
    email: 'emailname@example.com',
    website: 'John',
    city: 'John',
    streetAddress: 'John',
    appSuite: 'John',
    zipCode: 'John',
    openingTime: '00:00 am',
    closingTime: '00:00 am',
  });

  const [expertVisibility, setExpertVisibility] = useState(true);
  const [weekendsInclusive, setWeekendsInclusive] = useState(false);

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F8F8F8" barStyle="dark-content" translucent={false} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit profile</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Profile Image Section */}
        <View style={styles.profileImageContainer}>
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1732326507/9d48ce83863147361d369d469dcf3993_yaemuc.jpg' }}
              style={styles.profileImage}
            />
            <View style={styles.badgeContainer}>
              <Ionicons name="checkmark-circle" size={24} color="#32CD32" />
            </View>
          </View>
        </View>

        {/* Expert Visibility Toggle */}
        <View style={styles.toggleContainer}>
          <View>
            <Text style={styles.toggleTitle}>Expert visibility</Text>
            <Text style={styles.toggleSubtitle}>Make yourself visible to clients</Text>
          </View>
          <Switch
            value={expertVisibility}
            onValueChange={setExpertVisibility}
            trackColor={{ false: '#767577', true: '#32CD32' }}
            thumbColor="#FFFFFF"
          />
        </View>

        {/* Personal Details Section */}
        <Text style={styles.sectionTitle}>Personal details</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>First name</Text>
          <TextInput
            style={styles.input}
            value={profileData.firstName}
            onChangeText={(text) => handleInputChange('firstName', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Last name</Text>
          <TextInput
            style={styles.input}
            value={profileData.lastName}
            onChangeText={(text) => handleInputChange('lastName', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={profileData.email}
            onChangeText={(text) => handleInputChange('email', text)}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Website link</Text>
          <TextInput
            style={styles.input}
            value={profileData.website}
            onChangeText={(text) => handleInputChange('website', text)}
          />
        </View>

        {/* Location Details Section */}
        <Text style={styles.sectionTitle}>Location details</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            value={profileData.city}
            onChangeText={(text) => handleInputChange('city', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Street address</Text>
          <TextInput
            style={styles.input}
            value={profileData.streetAddress}
            onChangeText={(text) => handleInputChange('streetAddress', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>App/Suite</Text>
          <TextInput
            style={styles.input}
            value={profileData.appSuite}
            onChangeText={(text) => handleInputChange('appSuite', text)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>ZIP/Postal Code</Text>
          <TextInput
            style={styles.input}
            value={profileData.zipCode}
            onChangeText={(text) => handleInputChange('zipCode', text)}
          />
        </View>

        {/* Work Times Section */}
        <Text style={styles.sectionTitle}>Work times</Text>
        <Text style={styles.subsectionTitle}>Weekdays</Text>

        <View style={styles.timeContainer}>
          <View style={styles.timeInputGroup}>
            <Text style={styles.label}>Opening time</Text>
            <TouchableOpacity style={styles.timeInput}>
              <Text>{profileData.openingTime}</Text>
              <Ionicons name="chevron-down" size={20} color="#666666" />
            </TouchableOpacity>
          </View>

          <View style={styles.timeInputGroup}>
            <Text style={styles.label}>Closing time</Text>
            <TouchableOpacity style={styles.timeInput}>
              <Text>{profileData.closingTime}</Text>
              <Ionicons name="chevron-down" size={20} color="#666666" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Weekends Toggle */}
        <View style={styles.toggleContainer}>
          <View>
            <Text style={styles.toggleTitle}>Weekends inclusive</Text>
            <Text style={styles.toggleSubtitle}>Make times applicable to weekends</Text>
          </View>
          <Switch
            value={weekendsInclusive}
            onValueChange={setWeekendsInclusive}
            trackColor={{ false: '#767577', true: '#32CD32' }}
            thumbColor="#FFFFFF"
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 17,
    fontFamily: 'AlbertSans-Bold',
    marginLeft: 10,
    color: '#333333',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  imageWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  badgeContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#F8F8F8',
    // padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  toggleTitle: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
    color: '#333333',
    marginBottom: 4,
  },
  toggleSubtitle: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    color: '#666666',
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
    color: '#333333',
    marginBottom: 16,
  },
  subsectionTitle: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#666666',
    marginBottom: 8,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    color: '#666666',
    marginBottom: 8,
  },
  input: {
    backgroundColor: Color.gray,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    fontFamily: 'AlbertSans-Regular',
    color: '#333333',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  timeInputGroup: {
    flex: 1,
    marginRight: 8,
  },
  timeInput: {
    backgroundColor: Color.gray,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    fontFamily: 'AlbertSans-Regular',
    color: '#333333',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: Color.primary,
    padding: 16,
    borderRadius: 30,
    marginVertical: 24,
  },
  saveButtonText: {
    color: Color.secondary,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
  },
});

export default EditProfile;