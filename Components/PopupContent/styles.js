import styled from "styled-components/native";

export const PopupView = styled.View`
  width: 90%;
  top: 50%;
  align-self: center;
  margin-top: -40%;
  padding: 25px;
  position: absolute;
  z-index: 1;
  background-color: #3d3d3d;
  border-radius: 20px;
  border: solid;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
`;

export const PopupText = styled.Text`
  font-size: ${(props) => (props.isTitle ? 25 : 20)}px;
  font-family: ${(props) =>
    props.isTitle ? "OpenSans_700Bold" : "OpenSans_400Regular_Italic"};
  color: #fff;
`;

export const TopPopView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MidPopView = styled.View`
  margin-bottom: 20px;
`;

export const InsidePopView = styled.View`
  margin-top: 15px;
`;

export const BottonPopView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const AmountPopText = styled.Text`
  display: ${(props) => (props.edit ? "none" : "flex")};
  color: ${(props) => (props.amountType ? "#9CD158" : "#D15858")};
  font-size: 30px;
`;

export const PopupTextEditable = styled.Text`
  display: ${(props) => (props.edit ? "none" : "flex")};
  font-size: ${(props) => (props.isTitle ? 25 : 20)}px;
  font-family: ${(props) =>
    props.isTitle ? "OpenSans_700Bold" : "OpenSans_400Regular_Italic"};
  color: #fff;
`;

export const PopupInputEditable = styled.TextInput`
  display: ${(props) => (props.edit ? "flex" : "none")};
  font-size: ${(props) => (props.isTitle ? 25 : 20)}px;
  font-family: ${(props) =>
    props.isTitle ? "OpenSans_700Bold" : "OpenSans_400Regular_Italic"};
  color: #fff;
`;
