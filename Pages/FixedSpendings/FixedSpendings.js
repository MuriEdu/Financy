import React from "react";
import { Text } from "react-native";
import Card from "../../Components/Card/Card";
import Contents from "../../Components/Contents/Contents";
import Header from "../../Components/Header/Header";
import SpendingsList from "../../Components/SpendingList/spendingList";
import { Container } from "../../styles";

export default function FixedSpendings() {
  const fakeSpendingList = [
    {
      iconName: "money",
      iconFont: 1, //FontAwesome
      name: "IPTU", // use template strings
      description: "year payment",
      amount: -2100.5,
    },
    {
      iconName: "money",
      iconFont: 1, //FontAwesome
      name: "School", // use template strings
      description: "monthly payment",
      amount: -3150,
    },
  ];

  return (
    <Container>
      <Header title={"Fixed Spendings"} month={"April"} />
      <Card
        type={"Total fixed spendings"}
        amount={"R$5.250,50"}
        clientName={"Murilo Eduardo Feijó Ramos"}
        isRed={true}
      />
      <Contents
        title={"Current Spendings"}
        data={SpendingsList(fakeSpendingList)}
        buttonScreen={2}
      />
    </Container>
  );
}
