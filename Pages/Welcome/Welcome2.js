import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MotiView } from "moti";
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
    defaultBudget: 0,
    totalBudgets: 0,
    budgets: [
      {
        iconName: "bank",
        name: "Default", // use template strings
        description: "",
        amount: 0,
      },
    ],
    totalSpendings: 0,
    spendings: [],
    transfers: [],
  };

  return (
    <FormView>
      <MotiView
        from={{ translateX: 400 }}
        animate={{ translateX: 0 }}
        transition={{
          type: "timing",
          duration: 600,
        }}
      >
        <FormHeaderView>
          <FormHeaderText isTitle={true}>First Step</FormHeaderText>
          <FormHeaderText isTitle={false}>
            We would like to know:
          </FormHeaderText>
        </FormHeaderView>
      </MotiView>
      <MotiView
        from={{ translateX: 400 }}
        animate={{ translateX: 0 }}
        transition={{
          type: "timing",
          duration: 850,
        }}
      >
        <FormContentView>
          <FormContentText>How can we call you?</FormContentText>
          <FormContentInput
            value={name}
            onChangeText={(e) => {
              setName(e);
            }}
          />
        </FormContentView>
      </MotiView>
      <FormButton
        onPress={() => {
          if (userObj.name === "") {
            alert("You need to answer");
          } else {
            saveData(userObj);
            navigation.navigate("Welcome3");
          }
        }}
      >
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "timing",
            duration: 3000,
          }}
        >
          <AntDesign name="right" size={35} color={"#fff"} />
        </MotiView>
      </FormButton>
    </FormView>
  );
}
