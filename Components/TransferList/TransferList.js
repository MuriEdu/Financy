import React from "react";

import {
  TransferView,
  TransferContainerStatic,
  TransferContainer,
  TransferIcon,
  TransferContent,
  TransferContainerLeft,
  Amount,
  ContentText,
  EndText,
} from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { ScrollView } from "react-native";

export default function TransferList(list) {
  const iconFonts = [
    {
      render: (name) => {
        return <Ionicons name={name} size={40} color="#000" />;
      },
    },
    {
      render: (name) => {
        return <FontAwesome name={name} size={40} color="#000" />;
      },
    },
  ];

  return (
    <TransferContainer showsVerticalScrollIndicator={false}>
      {list.map((item) => {
        const fltAmount = parseFloat(item.amount).toFixed(2);

        return (
          <TransferView>
            <TransferContainerLeft>
              <TransferIcon>
                {iconFonts[item.iconFont].render(item.iconName)}
              </TransferIcon>
              <TransferContent>
                <ContentText title size={18}>
                  {item.name}
                </ContentText>
                <ContentText size={16}>{item.budget}</ContentText>
              </TransferContent>
            </TransferContainerLeft>
            <Amount textColor={item.isNegative}>{fltAmount}</Amount>
          </TransferView>
        );
      })}
      <EndText>No more transfers</EndText>
    </TransferContainer>
  );
}
