import React from "react";
import FeatherIcon from "react-native-vector-icons/Feather";
import { TouchableOpacity, View } from "react-native";
import {
  Container,
  TextView,
  Title,
  MonthText,
  MenuView,
  DrawerButton,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title, drawer }) {
  const navigation = useNavigation();

  const d = new Date();
  const month = d.getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <Container>
      <TextView>
        <Title>{title}</Title>
        <MonthText>{months[month]}</MonthText>
      </TextView>
      <MenuView>
        <DrawerButton
          isVisible={drawer}
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <FeatherIcon name="chevron-left" size={40} color={"#fff"} />
        </DrawerButton>
      </MenuView>
    </Container>
  );
}
