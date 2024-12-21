import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BookingCard from '../BookingCard';
import { Color } from '../../../Utils/Theme';
import OrderCompletionSheet from '../OrderCompletion';




const BookingProgress = ({navigation}) => {

  const [isVisible, setIsVisible] = useState(false);
  const handleOpenSheet = () => {
    setIsVisible(true);
  }

// Then in your render:


  const bookingSteps = [
    {
      title: 'Service completed',
      date: 'April 19, 2012 3:30 PM',
      status: 'empty',
    },
    {
      title: 'Service in progress',
      date: 'March 11, 2016 11:03 PM',
      status: 'empty',
    },
    {
      title: 'Booking request confirmed',
      date: 'November 19, 2012 4:50 AM',
      status: 'completed',
    },
    {
      title: 'Booking request sent',
      date: 'November 19, 2012 4:50 AM',
      status: 'completed',
    },
    {
      title: 'Payment confirmed',
      date: 'November 19, 2012 4:50 AM',
      status: 'completed',
    },
  ];

  const renderStepIcon = (status) => {
    switch (status) {
      case 'completed':
        return (
          <View style={styles.completedDot}>
            <Icon name="check-circle" size={24} color="#1A4D00" />
          </View>
        );
      case 'empty':
      default:
        return (
          <View style={styles.emptyDot}>
            <View style={styles.innerCircle} />
          </View>
        );
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>

          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Booking Progress</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.shareText}>Share details</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bookingCard}>
      <BookingCard />
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressTitle}>Progress</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('outwardDetails')}>
              <Text style={styles.viewDetailsText}>View Details</Text>
            </TouchableOpacity>
          </View>

          {bookingSteps.map((step, index) => (
            <View key={index} style={styles.stepContainer}>
              <View style={styles.stepIndicator}>
                {renderStepIcon(step.status)}
                {index !== bookingSteps.length - 1 && (
                  <View style={[
                    styles.line,
                    step.status === 'completed' ? styles.completedLine : styles.emptyLine
                  ]} />
                )}
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>{step.title}</Text>
                <Text style={styles.stepDate}>{step.date}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleOpenSheet} style={styles.confirmButton}>
            <Text style={styles.confirmButtonText}>Confirm completion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.disputeButton}>
            <Text style={styles.disputeButtonText}>Open dispute</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <OrderCompletionSheet
  visible={isVisible}
  onClose={() => setIsVisible(false)}
/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,

  },
  headerTitle: {
    fontFamily: 'AlbertSans-Medium',

    fontSize: 18,
    marginHorizontal: 16,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  
  },
  shareText: {
    color: Color.secondary,
    fontFamily: 'AlbertSans-Bold',
  },


  bookingCard: {
    // margin: 16,
    padding: 16,


  },
  bookingIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  bookingDescription: {
    fontFamily: 'AlbertSans-Regular',
    marginTop: 8,
    color: '#666666',
  },
  activeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  dateText: {
    fontFamily: 'AlbertSans-Regular',
    color: '#666666',
    fontSize: 12,
  },
  activeTag: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  activeText: {
    color: '#4CAF50',
    fontFamily: 'AlbertSans-Medium',
    fontSize: 12,
  },
  progressContainer: {
    flex: 1,
    padding: 16,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressTitle: {
    fontFamily: 'AlbertSans-Bold',
    fontSize: 16,
  },
  viewDetailsText: {
    color: Color.secondary,
    fontFamily: 'AlbertSans-Bold',
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  stepIndicator: {
    alignItems: 'center',
    marginRight: 12,
  },
  completedDot: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  emptyDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#EEEEEE',
  },
  line: {
    width: 2,
    height: 40,
    marginTop: 4,
  },
  completedLine: {
    backgroundColor: Color.secondary,
  },
  emptyLine: {
    backgroundColor: '#EEEEEE',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontFamily: 'AlbertSans-Medium',
    color: '#333333',
  },
  stepDate: {
    fontFamily: 'AlbertSans-Regular',
    color: '#666666',
    fontSize: 12,
    marginTop: 4,
  },
  buttonContainer: {
    padding: 16,
  },
  confirmButton: {
    backgroundColor: Color.primary,
    borderRadius: 50,
    padding: 16,
    alignItems: 'center',
    marginBottom: 8,
  },
  confirmButtonText: {
    color: Color.secondary,
    fontFamily: 'AlbertSans-Bold',
    fontSize: 16,
  },
  disputeButton: {
    backgroundColor: '#FFEBEE',
    borderRadius: 50,
    padding: 16,
    alignItems: 'center',
  },
  disputeButtonText: {
    color: '#F44336',
    fontFamily: 'AlbertSans-Bold',
    fontSize: 16,
  },
});

export default BookingProgress;