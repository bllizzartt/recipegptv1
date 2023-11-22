import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

const RectangleComponent = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.greenRectangle} />
      <View style={styles.rectangle} />
      <ScrollView style={styles.scrollView}>
      <View style={styles.anotherRectangle} />
      <Text style={styles.text}>Whole Foods Market</Text>
      <Text style={styles.secondaryText}>Chicken Breast 6oz</Text>
      <View style={styles.line} />
      <Text style={styles.price}>Chicken Breast 6oz</Text>
      </ScrollView>

      {/* Footer section with icons and text */}
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Image source={require('../images/home-emblem.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Home</Text>
        </View>
        {/* <View style={styles.footerItem}>
          <Image source={require('../images/salesIcon.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Sales</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={require('../images/ordersIcon.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Orders</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={require('../images/productsIcon.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Products</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={require('../images/listIcon.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>List</Text>
        </View> */}
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
    top: -700, // Start from the top
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
  anotherRectangle: {
    marginTop: 150, // Adjust the top margin by 30 units
    display: 'flex', // Flex is default in React Native, so this can be omitted
    width: 398, // width in pixels
    height: 400, // width in pixels
    paddingVertical: 54, // Top and bottom padding
    paddingHorizontal: 129, // Left and right padding (average of provided values)
    justifyContent: 'center', // Center content vertically inside the rectangle
    alignItems: 'center', // Center content horizontally inside the rectangle
    borderRadius: 2, // border radius for slightly rounded corners
    backgroundColor: '#F8F7F5', // background color
  },
  text: {
    color: '#004D35', // Text color
    fontFamily: 'SFProText', // Your font family, make sure it is included in your project
    fontSize: 16, // Font size
    fontStyle: 'normal', // Font style
    fontWeight: 'bold', // Font weight, 700 is equivalent to 'bold'
    letterSpacing: -0.32, // Letter spacing
    marginTop: 20, // Space between the rectangle and the text
    marginLeft: 20, // Adjust left margin to shift the text to the left
    alignSelf: 'flex-start', // Align text to the left side of the parent container
  },
  secondaryText: {
    color: '#000', // Text color
    fontFamily: 'SourceSerif4', // Your font family, make sure it is included in your project
    fontSize: 22.7, // Font size (rounded)
    fontStyle: 'normal', // Font style
    fontWeight: '600', // Font weight
    marginTop: 10, // Space between the "Whole Foods" text and this text
    alignSelf: 'flex-start', // Align text to the left side of the parent container
    marginLeft: 20, // Manually shift the text over to the right; adjust as needed
  },
  line: {
    width: 390, // width in pixels
    height: 1, // height in pixels, to represent the stroke width
    backgroundColor: '#D9D9D9', // stroke color
    marginTop: 10, // space between the text and the line
  },
  price: {
    color: '#2D2D2B', // Text color
    fontFamily: 'SFProText', // Your font family, make sure it is included in your project
    fontSize: 14, // Font size
    fontWeight: 'bold', // Font weight, 700 is equivalent to 'bold'
    letterSpacing: -0.14, // Letter spacing
    marginTop: 10, // Space between the line and the text
    textAlign: 'left', // Center text horizontally
    alignSelf: 'stretch', // Stretch to the parent width to allow textAlign to work
    marginLeft: 20, // Manually shift the text over to the right; adjust as needed
  },
  scrollView: {
    flex: 1, // Ensures the ScrollView takes up the available space
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 115,
    backgroundColor: '#FFF',
  },
  footerItem: {
    alignItems: 'center', // Center the icon and text vertically
  },
  footerIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  footerText: {
    color: '#000',
    fontSize: 12, // Adjust as needed
    marginTop: 5, // Space between the icon and the text
  },
  listText: {
    color: '#000', // Text color for the first rectangle
  },
  buttonText: {
    color: '#FFF', // Text color for the button
  },
});

export default RectangleComponent;
