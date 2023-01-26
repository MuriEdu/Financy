import React from "react";
import { TouchableOpacity, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { BottonView, BottonContents, Line, ButtonText } from "./styles";
import { useNavigation } from "@react-navigation/native";
import PopupContent from "../PopupContent/PopupContent";

export default function BottonOptions({ screen, addFunction }) {
  const navigation = useNavigation();
  const types = [
    // 0 => Home
    {
      leftButton: () => {
        return (
          <MaterialIcons name="attach-money" color={"#9CD158"} size={55} />
        );
      },
      leftFunction: () => {
        navigation.navigate("NewTransfer");
      },
      rightButton: () => {
        return <MaterialIcons name="money-off" color={"#D15858"} size={55} />;
      },
      rightFunction: () => {
        alert("RIGHT BUTTON");
      },
    },
    // 1 => Budgets
    {
      leftButton: () => {
        return <ButtonText isRed={false}>Create</ButtonText>;
      },
      leftFunction: () => {
        navigation.navigate("NewBudgets");
      },
      rightButton: () => {
        return <ButtonText isRed={true}>Delete</ButtonText>;
      },
      rightFunction: () => {
        alert("RIGHT BUTTON");
      },
    },
    // 2 => Fixed Spendings
    {
      leftButton: () => {
        return <ButtonText isRed={false}>Create</ButtonText>;
      },
      leftFunction: () => {
        alert("LEFT BUTTON");
      },
      rightButton: () => {
        return <ButtonText isRed={true}>Delete</ButtonText>;
      },
      rightFunction: () => {
        alert("RIGHT BUTTON");
      },
    },
    // 3 => New Transfers
    {
      leftButton: () => {
        return <ButtonText isRed={false}>Add</ButtonText>;
      },
      leftFunction: () => {
        addFunction();
      },
      rightButton: () => {
        return <ButtonText isRed={true}>Cancel</ButtonText>;
      },
      rightFunction: () => {
        navigation.navigate("Home");
      },
    },
    // 4 => New Budgets
    {
      leftButton: () => {
        return <ButtonText isRed={false}>Add</ButtonText>;
      },
      leftFunction: () => {
        addFunction();
      },
      rightButton: () => {
        return <ButtonText isRed={true}>Cancel</ButtonText>;
      },
      rightFunction: () => {
        navigation.navigate("Budgets");
      },
    },
  ];

  return (
    <BottonView>
      <TouchableOpacity onPress={types[screen].leftFunction}>
        <BottonContents left={3} right={0}>
          {types[screen].leftButton()}
        </BottonContents>
      </TouchableOpacity>
      <Line>
        <Text style={{ color: "#353535" }}>.</Text>
      </Line>
      <TouchableOpacity onPress={types[screen].rightFunction}>
        <BottonContents left={0} right={3}>
          {types[screen].rightButton()}
        </BottonContents>
      </TouchableOpacity>
    </BottonView>
  );
}
