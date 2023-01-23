import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 40px;
  z-index: 1;
`;

export const TextView = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-family: "Montserrat_600SemiBold_Italic";
  color: #fff;
`;

export const DrawerButton = styled.TouchableOpacity`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
`;

export const MonthText = styled.Text`
  font-size: 20px;
  font-family: "Montserrat_500Medium_Italic";
  color: #c4c4c4;
`;

export const MenuView = styled.View`
  display: flex;
  flex-direction: row;
`;
