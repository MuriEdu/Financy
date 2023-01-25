import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { userData } from "../../Backend/Storage";
import { deleteData, getUserData } from "../../Backend/Storage";

export default function Test() {
  const [modal, setModal] = useState(false);

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
    </SafeAreaView>
  );
}
