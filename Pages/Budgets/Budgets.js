import React from "react";
import { Text } from "react-native";
import Card from "../../Components/Card/Card";
import Contents from "../../Components/Contents/Contents";
import Header from "../../Components/Header/Header";
import BudgetsList from "../../Components/BudgetsList/BudgetsList";
import { Container } from "../../styles";

export default function Budgets() {
  const fakeBudgetsList = [
    {
      iconName: "money",
      iconFont: 1, //FontAwesome
      name: "13° Salary", // use template strings
      description: "year payment",
      amount: 2100.5,
    },
    {
      iconName: "money",
      iconFont: 1, //FontAwesome
      name: "Salary", // use template strings
      description: "monthly payment",
      amount: 3150,
    },
  ];

  return (
    <Container>
      <Header title={"Budgets"} drawer={true} />
      <Card type={"Total Balance"} isRed={false} typeNum={1} />
      <Contents
        title={"Current Budgets"}
        data={BudgetsList(fakeBudgetsList)}
        buttonScreen={1}
      />
    </Container>
  );
}
