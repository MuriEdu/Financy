import React from "react";
import { Text, View } from "react-native";
import Card from "../../Components/Card/Card";
import Contents from "../../Components/Contents/Contents";
import Header from "../../Components/Header/Header";
import BottonOptions from "../../Components/BottonOptions/BottonOptions";
import TransferList from "../../Components/TransferList/TransferList";
import { BottonContentView, Container } from "../../styles";

export default function Home() {
  const fakeList = [
    {
      iconName: "fast-food-outline",
      iconFont: 0, //Ionicons
      name: "McDonalds", // use template strings
      budget: "Supplies",
      amount: -22.9,
      isNegative: true,
    },
    {
      iconName: "fast-food-outline",
      iconFont: 0, //Ionicons
      name: "Jaú serve", // use template strings
      budget: "Supplies",
      amount: -130.38,
      isNegative: true,
    },
    {
      iconName: "money",
      iconFont: 1, //FontAwesome
      name: "Salary", // use template strings
      budget: "Total",
      amount: 5000,
      isNegative: false,
    },
    {
      iconName: "fast-food-outline",
      iconFont: 0, //Ionicons
      name: "McDonalds", // use template strings
      budget: "Supplies",
      amount: -22.9,
      isNegative: true,
    },
    {
      iconName: "fast-food-outline",
      iconFont: 0, //Ionicons
      name: "Jaú serve", // use template strings
      budget: "Supplies",
      amount: -130.38,
      isNegative: true,
    },
    {
      iconName: "money",
      iconFont: 1, //FontAwesome
      name: "Salary", // use template strings
      budget: "Total",
      amount: 5000,
      isNegative: false,
    },
  ];

  return (
    <Container>
      <Header title={"Financy"} month={"April"} />
      <Card
        type={"Balance"}
        amount={"R$5.250,50"}
        clientName={"Murilo Eduardo Feijó Ramos"}
        isRed={false}
      />
      <Contents
        data={TransferList(fakeList)}
        title={"Today, 06 dec"}
        buttonScreen={0}
      />
    </Container>
  );
}
