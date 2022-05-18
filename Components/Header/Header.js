import React from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
import { TouchableOpacity, View } from "react-native";
import { Container, TextView, Title, MonthText, MenuView } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title, month }) {
  const navigation = useNavigation();

  return (
    <Container>
      <TextView>
        <Title>{title}</Title>
        <MonthText>{month}</MonthText>
      </TextView>
      <MenuView>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <FeatherIcon name="chevron-left" size={40} color={"#fff"} />
        </TouchableOpacity>
      </MenuView>
    </Container>
  );
}
