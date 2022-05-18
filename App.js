import * as React from "react";
import Home from "./Pages/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
} from "@expo-google-fonts/montserrat";
import { StatusBar } from "react-native";
// import {} from "@expo-google-fonts/open-sans";
// import {} from "@expo-google-fonts/roboto";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#1F1F1F",
          paddingTop: 40,
        },
        drawerPosition: "right",
        drawerHideStatusBarOnOpen: "true",
        drawerStatusBarAnimation: "slide",
        headerShown: false,
        drawerActiveBackgroundColor: "#2b2b2b",
        drawerActiveTintColor: "#fff",
        drawerLabelStyle: {
          fontSize: 20,
          fontFamily: "Montserrat_400Regular_Italic",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </>
  );
}
