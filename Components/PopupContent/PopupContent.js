import React, { useState } from "react";
import {
  PopupView,
  PopupText,
  TopPopView,
  MidPopView,
  InsidePopView,
  BottonPopView,
  AmountPopText,
  PopupTextEditable,
  PopupInputEditable,
} from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function PopupContent({ isOpen, data, popFunction }) {
  const amountType = data.amount < 0 ? false : true;
  const amountAdjusted = amountType ? data.amount : data.amount * -1;

  const [editMode, setEditMode] = useState(false);
  const [dateValue, setDateValue] = useState(data.transferDate);
  const [budgetValue, setBudgetValue] = useState(data.budget);

  return (
    <PopupView isOpen={isOpen}>
      <TopPopView>
        <PopupText isTitle={true}>{data.name}</PopupText>
        <Ionicons
          name="close"
          size={40}
          color={"#D15858"}
          onPress={() => {
            setEditMode(false);
            popFunction(false);
          }}
        />
      </TopPopView>
      <MidPopView>
        <AmountPopText amountType={amountType} edit={editMode}>
          {"R$ " + amountAdjusted.toFixed(2)}
        </AmountPopText>
        <InsidePopView>
          <PopupText isTitle={true}>Transfer Date</PopupText>
          <PopupTextEditable isTitle={false} edit={editMode}>
            {data.transferDate}
          </PopupTextEditable>
          <PopupInputEditable
            onChangeText={(e) => {
              setDateValue(e.value);
            }}
            value={dateValue}
            isTitle={false}
            edit={editMode}
            keyboardAppearance={"dark"}
          ></PopupInputEditable>
        </InsidePopView>
        <InsidePopView>
          <PopupText isTitle={true}>Budget</PopupText>
          <PopupTextEditable isTitle={false} edit={editMode}>
            {data.budget}
          </PopupTextEditable>
          <PopupInputEditable
            onChangeText={(e) => {
              setBudgetValue(e.value);
            }}
            value={budgetValue}
            isTitle={false}
            edit={editMode}
            keyboardAppearance={"dark"}
          ></PopupInputEditable>
        </InsidePopView>
        <BottonPopView>
          <MaterialIcons
            name="edit"
            size={30}
            color="#fff"
            onPress={() => {
              setDateValue(data.transferDate);
              setBudgetValue(data.budget);
              setEditMode(!editMode);
            }}
          />
        </BottonPopView>
      </MidPopView>
    </PopupView>
  );
}
