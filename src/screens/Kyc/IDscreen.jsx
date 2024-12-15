import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color } from '../../Utils/Theme';

const IDscreen = ({navigation}) => {
  const [idType, setIdType] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const idOptions = ['Residence permit', 'Driving license', 'International passport'];

  const handleSelectIdType = (option) => {
    setIdType(option);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity style={styles.header} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back-outline" size={24} color="#000" />
        <Text style={styles.headerText}>Identification</Text>
      </TouchableOpacity>

      {/* ID Type Dropdown */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>ID Type</Text>
        <TouchableOpacity
          style={styles.dropdown}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.dropdownText}>{idType || 'Select option'}</Text>
          <Icon name="chevron-down-outline" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Upload ID Image */}
      <View style={styles.uploadWrapper}>
        <Text style={styles.label}>Upload ID image</Text>
        <TouchableOpacity style={styles.uploadBox}>
          <Icon name="cloud-upload-outline" size={40} color="#ccc" />
          <Text style={styles.uploadText}>Click to upload image</Text>
          <Text style={styles.fileHint}>SVG, PNG, or JPG</Text>
        </TouchableOpacity>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>

      {/* Modal for Selecting ID Type */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Close Button */}
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setModalVisible(false)}
            >
              <Icon name="close-outline" size={24} color="#000" />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Select option</Text>
            {idOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.modalOption}
                onPress={() => handleSelectIdType(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
                <View
                  style={[
                    styles.radioCircle,
                    idType === option && styles.radioCircleSelected,
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default IDscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 30,
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'AlbertSans-Bold',
    marginLeft: 10,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
    fontFamily: 'AlbertSans-Medium',
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    backgroundColor: Color.gray,
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'AlbertSans-Medium',
  },
  uploadWrapper: {
    marginBottom: 20,
  },
  uploadBox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 30,
    backgroundColor: Color.gray,
  },
  uploadText: {
    marginTop: 10,
    fontSize: 14,
    color: '#aaa',
    fontFamily: 'AlbertSans-Medium',
  },
  fileHint: {
    fontSize: 12,
    color: '#ccc',
  },
  submitButton: {
    backgroundColor: Color.primary,
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
  },
  submitText: {
    color: Color.secondary,
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: Color.background,
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  modalClose: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'AlbertSans-Bold',
    marginBottom: 20,
    
  },
  modalOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'AlbertSans-Medium',
  },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioCircleSelected: {
    borderColor: '#32CD32',
    backgroundColor: '#32CD32',
  },
});
