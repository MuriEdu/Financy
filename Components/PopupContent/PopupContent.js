import React, { useState, useRef } from "react";
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
  AmountPopTextEditable,
} from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { formatNumber } from "react-native-currency-input";

export default function PopupContent({ isOpen, data, popFunction }) {
  const formatAmount = () => {
    const amountSign = data.amount < 0 ? false : true;
    const amountFormated = amountSign ? data.amount : data.amount * -1;
    return "R$ " + amountFormated.toFixed(2);
  };

  const formatEditedAmount = (value) => {
    const toNumber = parseFloat(value);

    return formatNumber(toNumber, {
      separator: ".",
      prefix: "R$ ",
      precision: 2,
      delimiter: "",
    });
  };

  const amountType = data.amount < 0 ? false : true;
  const [editMode, setEditMode] = useState(false);
  const [amountValue, setAmountValue] = useState(formatAmount());
  const [dateValue, setDateValue] = useState(data.transferDate);
  const [budgetValue, setBudgetValue] = useState(data.budget);
  const firstFocus = useRef();

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
          {formatAmount()}
        </AmountPopText>
        <AmountPopTextEditable
          onChangeText={(e) => {
            let newText = "";
            let numbers = "0123456789";

            for (var i = 0; i < e.length; i++) {
              if (numbers.indexOf(e[i]) > -1) {
                newText = newText + e[i];
              } else {
              }
            }
            setAmountValue(newText);
            console.log();
            // When confrim edition needs to format using formatEditedAmount()
          }}
          value={amountValue}
          amountType={amountType}
          edit={editMode}
          type={"number"}
          keyboardType="numeric"
          keyboardAppearance={"dark"}
          ref={firstFocus}
        ></AmountPopTextEditable>

        <InsidePopView>
          <PopupText isTitle={true}>Transfer Date</PopupText>
          <PopupTextEditable isTitle={false} edit={editMode}>
            {data.transferDate}
          </PopupTextEditable>
          <PopupInputEditable
            onChangeText={(e) => {
              setDateValue(e);
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
              setBudgetValue(e);
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
              setAmountValue(formatAmount());
              setDateValue(data.transferDate);
              setBudgetValue(data.budget);
              setEditMode(!editMode);
              firstFocus.current.focus();
            }}
          />
        </BottonPopView>
      </MidPopView>
    </PopupView>
  );
}
