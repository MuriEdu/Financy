import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { userData } from "../../Backend/Storage";
import { deleteData, getUserData } from "../../Backend/Storage";
import Select from "../../Components/Select/Select";

export default function Test() {
  const [modal, setModal] = useState(false);

  const fakeBudgetsList = [
    {
      iconName: "money",
      iconFont: 1, //FontAwesome
      name: "Default", // use template strings
      description: "year payment",
      amount: 2100.5,
    },
    {
      iconName: "money",
      iconFont: 1, //FontAwesome
      name: "Salary", // use template strings
      description: "monthly payment",
      amount: 3150,
    },
  ];

  function SelectFunction(message) {
    alert("selecionado " + message.name);
  }

  return (
    <SafeAreaView>
      <DateTimePickerModal
        isVisible={modal}
        onConfirm={(e) => {
          console.log(e);
          setModal(false);
        }}
        onCancel={() => {
          setModal(false);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          deleteData();
        }}
      >
        <Text>CLEAR STORAGE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          getUserData();
        }}
      >
        <Text>GET DATA</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log(userData);
        }}
      >
        <Text>GET DATA IN APP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setModal(true);
        }}
      >
        <Text>GET DATE</Text>
      </TouchableOpacity>
      <Select
        Title={"Budgets"}
        List={fakeBudgetsList}
        Function={SelectFunction}
      />
    </SafeAreaView>
  );
}
