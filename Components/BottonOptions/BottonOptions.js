import React from "react";
import { TouchableOpacity, Text } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { BottonView, BottonContents, Line, ButtonText } from "./styles";

export default function BottonOptions({ screen }) {
  const types = [
    // 0 => Home
    {
      leftButton: () => {
        return (
          <MaterialIcons name="attach-money" color={"#9CD158"} size={55} />
        );
      },
      leftFunction: () => {
        alert("LEFT BUTTON");
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
        alert("LEFT BUTTON");
      },
      rightButton: () => {
        return <ButtonText isRed={true}>Delete</ButtonText>;
      },
      rightFunction: () => {
        alert("RIGHT BUTTON");
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
