import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { userData } from "../../Backend/Storage";
import { deleteData, getUserData } from "../../Backend/Storage";

export default function Test() {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
}
