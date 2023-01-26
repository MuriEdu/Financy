import * as React from "react";
import Welcome from "./Pages/Welcome/Welcome";
import Welcome2 from "./Pages/Welcome/Welcome2";
import Welcome3 from "./Pages/Welcome/Welcome3";
import Home from "./Pages/Home/Home";
import Budgets from "./Pages/Budgets/Budgets";
import FixedSpendings from "./Pages/FixedSpendings/FixedSpendings";
import NewTransfer from "./Pages/NewTransfer/NewTransfer";
import NewBudgets from "./Pages/NewTransfer/NewBudgets";
import Test from "./Pages/Test/Test";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import {
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
} from "@expo-google-fonts/montserrat";
import {
  OpenSans_400Regular,
  OpenSans_700Bold,
  OpenSans_400Regular_Italic,
} from "@expo-google-fonts/open-sans";
import { Roboto_300Light, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { getUserData } from "./Backend/Storage";

// Drawr menu config
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
        drawerStatusBarAnimation: "slide",
        headerShown: false,
        drawerActiveBackgroundColor: "#2b2b2b",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#fff",
        drawerLabelStyle: {
          fontSize: 20,
          fontFamily: "Montserrat_400Regular_Italic",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Budgets" component={Budgets} />
      <Drawer.Screen name="Fixed Spendings" component={FixedSpendings} />
      <Drawer.Screen name="Test" component={Test} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={MyDrawer} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Welcome2" component={Welcome2} />
      <Stack.Screen name="Welcome3" component={Welcome3} />
      <Stack.Screen name="NewTransfer" component={NewTransfer} />
      <Stack.Screen name="NewBudgets" component={NewBudgets} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_400Regular,
    OpenSans_400Regular,
    OpenSans_400Regular_Italic,
    OpenSans_700Bold,
    Roboto_300Light,
    Roboto_500Medium,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  getUserData();

  return (
    <>
      <StatusBar backgroundColor="#000" />
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </>
  );
}
