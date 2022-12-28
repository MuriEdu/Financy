import React, { useState } from "react";
import { getUserData, saveData, userData } from "../../Backend/Storage";
import { View } from "react-native";
import {
  CardView,
  CardText,
  CardInput,
  TopView,
  MidView,
  RightMidView,
  BottonView,
  EditButton,
  ConfirmButton,
  styles,
} from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import CurrencyInput, { formatNumber } from "react-native-currency-input";

export default function Card({ type, isRed, typeNum }) {
  const [data, setData] = useState(nullProtection());

  function nullProtection() {
    if (userData === null) {
      return {
        name: "Welcome!",
        amount: 0,
        defaultBudget: {
          name: "Default",
          amount: 0,
        },
        totalBudgets: 0,
        budgets: [],
        totalSpendings: 0,
        spendings: [],
        transfers: [],
      };
    } else {
      return userData;
    }
  }

  function getAmount() {
    const arr = [data.amount, data.totalBudgets, data.totalSpendings];
    return arr[typeNum];
  }

  const [editable, setEditable] = useState(false);
  const [amountValue, setAmountValue] = useState(getAmount());

  return (
    <CardView isRed={isRed}>
      <TopView>
        <CardText size={17}>{type}</CardText>
        <EditButton
          isEditable={editable}
          onPress={() => {
            setEditable(!editable);
          }}
        >
          <Feather name="edit" color={"#000"} size={27} />
        </EditButton>
        <ConfirmButton
          isEditable={editable}
          onPress={() => {
            const newObj = userData;
            const A = () => {
              newObj.amount = amountValue;
            };
            const B = () => {
              newObj.totalBudgets = amountValue;
            };
            const C = () => {
              newObj.totalSpendings = amountValue;
            };
            const saveNewObj = (typeNum) => {
              const arr = [A, B, C];
              arr[typeNum]();
            };
            saveNewObj(typeNum);
            saveData(newObj);
            getUserData();
            setEditable(!editable);
          }}
        >
          <Feather name="check-square" color={"#000"} size={27} />
        </ConfirmButton>
      </TopView>
      <MidView>
        <View>
          <MaterialCommunityIcons
            name="integrated-circuit-chip"
            color={"#fff"}
            size={35}
          />
        </View>
        <RightMidView>
          <CurrencyInput
            style={styles.currencyInput(editable)}
            value={amountValue}
            onChangeValue={setAmountValue}
            prefix="R$"
            precision={2}
            minValue={0}
          />
          <CardText isEditable={editable} size={25}>
            {strMoney(amountValue)}
          </CardText>
        </RightMidView>
      </MidView>
      <BottonView>
        <CardText size={15}>{data.name}</CardText>
      </BottonView>
    </CardView>
  );
}

function strMoney(value) {
  const formatedValue = formatNumber(value, {
    separator: ",",
    prefix: "R$ ",
    precision: 2,
    delimiter: ".",
    signPosition: "beforePrefix",
  });
  return formatedValue;
}
