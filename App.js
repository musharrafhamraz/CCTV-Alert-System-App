import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import FirebaseImage from './components/firebase';

const DetectionsScreen = () => {
  return (
    <View style={styles.container}>
    <View>
    </View>
      <Text style={styles.heading}>Detections</Text>
      <ScrollView style={styles.scrollView}>
        {/* Your scrollable content goes here */}
        <View style={styles.detectionItem}>
          <Text>Item 1</Text>
        </View>
        <View style={styles.detectionItem}>
          <Text>Item 2</Text>
        </View>
        <View style={styles.detectionItem}>
          <Text>Item 3</Text>
        </View>
        <View style={styles.detectionItem}>
          <Text>Item 1</Text>
        </View>
        <View style={styles.detectionItem}>
          <Text>Item 2</Text>
        </View>
        <View style={styles.detectionItem}>
          <Text>Item 3</Text>
        </View>
        {/* Add more items as needed */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
  },
  detectionItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default DetectionsScreen;
