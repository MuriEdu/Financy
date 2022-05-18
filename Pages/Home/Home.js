import React from "react";
import { Text } from "react-native";
import Header from "../../Components/Header/Header";
import { Container } from "../../styles";

export default function Home() {
  return (
    <Container>
      <Header title={"Financy"} month={"April"} />
    </Container>
  );
}
