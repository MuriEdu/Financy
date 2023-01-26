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

export let userData = {
  name: "Financer",
  amount: 0,
  totalBudgets: 0,
  budgets: [
    {
      iconName: "money",
      name: "Default", // use template strings
      description: "year payment",
      amount: 0,
    },
  ],
  totalSpendings: 0,
  spendings: [],
  transfers: [],
};

export function changeUserData(data) {
  userData = data;
}

export async function getUserData() {
  try {
    const data = await AsyncStorage.getItem("@financy-data");
    const jsonValue = JSON.parse(data);
    userData = jsonValue;
  } catch (e) {
    alert(e);
  }
}

export async function saveData(object) {
  try {
    const jsonValue = JSON.stringify(object);
    await AsyncStorage.setItem("@financy-data", jsonValue);
  } catch (e) {
    alert("error " + e);
  }
}

export async function deleteData() {
  try {
    await AsyncStorage.removeItem("@financy-data");
  } catch (e) {}
}
