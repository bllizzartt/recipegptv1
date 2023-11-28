import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RectangleComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.greenRectangle} />
      <View style={styles.rectangle} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.anotherRectangle}>
          {/* Image inside the rectangle */}
          <Image 
            source={require('../images/boxVector.png')} // Replace with the correct path to your image
            style={styles.innerImage}
          />
        </View>
          {/* Other elements */}
          <Text style={styles.text}>Whole Foods Market</Text>
          <Text style={styles.secondaryText}>Chicken Breast 6oz</Text>
          <View style={styles.line} />
          <Text style={styles.price}>Chicken Breast 6oz</Text>
        
      </ScrollView>
      {/* footer section */}
      <View style={styles.footer}>
        <View style={styles.bottomRectangle}>
          <Text style={styles.listText}>Add to list</Text>
        </View>
        <TouchableOpacity 
          style={styles.buttonRectangle}
          onPress={() => navigation.navigate('RecipeScreen')}
        >
          <Text style={styles.buttonText}>RecipeGPT</Text>
        </TouchableOpacity>
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
    marginTop: 150,
    width: 398, // Ensure the width is enough to contain the image
    height: 400, // Adjust the height as needed
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    backgroundColor: '#F8F7F5',
    // ... other styles ...
  },
  innerImage: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    resizeMode: 'contain', // Keep the image's aspect ratio
    marginBottom: 20, // Space between the image and the text below it
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
    position: 'absolute', // Positions the footer absolutely within the container
    bottom: 0, // Adjust this value to move the footer up. Increase to move up, decrease to move down
    width: 430,
    height: 115,
    paddingVertical: 14,
    paddingHorizontal: 17,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    alignSelf: 'center', // Centers the footer horizontally
  },
  bottomRectangle: {
    width: 395,
    paddingVertical: 7,
    paddingHorizontal: 41,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#004D35',
    borderWidth: 1,
    marginBottom: 10, // Added for spacing between the rectangles
  },
  buttonRectangle: {
    width: 395,
    paddingVertical: 7,
    paddingHorizontal: 41,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#004D35',
    borderWidth: 1,
    backgroundColor: '#004D35',
  },
  listText: {
    color: '#000', // Text color for the first rectangle
  },
  buttonText: {
    color: '#FFF', // Text color for the button
  },
});

export default RectangleComponent;
