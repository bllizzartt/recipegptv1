import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { PixelRatio } from 'react-native';
import axios from 'axios'; // Make sure to install axios or your preferred HTTP client
// import { useNavigation } from '@react-navigation/native';


const pixelWidth = PixelRatio.getPixelSizeForLayoutSize(398);
const pixelHeight = PixelRatio.getPixelSizeForLayoutSize(121);

const SimplePage = () => {
  // // const navigation = useNavigation();
  // const [recipe, setRecipe] = useState('');



  // useEffect(() => {
  //   (async function fetchRecipe(){
  //     try {
  //       const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
  //         prompt: "what is a food I can make with chicken breast?",
  //         max_tokens: 50,
  //         temperature: 0.1,
  //         // model: "gpt-3.5-turbo-1106",
          
  //       }, {
  //         headers: {
  //           'Authorization': `Bearer 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`,
  //           // 'Content-Type': 'application/json'
  //         }
  //       });
  //       console.log(response)
  
  //       if (response.data && response.data.choices && response.data.choices.length > 0) {
  //         const recipeText = response.data.choices[0].text.trim();
  //         setRecipe(recipeText);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching recipe:", error);
  //       // Handle error accordingly
  //     }
  //   })()
   
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.greenRectangle}>
        <Text style={styles.centeredText}>Recipe GPT</Text>
      </View>

      <Text style={styles.item}>Item (1)</Text>

      {/* Rectangle with Image Placeholder */}
      <View style={styles.rectangle}>
        <Image 
          source={require('../images/boxVector.png')} // Update the path to your image
            style={styles.imagePlaceholder}
        />
      </View>

      {/* first box */}
      <View style={[styles.roundedBox, styles.firstBox]}>
        <Text style={styles.firstBoxText}>Grocery Pickup & Delivery</Text>
        <Text style={styles.primeText}>Exclusively for Prime members in select ZIP codes.</Text>
        <Text style={styles.amazonText}>Shop on Amazon</Text>
        <Image 
            source={require('../images/boxVector.png')} // Update the path to your image
            style={styles.boxImage}
          />
      </View>


      {/* Recipe text box in the center
      <ScrollView style={styles.recipeBox}>
        <Text style={styles.recipeText}>{recipe || 'Loading recipe...'}</Text>
      </ScrollView> */}
      
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
  item: {
    color: '#004D35',
    textAlign: 'center',
    // fontFamily: 'Source Serif 4', // Uncomment this if the font is added to your project
    fontSize: 22.698,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24, // Adjust as needed
    top: 120, // Adjust this value to position the rectangle correctly
    left: -150, // Adjust this value to position the rectangle correctly
    zIndex: 1, // Ensure it's layered correctly
  },
  rectangle: {
    width: 150, // Adjust the width as needed
    height: 150, // Adjust the height as needed
    backgroundColor: '#CCCCCC', // Example background color for the rectangle
    marginLeft: -225, // Adjust as needed for positioning
    marginTop: 150, // Space below the "Items (1)" text
  },
  placeholderImage: {
    width: '100%', // Full width of the rectangle
    height: '100%', // Full height of the rectangle
    resizeMode: 'contain', // Keep the image aspect ratio
  },
  // Box 1: Grocery pick up & delivery
  firstBoxText: {
    color: '#2D2D2B',
    textAlign: 'center',
    fontFamily: 'SFProText', // Ensure this font is included in your project
    fontSize: 13,
    fontWeight: 'bold', // fontWeight 'bold' is typically 700
    letterSpacing: 0.13, // Letter spacing in React Native is in pixels
    marginBottom: 100, // Add some space below the text
    marginRight: -100,
    marginTop: -40,
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
  // boxImage: {
  //   width: 70, // Adjust the width as needed
  //   height: 70, // Adjust the height as needed
  //   resizeMode: 'contain',
  //   position: 'absolute', // Position the image absolutely
  //   right: 0, // Distance from the right edge of the firstBox
  //   top: -7, // Adjust this value to move the image upwards
  // },




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
