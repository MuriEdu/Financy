import React from "react";

import {
  BudgetsView,
  BudgetsContainer,
  BudgetsIcon,
  BudgetsContent,
  BudgetsContainerLeft,
  Amount,
  ContentText,
  EndText,
} from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function BudgetsList(list) {
  return (
    <BudgetsContainer showsVerticalScrollIndicator={false}>
      {list.map((item) => {
        const fltAmount = parseFloat(item.amount).toFixed(2);

        return (
          <BudgetsView>
            <BudgetsContainerLeft>
              <BudgetsIcon>
                <FontAwesome name={item.iconName} size={40} color="#000" />
              </BudgetsIcon>
              <BudgetsContent>
                <ContentText title size={18}>
                  {item.name}
                </ContentText>
                <ContentText size={16}>{item.description}</ContentText>
              </BudgetsContent>
            </BudgetsContainerLeft>
            <Amount textColor={fltAmount < 0 ? true : false}>
              {fltAmount}
            </Amount>
          </BudgetsView>
        );
      })}
      <EndText>No more Budgets</EndText>
    </BudgetsContainer>
  );
}
