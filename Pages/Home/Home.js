import React from "react";
import { Text } from "react-native";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import { Container } from "../../styles";

export default function Home() {
  return (
    <Container>
      <Header title={"Financy"} month={"April"} />
      <Card
        type={"Balance"}
        amount={"R$5.250,50"}
        clientName={"Murilo Eduardo Feijó Ramos"}
      />
    </Container>
  );
}
