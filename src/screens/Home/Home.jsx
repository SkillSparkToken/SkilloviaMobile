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
  ScrollView ,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color } from '../../Utils/Theme';
import SearchBar from './Search';
import VerifyEmail from '../Auth/VerifyEmail';

const Home = ({navigation}) => {
  const [showActivateModal, setShowActivateModal] = useState(false);


  const handleActivateAccount = () => {
    setShowActivateModal(true);
  };



  const peopleList = [
    {
      id: '1',
      name: 'Alex Johnson',
      avatar: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1733889871/1bbed8f28e0d4ba2f5d0cb1ee0dce7b9_cswcnb.jpg',
    },
    {
      id: '2',
      name: 'Emily Davis',
      avatar: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1733889731/Image_3_zolw3e.png',
    },
    {
      id: '3',
      name: 'Michael Smith',
      avatar: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1733889808/4dc9bd46c368749f14855e5ffd902e12_wrgm6w.jpg',
    },
  ];
  

  const services = [
    { id: '1', title: 'DIY', image: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1732441112/Image_1_byedwn.png' },
    { id: '2', title: 'Baby sitting', image: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1732441115/Image_sfljtt.png' },
    { id: '3', title: 'Arts & Crafts', image: 'https://res.cloudinary.com/dmhvsyzch/image/upload/v1732441108/Image_2_dnlbzw.png' },
  ];

  const renderPerson = ({ item }) => (
    <Pressable onPress={() => navigation.navigate("peopleProfile")} style={styles.personContainer}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: item.avatar }}
          style={styles.avatar}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.name}>{item.name}</Text>
    </Pressable>
  );

  const renderService = ({ item }) => (
    <Pressable onPress={()=> navigation.navigate("explore")}>

    <View style={styles.serviceCard}>
      <Image source={{ uri: item.image }} style={styles.serviceImage} />
      <Text style={styles.serviceTitle}>{item.title}</Text>
    </View>
    </Pressable>
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
            We sent a confirmation email to user@gmail.com, please visit your email to review
            and activate your account
          </Text>
          <Text style={styles.cardAction}>Activate your account ▶</Text>
        </TouchableOpacity>

        {/* Complete Profile Card */}
        <TouchableOpacity
          style={[styles.card2, { backgroundColor: '#8FF15F' }]}
          onPress={()=> navigation.navigate("Profile")}
        >
          <Text style={styles.cardTitle2}>Complete your profile</Text>
          <Text style={styles.cardDescription2}>
            Add your skills and interests, set your availability time and find clients.
          </Text>
          <Text style={styles.cardAction2}>Complete profile ▶</Text>
        </TouchableOpacity>

        {/* Services Section */}

        <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >     


<View>


<View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>Explore services</Text>
      <TouchableOpacity onPress={()=> navigation.navigate("explore")} style={styles.viewMoreContainer}>
        <Text style={styles.viewMoreText}>View More</Text>
        <Icon name="chevron-forward" size={20} color="#555" style={styles.icon} />
      </TouchableOpacity>
    </View>


<FlatList
  data={services}
  horizontal
  renderItem={renderService}
  keyExtractor={(item) => item.id}
  contentContainerStyle={[styles.serviceList, { paddingBottom: 1 }]}
  />

  </View>

 <View style={styles.peopleCon}>

 <Text style={styles.header}>People nearby</Text>
      <FlatList
        data={peopleList}
        renderItem={renderPerson}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
    
      />
 </View>



  </ScrollView>

      {/* Activate Account Modal */}
<Modal visible={showActivateModal} transparent={true} animationType="slide">
  <View style={styles.modalContainer}>
    
    <VerifyEmail onClose={() => setShowActivateModal(false)} />
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

  scrollView: {
    // flex: 1,
  },
  scrollViewContent: {
    // flexGrow: 1,
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
    color: Color.secondary,
    marginVertical: 15,
  },
 


  serviceList: {
    // paddingVertical: 10,
  },
  serviceCard: {
    marginRight: 10,
    width: 140, // Increased width
    alignItems: 'center',
  },
  serviceImage: {
    width: 135, 
    height: 130, 
    borderRadius: 10,
    marginBottom: 5,
  },
  serviceTitle: {
    fontSize: 16, // Slightly larger font size
    fontFamily: 'AlbertSans-Regular',
    color: '#000',
    textAlign:"left"
  },

 
  modalContainer: {
    flex: 1,

 
  },




  peopleCon: {
    paddingVertical:20

  },


  header: {
    fontSize: 20,
    fontFamily: 'AlbertSans-Medium',
    marginBottom: 16,
    color: Color.secondary
    
  },
  personContainer: {
    alignItems: 'center',
    marginRight: 16,
  
    width: 140,
  },
  avatarContainer: {
 
    width: 135, 
    height: 130, 
    borderRadius: "50%",
    overflow: 'hidden',
    // marginBottom: 8,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 16,
    marginTop:10,
    textAlign: 'center',
    fontFamily: 'AlbertSans-Medium',
    color: Color.secondary
  },
  

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
  },
  view: {
    fontSize: 18,
    fontFamily: 'AlbertSans-Bold',
    color: '#333',
  },
  viewMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewMoreText: {
    fontSize: 14,
    fontFamily: 'AlbertSans-Medium',
    color: '#555',
 
  },
  icon: {
    marginLeft: 2,
    color: Color.secondary
  },
 

});

export default Home;
