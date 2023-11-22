import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

const RectangleComponent = () => {
  
  return (
    <View style={styles.container}>
        <Image
        source={require('../images/wholeFoodsIcon.png')} // Update the path to your image
            style={styles.imagePlaceholder}
        />
      <View style={styles.greenRectangle} />
      <View style={styles.rectangle} />
      <ScrollView style={styles.scrollView}>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#EFEFEF', // Optional background color for the container
  },
  greenRectangle: {
    width: '100%', // Full width of the screen/container
    height: '100%', // Full height of the screen/container
    backgroundColor: '#004D35', // green background color
    position: 'absolute', // Position absolutely to ensure layering
    top: -725, // Start from the top
    zIndex: 1, // ensures it's above the scroll content
  },
  rectangle: {
    marginTop: 150, // Adjust the top margin by 30 units
    width: 398, // width in pixels
    height: 42, // height in pixels
    borderRadius: 45, // border radius to make the corners rounded
    backgroundColor: '#FFF', // white background color
    // Removed marginTop to start the rectangle at the top
    zIndex: 1,
  },
  scrollView: {
    flex: 1, // Ensures the ScrollView takes up the available space
  },
  imagePlaceholder: {
    width: 200,
    height: 100,
    flexShrink: 0,
    backgroundColor: '#004D35',
    position: 'absolute',
    top: 10, // Adjust this value as needed
    left: 100, // Adjust this value as needed
    resizeMode: 'cover',
    zIndex: 2, // Higher zIndex to be on top of greenRectangle
  },
});

export default RectangleComponent;
