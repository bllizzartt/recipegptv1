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

      <Text style={styles.item}>Item</Text>


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
