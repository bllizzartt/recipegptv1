import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

const RectangleComponent = () => {
  const categoriesFirstRow = ['Essentials', 'Meats', 'Produce', 'Beverages'];
  const categoriesSecondRow = ['Category 5', 'Category 6', 'Category 7', 'Category 8']; // Replace with your categories

  
  return (
    <View style={styles.container}>
        <Image
        source={require('../images/wholeFoodsIcon.png')} // Update the path to your image
            style={styles.imagePlaceholder}
        />
      <View style={styles.greenRectangle} />
      <View style={styles.rectangle} />
      <View style={styles.newRectangle}>
      <Image
          source={require('../images/boxVector.png')} // Path to your converted SVG image
          style={styles.svgImage}
        />
        <Text style={styles.shippingText}>Shipping to</Text>
        <Text style={styles.locationText}>New York, 10001</Text>
        <Text style={styles.category}>Shop By Category</Text>
      </View>
      <View style={styles.buttonContainer}>
          {categoriesFirstRow.map((item, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
            <Image
                source={require(`../images/boxVector.png`)} // Update path to your images
                style={styles.buttonImage}
              />
            <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.buttonContainer2}>
          {categoriesSecondRow.map((item, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Image
                source={require(`../images/boxVector.png`)} // Update path to your images
                style={styles.buttonImage}
              />
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
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
  newRectangle: {
    width: 430,
    height: 63,
    flexShrink: 0,
    backgroundColor: '#F8F7F5',
    position: 'absolute',
    top: 200, // Adjust this value to position the rectangle correctly
    left: 0, // Adjust this value to position the rectangle correctly
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginTop: 200,
  },
  buttonContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginTop: 100,
  },
  categoryButton: {
    alignItems: 'center',
  },
  buttonImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  buttonText: {
    marginTop: 5,
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
});

export default RectangleComponent;
