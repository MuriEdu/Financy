import React from "react";
import { CardText } from "../Card/styles";
import { ContentsView, TopView } from "./styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import { TouchableOpacity, View } from "react-native";

export default function Contents({ title, data }) {
  return (
    <ContentsView>
      <TopView>
        <CardText size={16}>Today, 06 dec</CardText>
        <TouchableOpacity>
          <FeatherIcon name="chevron-up" size={40} color={"#fff"} />
        </TouchableOpacity>
      </TopView>
      <View>{data}</View>
    </ContentsView>
  );
}
