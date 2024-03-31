import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/storage';

const FirebaseImage = ({ imageName }) => {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    // Initialize Firebase if not already initialized
    if (!firebase.apps.length) {
      firebase.initializeApp({
        // Add your Firebase config here
        apiKey: "AIzaSyAKxtVvABDyKusllWFQIQqRbKqkvkp063s",
        authDomain: "cctv-security-system.firebaseapp.com",
        projectId: "cctv-security-system",
        storageBucket: "cctv-security-system.appspot.com",
        messagingSenderId: "606255301184",
        appId: "1:606255301184:web:118b926d197b58feea95a5",
        measurementId: "G-9HH0NJY7N0",
        serviceAccount: "cctv-security-system-firebase-adminsdk-h91tv-8bdd8dece7.json",
        databaseURL: "https://cctv-security-system-default-rtdb.asia-southeast1.firebasedatabase.app/"
      });
    }

    // Reference to the image in Firebase Storage
    const storageRef = firebase.storage().ref().child(imageName);

    // Get the download URL for the image
    storageRef.getDownloadURL().then((url) => {
      setImageURL(url);
    }).catch((error) => {
      console.error('Error getting download URL:', error);
    });
  }, [imageName]);

  return (
    <View style={styles.container}>
      {imageURL && <Image source={{ uri: imageURL }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});

export default FirebaseImage;