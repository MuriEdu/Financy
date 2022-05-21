import styled from "styled-components/native";

export const BottonView = styled.View`
  background-color: #2b2b2b;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70px;
`;

export const BottonContents = styled.View`
  background-color: #2b2b2b;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  width: 200px;
`;

export const Line = styled.View`
  display: flex;
  height: 100%;
  width: 6px;
  background-color: #353535;
`;

export const ButtonText = styled.Text`
  color: ${(prop) => (prop.isRed ? "#D15858" : "#9CD158")};
  font-size: 20px;
  font-family: "Montserrat_400Regular";
`;
