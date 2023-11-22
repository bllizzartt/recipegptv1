import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { PixelRatio } from 'react-native';

const pixelWidth = PixelRatio.getPixelSizeForLayoutSize(398);
const pixelHeight = PixelRatio.getPixelSizeForLayoutSize(121);

const SimplePage = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.roundedBox, styles.firstBox]}>
        <Text style={styles.text}>Content for Box 1</Text>
      </View>
      <View style={styles.roundedBox}>
        <Text style={styles.text}>Content for Box 2</Text>
      </View>
      <View style={styles.roundedBox}>
        <Text style={styles.text}>Content for Box 3</Text>
      </View>
      <View style={styles.roundedBox}>
        <Text style={styles.text}>Content for Box 4</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align content to the top
    alignItems: 'center',
    padding: 10, // Container padding for even margins on all sides
    backgroundColor: '#fff', // Background color for the screen
  },
  firstBox: {
    marginTop: 100, // Additional top margin for the first box only
  },
  roundedBox: {
    marginTop: 20, // Adjust the top margin by 30 units
    width: '95%', // Adjust width as needed
    borderWidth: 2,
    borderColor: '#000', // Border color for the rounded box
    borderRadius: 10, // Border radius for rounded corners
    padding: 50, // Padding inside the box
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#FAF5EB', // Background color for the box
  },
  text: {
    fontSize: 16,
    color: '#333', // Text color
  },
  // ... other styles remain the same
});

export default SimplePage;

