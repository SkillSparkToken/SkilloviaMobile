import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { launchImageLibrary } from 'react-native-image-picker';
import { Color } from '../../../Utils/Theme';

const BookServiceForm = ({navigation}) => {
  const [title, setTitle] = useState('Dog Walking');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [image, setImage] = useState(null);

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    });
  };

  const handleImagePick = async () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    try {
      const result = await launchImageLibrary(options);
      if (result.assets && result.assets[0]) {
        setImage(result.assets[0]);
      }
    } catch (error) {
      console.log('Image picker error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#F6FCEB"
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
              <Icon name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Book service</Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            {/* Title */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Title</Text>
              <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Enter title"
              />
            </View>

            {/* Description */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Description</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={description}
                onChangeText={setDescription}
                placeholder="I want you to walk my dog for a few hours, he's a German Shepard and loves treats."
                multiline={true}
                numberOfLines={4}
              />
            </View>

            {/* Date */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Date</Text>
              <TouchableOpacity 
                style={styles.dateInput}
                onPress={() => setShowDatePicker(true)}
              >
                <Icon name="calendar-outline" size={20} color="#666" />
                <Text style={styles.dateText}>
                  {formatDate(date)}
                </Text>
              </TouchableOpacity>
              {showDatePicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  onChange={onDateChange}
                  minimumDate={new Date()}
                />
              )}
            </View>

            {/* Upload Image */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Upload image</Text>
              <TouchableOpacity 
                style={[
                  styles.uploadButton,
                  image && styles.uploadButtonWithImage
                ]}
                onPress={handleImagePick}
              >
                {image ? (
                  <Image
                    source={{ uri: image.uri }}
                    style={styles.uploadedImage}
                  />
                ) : (
                  <>
                    <Icon name="cloud-upload-outline" size={24} color="#666" />
                    <Text style={styles.uploadText}>Click to upload image</Text>
                    <Text style={styles.uploadSubtext}>SVG, PNG, or JPG</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Next Button */}
          <TouchableOpacity onPress={() => navigation.navigate("summarypage")} style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    paddingTop:30
  },
  safeArea: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 16,
  },
  headerTitle: {
    fontFamily: 'AlbertSans-Medium',
    fontSize: 16,
  },
  form: {
    padding: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontFamily: 'AlbertSans-Medium',
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    fontFamily: 'AlbertSans-Regular',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor:Color.gray,
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
  },
  textArea: {
    height: 100,
    backgroundColor:Color.gray,
    textAlignVertical: 'top',
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    padding: 12,
    backgroundColor:Color.gray,
    gap: 8,
  },
  dateText: {
    fontFamily: 'AlbertSans-Regular',
    fontSize: 14,
  },
  uploadButton: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    backgroundColor:Color.gray,
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
  },
  uploadButtonWithImage: {
    padding: 0,
    overflow: 'hidden',
  },
  uploadText: {
    fontFamily: 'AlbertSans-Medium',
    fontSize: 14,
    marginTop: 8,
  },
  uploadSubtext: {
    fontFamily: 'AlbertSans-Regular',
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  nextButton: {
    backgroundColor:Color.primary,
    margin: 16,
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  nextButtonText: {
    fontFamily: 'AlbertSans-Bold',
    fontSize: 16,
    color: '#000',
  },
});

export default BookServiceForm;