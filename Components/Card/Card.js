import React, { useState } from "react";
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
} from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

export default function Card({ type, amount, clientName, isRed }) {
  const [editable, setEditable] = useState(false);
  const [amountValue, setAmountValue] = useState(amount);

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
          <CardInput
            isEditable={editable}
            size={25}
            value={amountValue}
            onChangeText={(e) => {
              setAmountValue(e);
            }}
          />
          <CardText isEditable={editable} size={25}>
            {amount}
          </CardText>
        </RightMidView>
      </MidView>
      <BottonView>
        <CardText size={15}>{clientName}</CardText>
      </BottonView>
    </CardView>
  );
}
