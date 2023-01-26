import React, { useState } from "react";
import { MotiView } from "moti";
import {
  changeUserData,
  getUserData,
  saveData,
  userData,
} from "../../Backend/Storage";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import BottonOptions from "../../Components/BottonOptions/BottonOptions";
import Select from "../../Components/Select/Select";
import Header from "../../Components/Header/Header";
import CurrencyInput, { formatNumber } from "react-native-currency-input";
import {
  NtContentView,
  NtFormText,
  NtFormView,
  NtInput,
  NtInputView,
  NtNameText,
  NtNameView,
  NtView,
  styles,
  NtDateButton,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

export default function NewBudgets() {
  getUserData();
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(formatNumber(0));
  const [icon, setIcon] = useState("bank");

  const Icons = [
    "bank",
    "handshake-o",
    "shopping-basket",
    "shopping-bag",
    "credit-card-alt",
    "heartbeat",
    "bus",
    "futbol-o",
    "car",
    "graduation-cap",
    "archive",
    "gamepad",
    "plane",
    "gift",
    "coffee",
    "cutlery",
  ];

  function createBudgetObj(name, amount, iconName, description) {
    const obj = {
      name,
      amount,
      iconName,
      description,
    };
    return obj;
  }

  function createPlaceHolderSelect() {
    return (
      <View>
        <FontAwesome
          style={{ marginLeft: 25 }}
          name={icon}
          size={40}
          color="#fff"
        />
      </View>
    );
  }

  function addEarn() {
    const editableData = userData;
    const formatedName = name.trim() === "" ? "Unnamed Budget" : name.trim();

    editableData.budgets.push(
      createBudgetObj(formatedName, value, icon, description.trim())
    );
    saveData(editableData);
    changeUserData(editableData);
    navigation.navigate("Budgets");
  }

  function getSelectedValue(value) {
    if (value === null) {
      setValue(0);
    } else {
      setValue(value);
    }
  }

  return (
    <NtView>
      <Header title={"Financy"} />
      <MotiView
        style={styles.moti}
        from={{ translateY: 300 }}
        animate={{ translateY: 0 }}
        transition={{
          type: "timing",
          duration: 500,
        }}
      >
        <NtContentView>
          <NtNameView>
            <NtNameText isEarn={true}>New Budget</NtNameText>
          </NtNameView>
          <NtFormView>
            <NtInputView>
              <NtInput value={name} onChangeText={setName} />
              <NtFormText>Name</NtFormText>
            </NtInputView>
            <NtInputView>
              <NtInput value={description} onChangeText={setDescription} />
              <NtFormText>Description</NtFormText>
            </NtInputView>
            <NtInputView>
              <CurrencyInput
                style={styles.currencyInput}
                value={value}
                onChangeValue={getSelectedValue}
                prefix="R$"
                precision={2}
                minValue={0}
              />
              <NtFormText>Amount</NtFormText>
            </NtInputView>
            <NtInputView>
              <Select
                List={Icons}
                Title={"Icon"}
                Function={setIcon}
                createButton={false}
                type={1}
                placeHoder={createPlaceHolderSelect()}
              />
              <NtFormText>Icon</NtFormText>
            </NtInputView>
          </NtFormView>
        </NtContentView>
      </MotiView>
      <BottonOptions screen={4} addFunction={addEarn} />
    </NtView>
  );
}
