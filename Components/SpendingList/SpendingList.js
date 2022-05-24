import React from "react";

import {
  SpendingsView,
  SpendingsContainer,
  SpendingsIcon,
  SpendingsContent,
  SpendingsContainerLeft,
  Amount,
  ContentText,
  EndText,
} from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function SpendingsList(list) {
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
    <SpendingsContainer showsVerticalScrollIndicator={false}>
      {list.map((item) => {
        const fltAmount = parseFloat(item.amount).toFixed(2);

        return (
          <SpendingsView>
            <SpendingsContainerLeft>
              <SpendingsIcon>
                {iconFonts[item.iconFont].render(item.iconName)}
              </SpendingsIcon>
              <SpendingsContent>
                <ContentText title size={18}>
                  {item.name}
                </ContentText>
                <ContentText size={16}>{item.description}</ContentText>
              </SpendingsContent>
            </SpendingsContainerLeft>
            <Amount>{fltAmount}</Amount>
          </SpendingsView>
        );
      })}
      <EndText>No more Spendings</EndText>
    </SpendingsContainer>
  );
}
