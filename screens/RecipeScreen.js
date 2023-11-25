import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { PixelRatio } from 'react-native';

const pixelWidth = PixelRatio.getPixelSizeForLayoutSize(398);
const pixelHeight = PixelRatio.getPixelSizeForLayoutSize(121);

const SimplePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenRectangle}>
        <Text style={styles.centeredText}>Recipe GPT</Text>
      </View>
      
      {/* Footer section with evenly spaced images */}
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Image source={require('../images/homeIcon.png')} style={styles.footerIcon} />
        </View>
        <View style={styles.footerItem}>
          <Image source={require('../images/salesIcon.png')} style={styles.footerIcon} />
        </View>
        <View style={styles.footerItem}>
          <Image source={require('../images/orderIcon.png')} style={styles.footerIcon} />
        </View>
        <View style={styles.footerItem}>
          <Image source={require('../images/productsIcon.png')} style={styles.footerIcon} />
        </View>
        <View style={styles.footerItem}>
          <Image source={require('../images/listIcon.png')} style={styles.footerIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  greenRectangle: {
    width: '110%', 
    height: '100%',
    backgroundColor: '#004D35',
    position: 'absolute',
    top: -800,
    zIndex: -1, 
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  // Header Text
  centeredText: {
    position: 'absolute', // Position the text absolutely within the greenRectangle
    bottom: 20, // Align the text at the bottom of the greenRectangle
    color: '#FFF', // White color for the text
    fontSize: 20,
    alignSelf: 'center', // Center the text horizontally
  },
  firstBox: {
    marginTop: 125,
    zIndex: 2,
    paddingVertical: 20, 
    paddingHorizontal: 10, 
    alignItems: 'flex-start', // This ensures all children align to the left
  },
  roundedBox: {
    marginTop: 20,
    width: '95%',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAF5EB',
    zIndex: 2, 
  },
  // Box 1: Grocery pick up & delivery
  firstBoxText: {
    color: '#2D2D2B',
    textAlign: 'center',
    fontFamily: 'SFProText', // Ensure this font is included in your project
    fontSize: 13,
    fontWeight: 'bold', // fontWeight 'bold' is typically 700
    letterSpacing: 0.13, // Letter spacing in React Native is in pixels
    marginBottom: 10, // Add some space below the text
  },
  // Box 1: Exclusive for prime members text
  primeText: {
    color: '#2D2D2B',
    fontFamily: 'SFProText',
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 0.11,
    width: 180,
    textAlign: 'center',
    marginBottom: 10,
  },
  // Box 1: Shop on Amazon
  amazonText: {
    color: '#006F46', // Green color for the text
    fontFamily: 'SFProText', // Ensure this font is included in your project
    fontSize: 14,
    fontWeight: 'bold', // React Native supports 'normal' and 'bold'
    textAlign: 'center', // Center the text
    marginTop: 10, // Spacing above the text, adjust as needed
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  textBox: {
    flex: 1, // Allows the text box to grow and push the image to the right
  },
  // Box 1: image
  boxImage: {
    width: 140, // Adjust the width as needed
    height: 140, // Adjust the height as needed
    resizeMode: 'contain',
    position: 'absolute', // Position the image absolutely
    right: 0, // Distance from the right edge of the firstBox
    top: -7, // Adjust this value to move the image upwards
  },
  secondBox: {
    marginTop: 25,
    zIndex: 2,
    paddingVertical: 20, 
    paddingHorizontal: 10, 
    alignItems: 'flex-start', // This ensures all children align to the left
  },
  thirdBox: {
    marginTop: 25,
    zIndex: 2,
    paddingVertical: 20, 
    paddingHorizontal: 10, 
    alignItems: 'flex-start', // This ensures all children align to the left
  },
  fourthBox: {
    marginTop: 25,
    zIndex: 2,
    paddingVertical: 20, 
    paddingHorizontal: 10, 
    alignItems: 'flex-start', // This ensures all children align to the left
  },


  // Footer section
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 115,
    backgroundColor: '#FFF',
  },
  footerItem: {
    flex: 1, // Each item takes equal space
    alignItems: 'center', // Center the icon horizontally
  },
  footerIcon: {
    width: 70, // Adjust the size as needed
    height: 70, // Adjust the size as needed
    resizeMode: 'contain',
  },
  // ... other styles remain the same
});

export default SimplePage;
