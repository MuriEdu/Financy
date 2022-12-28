import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const CardView = styled.View`
  background-color: ${(props) => (props.isRed ? "#D15858" : "#414E9B")};
  width: 380px;
  height: 250px;
  align-self: center;
  border-radius: 15px;
  margin-top: 60px;
`;

export const CardText = styled.Text`
  display: ${(props) => (props.isEditable ? "none" : "flex")};
  font-family: "OpenSans_400Regular";
  color: #fff;
  font-size: ${(props) => props.size || `${15}px`};
`;

export const CardInput = styled.TextInput`
  display: ${(props) => (props.isEditable ? "flex" : "none")};
  font-family: "OpenSans_400Regular";
  color: #8a8a8a;
  font-size: ${(props) => props.size || `${15}px`};
`;

export const TopView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  margin-left: 25px;
  margin-right: 25px;
`;

export const MidView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
`;

export const RightMidView = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 55px;
`;

export const BottonView = styled.View`
  height: 35%;
  margin-left: 25px;
  justify-content: flex-end;
`;

export const EditButton = styled.TouchableOpacity`
  display: ${(props) => (props.isEditable ? "none" : "flex")};
`;
export const ConfirmButton = styled.TouchableOpacity`
  display: ${(props) => (props.isEditable ? "flex" : "none")};
`;

export const styles = StyleSheet.create({
  currencyInput: (isEditable) => ({
    display: isEditable ? "flex" : "none",
    color: "#fff",
    minWidth: 150,
    fontFamily: "OpenSans_400Regular",
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    fontSize: 25,
  }),
});
