import React from "react";
import { Text } from "react-native";
import Card from "../../Components/Card/Card";
import Contents from "../../Components/Contents/Contents";
import Header from "../../Components/Header/Header";
import { Container } from "../../styles";

export default function Home() {
  const fakeData = {
    render: () => {
      return <Text>I AM DATA</Text>;
    },
  };

  return (
    <Container>
      <Header title={"Financy"} month={"April"} />
      <Card
        type={"Balance"}
        amount={"R$5.250,50"}
        clientName={"Murilo Eduardo Feijó Ramos"}
      />
      <Contents data={fakeData} />
    </Container>
  );
}
