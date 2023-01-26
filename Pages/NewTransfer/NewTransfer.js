import React, { useState } from "react";
import { MotiView } from "moti";
import { getUserData, saveData, userData } from "../../Backend/Storage";
import DateTimePickerModal from "react-native-modal-datetime-picker";
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

export default function NewTransfer() {
  getUserData();
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [value, setValue] = useState(formatNumber(0));
  const [date, setDate] = useState(formatDate(new Date()));
  const [budget, setBudget] = useState(userData.budgets);
  const [dateInputHandler, setDateInputHandler] = useState(false);

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
    const editableData = userData;
    const formatedTitle =
      title.trim() === "" ? "Unnamed Transfer" : title.trim();
    editableData.transfers.push(
      createTransferObj(formatedTitle, value, date, budget)
    );
    saveData(editableData);
    getUserData();
    navigation.navigate("Home");
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

  function getSelectedBudget(budget) {
    setBudget(budget.name);
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
      <DateTimePickerModal
        isDarkModeEnabled={true}
        isVisible={dateInputHandler}
        mode="date"
        onConfirm={(d) => {
          const selectedDate = new Date(d);
          setDate(formatDate(selectedDate));
          setDateInputHandler(false);
        }}
        onCancel={() => {
          setDateInputHandler(false);
        }}
      />
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
            <NtNameText isEarn={true}>New Earn</NtNameText>
          </NtNameView>
          <NtFormView>
            <NtInputView>
              <NtInput value={title} onChangeText={setTitle} />
              <NtFormText>Title</NtFormText>
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
              <NtFormText>Value</NtFormText>
            </NtInputView>
            <NtInputView>
              <Select
                List={userData.budgets}
                Title={"Budgets"}
                Function={getSelectedBudget}
                createButton={true}
                type={0}
              />
              <NtFormText>Budget</NtFormText>
            </NtInputView>
            <NtInputView>
              <NtDateButton>
                <NtFormText
                  onPress={() => {
                    setDateInputHandler(true);
                  }}
                >
                  {date}
                </NtFormText>
              </NtDateButton>
              <NtFormText>Date</NtFormText>
            </NtInputView>
          </NtFormView>
        </NtContentView>
      </MotiView>
      <BottonOptions screen={3} addFunction={addEarn} />
    </NtView>
  );
}
