import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductCard from "./screens/ProductCard";
import OrderPage from "./screens/OrderPage";


const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="ProductCard" component={ProductCard} />
          <Stack.Screen name="OrderPage" component={OrderPage} />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
};

export default App;
