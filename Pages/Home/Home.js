import React, { useState } from "react";
import { Text, View } from "react-native";
import Card from "../../Components/Card/Card";
import Contents from "../../Components/Contents/Contents";
import Header from "../../Components/Header/Header";
import TransferList from "../../Components/TransferList/TransferList";
import PopupContent from "../../Components/PopupContent/PopupContent";
import { BottonContentView, Container } from "../../styles";

export default function Home() {
  const fakeList = [
    {
      iconName: "null",
      iconFont: 0,
      name: "null",
      budget: "null",
      amount: 0,
      transferDate: "null",
    },
    {
      iconName: "fast-food-outline",
      iconFont: 0, //Ionicons
      name: "McDonalds", // use template strings
      budget: "Supplies",
      amount: -22.9,
      transferDate: "14/07/2022",
    },
    {
      iconName: "fast-food-outline",
      iconFont: 0, //Ionicons
      name: "Jaú serve", // use template strings
      budget: "Supplies",
      amount: -130.38,
      transferDate: "14/07/2022",
    },
    {
      iconName: "money",
      iconFont: 1, //FontAwesome
      name: "Salary", // use template strings
      budget: "Total",
      amount: 5000,
      transferDate: "14/07/2022",
    },
    {
      iconName: "fast-food-outline",
      iconFont: 0, //Ionicons
      name: "McDonalds", // use template strings
      budget: "Supplies",
      amount: -22.9,
      transferDate: "14/07/2022",
    },
    {
      iconName: "fast-food-outline",
      iconFont: 0, //Ionicons
      name: "Jaú serve", // use template strings
      budget: "Supplies",
      amount: -130.38,
      transferDate: "14/07/2022",
    },
    {
      iconName: "money",
      iconFont: 1, //FontAwesome
      name: "Salary", // use template strings
      budget: "Total",
      amount: 5000,
      transferDate: "14/07/2022",
    },
  ];

  //DATE

  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const today = new Date();
  const date = `Today, ${today.getDate()} ${months[today.getMonth()]}`;

  // POPUP

  const [Popup, setPopup] = useState(false);
  const [popupData, setPopupData] = useState(0);

  return (
    <Container>
      <PopupContent
        isOpen={Popup}
        data={fakeList[popupData]}
        popFunction={setPopup}
      />
      <Header title={"Financy"} month={"April"} />
      <Card
        type={"Balance"}
        amount={"R$5.250,50"}
        clientName={"Murilo Eduardo Feijó Ramos"}
        isRed={false}
      />
      <Contents
        data={TransferList(fakeList, setPopup, Popup, setPopupData)}
        title={date}
        buttonScreen={0}
      />
    </Container>
  );
}
