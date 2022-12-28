import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  FormButton,
  FormContentInput,
  FormContentText,
  FormContentView,
  FormHeaderText,
  FormHeaderView,
  FormView,
} from "./formstyles";
import AntDesign from "react-native-vector-icons/AntDesign";
import { saveData } from "../../Backend/Storage";

export default function Welcome2() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const userObj = {
    name: name.trim(),
    amount: 0,
    defaultBudget: {
      name: "Default",
      amount: 0,
    },
    budgets: [],
    spendings: [],
    transfers: [],
  };

  return (
    <FormView>
      <FormHeaderView>
        <FormHeaderText isTitle={true}>First Step</FormHeaderText>
        <FormHeaderText isTitle={false}>we would like to know:</FormHeaderText>
      </FormHeaderView>
      <FormContentView>
        <FormContentText>How we can call you?</FormContentText>
        <FormContentInput
          value={name}
          onChangeText={(e) => {
            setName(e);
          }}
        />
      </FormContentView>
      <FormButton
        onPress={() => {
          if (userObj.name === "") {
            alert("You need to answer");
          } else {
            // saveData(userObj);
            navigation.navigate("Welcome3");
          }
        }}
      >
        <AntDesign name="right" size={35} color={"#fff"} />
      </FormButton>
    </FormView>
  );
}
