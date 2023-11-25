import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

const RectangleComponent = () => {
  const imageTextPairs = [
    { image: require('../images/boxVector.png'), text: 'Cheick Breast 6oz' },
    { image: require('../images/boxVector.png'), text: 'Item 2' },
    // ... Add more pairs as needed
  ];



  
  return (
    <View style={styles.container}>
        <Image
        source={require('../images/wholeFoodsIcon.png')} // Update the path to your image
            style={styles.imagePlaceholder}
        />
      <View style={styles.greenRectangle} />
      <View style={styles.rectangle} />
      <Text style={styles.browseCategoriesText}>Browse categories</Text>
      <View style={styles.lineUnderText} />
      <Text style={styles.meatText}>Meat</Text>

      {/* New Horizontal list with image-text pairs */}
      <View style={styles.horizontalList}>
        {imageTextPairs.map((pair, index) => (
          <View key={index} style={styles.imageTextContainer}>
            <Image 
              source={pair.image} 
              style={styles.listImage} 
            />
            <Text style={styles.listItemText}>
              {pair.text}
            </Text>
          </View>
        ))}
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
  browseCategoriesText: {
    color: '#004D35',
    textAlign: 'center',
    fontFamily: 'SFProText',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 18, // React Native requires a numeric value for line-height
    letterSpacing: -0.32,
    position: 'absolute',
    top: 230, // Adjust this value to position the text correctly
    alignSelf: 'flex-start', // Center the text horizontally in the container
    marginLeft: 40, // Adjust as needed to space it from the SVG
  },
  lineUnderText: {
    width: 351,
    height: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#004D35',
    position: 'absolute',
    top: 275, // Calculate and adjust this value
    alignSelf: 'center', // Or use 'left' and 'left' property for positioning
  },
  meatText: {
    color: '#000',
    textAlign: 'center',
    // fontFamily: 'Source Serif 4', // Uncomment this if the font is added to your project
    fontSize: 22.698,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24, // Adjust as needed
    top: 100, // Adjust this value to position the rectangle correctly
    left: -150, // Adjust this value to position the rectangle correctly
    zIndex: 1, // Ensure it's layered correctly
  },
  svgImage: {
    width: 25, // Adjusted width
    height: 25, // Adjusted height
    top: 20, // Adjust this value to position the rectangle correctly
    left: 20, // Adjust this value to position the rectangle correctly
    zIndex: 1, // Ensure it's layered correctly
  },
  shippingText: {
    color: '#575757',
    fontFamily: 'SFProText',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 14,
    letterSpacing: -0.48,
    textAlign: 'left', // Aligns text to the left
    marginLeft: 50, // Adjust as needed to space it from the SVG
  },
  locationText: {
    color: '#2D2D2B',
    textAlign: 'center',
    fontFamily: 'SFProText',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16, // React Native requires numeric line height
    letterSpacing: -0.56,
    textAlign: 'left', // Aligns text to the left
    marginLeft: 50, // Adjust as needed to space it from the SVG
  },
  category: {
    color: '#000',
    textAlign: 'center',
    // fontFamily: 'Source Serif 4', // Uncomment this if the font is added to your project
    fontSize: 22.698,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24, // Adjust as needed
    top: 30, // Adjust this value to position the rectangle correctly
    left: -100, // Adjust this value to position the rectangle correctly
    zIndex: 1, // Ensure it's layered correctly
  },
  horizontalList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginTop: 150,
  },
  imageTextContainer: {
    alignItems: 'center', // Center align the items in the vertical stack
  },
  listImage: {
    width: 50, // Adjust as needed
    height: 50, // Adjust as needed
    resizeMode: 'contain',
  },
  listItemText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center', // Center the text below the image
    marginTop: 5, // Space between the image and text, adjust as needed
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
  meatSelector: {
    
  }
});

export default RectangleComponent;
