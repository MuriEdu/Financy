import React from "react";
import {
  PopupView,
  PopupText,
  TopPopView,
  MidPopView,
  InsidePopView,
  BottonPopView,
  AmountPopText,
} from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function PopupContent({ isOpen, data, popFunction }) {
  const amountType = data.amount < 0 ? false : true;
  const amountAdjusted = amountType ? data.amount : data.amount * -1;

  return (
    <PopupView isOpen={isOpen}>
      <TopPopView>
        <PopupText isTitle={true}>{data.name}</PopupText>
        <Ionicons
          name="close"
          size={40}
          color={"#D15858"}
          onPress={() => {
            popFunction(false);
          }}
        />
      </TopPopView>
      <MidPopView>
        <AmountPopText amountType={amountType}>
          {"R$ " + amountAdjusted.toFixed(2)}
        </AmountPopText>
        <InsidePopView>
          <PopupText isTitle={true}>Transfer Date</PopupText>
          <PopupText isTitle={false}>{data.transferDate}</PopupText>
        </InsidePopView>
        <InsidePopView>
          <PopupText isTitle={true}>Budget</PopupText>
          <PopupText isTitle={false}>{data.budget}</PopupText>
        </InsidePopView>
        <BottonPopView>
          <MaterialIcons
            name="edit"
            size={30}
            color="#fff"
            onPress={() => {
              alert("EDIT PRESSED");
            }}
          />
        </BottonPopView>
      </MidPopView>
    </PopupView>
  );
}
