import React from "react";
import { Text } from "react-native";
import { TouchableOpacity, View } from "react-native";
import {
  CardView,
  CardText,
  TopView,
  MidView,
  RightMidView,
  BottonView,
} from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

export default function Card({ type, amount, clientName, isRed }) {
  return (
    <CardView isRed={isRed}>
      <TopView>
        <CardText size={17}>{type}</CardText>
        <TouchableOpacity>
          <Feather name="edit" color={"#000"} size={27} />
        </TouchableOpacity>
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
          <CardText size={25}>{amount}</CardText>
        </RightMidView>
      </MidView>
      <BottonView>
        <CardText size={15}>{clientName}</CardText>
      </BottonView>
    </CardView>
  );
}
