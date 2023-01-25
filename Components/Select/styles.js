import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const SlConteiner = styled.View`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border-bottom-width: 2px;
  border-color: #fff;
  width: 100%;
  padding-left: 10px;
`;
export const SlContent = styled.ScrollView`
  display: flex;
  flex-direction: column;
  background-color: #2b2b2b;
  margin-top: 40px;
  border-top-left-radius: 23px;
  border-top-right-radius: 23px;
`;
export const SlButton = styled.TouchableOpacity`
  background-color: #2b2b2b;
  display: flex;
`;
export const SlItemButton = styled.TouchableOpacity`
  width: 100%;
  border-bottom-width: 1px;
  border-color: #363636;
  padding: 20px;
`;
export const SlCreateItemButton = styled.TouchableOpacity`
  width: 100%;
  border-bottom-width: 1px;
  border-color: #363636;
  padding: 20px;
  align-items: center;
`;
export const SlList = styled.View`
  background-color: #2b2b2b;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const SlText = styled.Text`
  color: #fff;
  font-family: "OpenSans_400Regular";
  font-size: 22px;
`;
export const SlTextButtons = styled.Text`
  color: ${(props) => (props.isCancel ? "#D15858" : "#414E9B")};
  font-family: "OpenSans_400Regular";
  font-size: 22px;
`;
export const SlModal = styled.Modal``;
export const SlModalView = styled.View`
  background-color: #000;
  flex-direction: column;
  flex: 1;
`;

export const styles = StyleSheet.create({
  moti: {
    display: "flex",
    flexGrow: 1,
  },
});
