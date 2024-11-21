import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color } from '../../Utils/Theme';
import SearchBar from './Search';
import VerifyEmail from '../Auth/VerifyEmail';

const Home = () => {
  const [showActivateModal, setShowActivateModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleActivateAccount = () => {
    setShowActivateModal(true);
  };

  const handleCompleteProfile = () => {
    setShowProfileModal(true);
  };

  const services = [
    { id: '1', title: 'DIY', image: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Baby sitting', image: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Arts & Crafts', image: 'https://via.placeholder.com/150' },
  ];

  const renderService = ({ item }) => (
    <View style={styles.serviceCard}>
      <Image source={{ uri: item.image }} style={styles.serviceImage} />
      <Text style={styles.serviceTitle}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={[styles.safeArea, { paddingTop: StatusBar.currentHeight }]}>
      <StatusBar translucent={true} barStyle="dark-content" hidden={false} />
      <View style={styles.container}>
        <SearchBar />

        {/* Activate Account Card */}
        <TouchableOpacity
          style={[styles.card, { backgroundColor: '#246868' }]}
          onPress={handleActivateAccount}
        >
          <Text style={styles.cardTitle}>Please verify your email</Text>
          <Text style={styles.cardDescription}>
            We sent a confirmation email to example@gmail.com, please visit your email to review
            and activate your account
          </Text>
          <Text style={styles.cardAction}>Activate your account ▶</Text>
        </TouchableOpacity>

        {/* Complete Profile Card */}
        <TouchableOpacity
          style={[styles.card2, { backgroundColor: '#8FF15F' }]}
          onPress={handleCompleteProfile}
        >
          <Text style={styles.cardTitle2}>Complete your profile</Text>
          <Text style={styles.cardDescription2}>
            Add your skills and interests, set your availability time and find clients.
          </Text>
          <Text style={styles.cardAction2}>Complete profile ▶</Text>
        </TouchableOpacity>

        {/* Services Section */}
        <Text style={styles.sectionTitle}>Explore services</Text>
        <FlatList
          data={services}
          horizontal
          renderItem={renderService}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.serviceList}
        />

        {/* Activate Account Modal */}
      {/* Activate Account Modal */}
<Modal visible={showActivateModal} transparent={true} animationType="slide">
  <View style={styles.modalContainer}>
    <VerifyEmail onClose={() => setShowActivateModal(false)} />
  </View>
</Modal>

        {/* Complete Profile Modal */}
        <Modal visible={showProfileModal} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Complete Profile</Text>
            <Text style={styles.modalDescription}>
              Add your skills, set your availability, and update your profile to find clients.
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowProfileModal(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Color.background,
  },
  container: {
    flex: 1,
    backgroundColor: Color.background,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Medium',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 12,
    fontFamily: 'AlbertSans-Light',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  cardAction: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#FFFFFF',
  },
  card2: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  cardTitle2: {
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
    color: Color.secondary,
    marginBottom: 5,
  },
  cardDescription2: {
    fontSize: 12,
    fontFamily: 'AlbertSans-Regular',
    color: Color.secondary,
    marginBottom: 20,
  },
  cardAction2: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: Color.secondary,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'AlbertSans-Bold',
    color: '#000',
    marginVertical: 15,
  },
  serviceList: {
    paddingVertical: 10,
  },
  serviceCard: {
    marginRight: 10,
    width: 100,
    alignItems: 'center',
  },
  serviceImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 5,
  },
  serviceTitle: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    color: '#000',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(10, 0, 0, 0.5)',
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'AlbertSans-Bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Regular',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#000',
  },
});

export default Home;
