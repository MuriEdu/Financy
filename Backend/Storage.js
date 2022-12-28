import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

function changePage(navigation) {
  navigation.navigate("Home");
}

export async function isFirstTime() {
  const navigation = useNavigation();

  try {
    const value = await AsyncStorage.getItem("@financy-data");
    if (value === null) {
      return null;
    } else {
      changePage(navigation);
      return null;
    }
  } catch (e) {
    alert("error");
  }
}

export async function saveData(object) {
  try {
    const jsonValue = JSON.stringify(object);
    await AsyncStorage.setItem("@financy-data", jsonValue);
  } catch (e) {}
}
