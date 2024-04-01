import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/storage';

const FirebaseImage = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // Reference to the image in Firebase Storage
    const storageRef = firebase.storage().ref().child(ImageData);

    // Get the data object for the image
    storageRef.get().then((snapshot) => {
      setImageData(snapshot);
      console.log(snapshot.val)
    }).catch((error) => {
      console.error('Error getting image data:', error);
    });
  }, []);

  return (
    <View style={styles.container}>
      {imageData && <Image source={{ uri: imageData.uri }} style={styles.image} />}
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
