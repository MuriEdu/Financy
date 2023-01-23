import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const NtView = styled.View`
  display: flex;
  justify-content: space-between;
  background-color: #000;
  position: absolute;
  padding-top: 20px;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const NtContentView = styled.View`
  margin-top: 25px;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  flex-grow: 1;
  align-items: center;
  border-top-left-radius: 23px;
  border-top-right-radius: 23px;
  background-color: #2b2b2b;
`;
export const NtNameView = styled.View`
  background-color: #2b2b2b;
  width: 100%;
  padding: 20px;
  border-top-left-radius: 23px;
  border-top-right-radius: 23px;
`;
export const NtFormView = styled.View`
  background-color: #2b2b2b;
  display: flex;
  flex-grow: 1;
  width: 100%;
  justify-content: space-around;
`;
export const NtInputView = styled.View`
  background-color: #2b2b2b;
  padding-left: 20px;
  padding-right: 20px;
`;
export const NtNameText = styled.Text`
  color: ${(props) => (props.isEarn ? "#9CD158" : "#D15858")};
  font-family: "OpenSans_400Regular";
  font-size: 18px;
`;
export const NtFormText = styled.Text`
  color: #fff;
  font-family: "OpenSans_400Regular";
  font-size: 20px;
`;
export const NtInput = styled.TextInput`
  color: #fff;
  font-family: "OpenSans_400Regular";
  font-size: 22px;
  border-bottom-width: 2px;
  border-color: #fff;
  width: 100%;
  padding-left: 10px;
`;

export const NtDateButton = styled.TouchableOpacity`
  border-bottom-width: 2px;
  border-color: #fff;
`;

export const styles = StyleSheet.create({
  moti: {
    display: "flex",
    flexGrow: 1,
  },
});
