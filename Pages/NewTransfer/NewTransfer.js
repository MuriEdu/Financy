import { MotiView } from "moti";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { getUserData, userData } from "../../Backend/Storage";
import BottonOptions from "../../Components/BottonOptions/BottonOptions";
import Header from "../../Components/Header/Header";
import {
  NtContentView,
  NtFormText,
  NtFormView,
  NtInput,
  NtInputView,
  NtNameText,
  NtNameView,
  NtView,
  NtHeaderView,
  styles,
  NtDateButton,
} from "./styles";
import { View } from "react-native";

export default function NewTransfer() {
  const [title, setTitle] = useState();
  const [value, setValue] = useState();
  const [date, setDate] = useState(formatDate(new Date()));
  const [budget, setBudget] = useState();
  const [dateInputHandler, setDateInputHandler] = useState(true);

  function createTransferObj(title, value, date, budget) {
    const obj = {
      title,
      value,
      date,
      budget,
    };
    return obj;
  }

  function addEarn() {
    const data = getUserData();
    const editableData = userData;
    editableData.transfers.push(createTransferObj(title, value, date, budget));
    console.log(editableData);
  }

  function formatDate(inputDate) {
    let date, month, year;

    date = inputDate.getDate();
    month = inputDate.getMonth() + 1;
    year = inputDate.getFullYear();

    date = date.toString().padStart(2, "0");

    month = month.toString().padStart(2, "0");

    return `${date}/${month}/${year}`;
  }

  function inputDate() {
    if (dateInputHandler === true) {
      return <View></View>;
    } else {
      return (
        <DateTimePicker
          themeVariant="dark"
          mode="date"
          value={new Date()}
          onChange={(e) => {
            const dateString = new Date(e.nativeEvent.timestamp);
            const string = formatDate(dateString);
            setDate(string);
            setDateInputHandler(!dateInputHandler);
          }}
        />
      );
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
        <NtContentView isVisible={dateInputHandler}>
          <NtNameView>
            <NtNameText isEarn={true}>New Earn</NtNameText>
          </NtNameView>
          <NtFormView>
            <NtInputView>
              <NtInput
                value={title}
                onChangeText={(e) => {
                  setTitle(e);
                }}
              />
              <NtFormText>Title</NtFormText>
            </NtInputView>
            <NtInputView>
              <NtInput
                value={value}
                onChangeText={(e) => {
                  setValue(e);
                }}
              />
              <NtFormText>Value</NtFormText>
            </NtInputView>
            <NtInputView>
              <NtInput
                value={budget}
                onChangeText={(e) => {
                  setBudget(e);
                }}
              />
              <NtFormText>Budget</NtFormText>
            </NtInputView>
            <NtInputView>
              <NtDateButton>
                <NtFormText
                  onPress={() => {
                    setDateInputHandler(!dateInputHandler);
                  }}
                >
                  {date}
                </NtFormText>
              </NtDateButton>
              <NtFormText>Date</NtFormText>
            </NtInputView>
          </NtFormView>
        </NtContentView>
        {/* Data Input */}
        <NtContentView isVisible={!dateInputHandler}>
          {inputDate()}
        </NtContentView>
      </MotiView>
      <BottonOptions screen={3} addFunction={addEarn} />
    </NtView>
  );
}
