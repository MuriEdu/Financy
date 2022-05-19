import styled from "styled-components/native";

export const TransferContainer = styled.ScrollView`
  height: 250px;
`;

export const TransferView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const TransferIcon = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c4c4c4;
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;

export const TransferContent = styled.View`
  display: flex;
  margin-left: 10px;
`;

export const Amount = styled.Text`
  color: ${(props) => (props.textColor ? "#D15858" : "#9CD158")};
  align-self: center;
  font-size: 20px;
  font-family: "OpenSans_700Bold";
`;

export const ContentText = styled.Text`
  font-family: ${(props) =>
    props.title ? "Roboto_500Medium" : "Roboto_300Light"};
  font-size: ${(props) => props.size};
  color: #fff;
`;

export const TransferContainerLeft = styled.View`
  display: flex;
  flex-direction: row;
`;

export const EndText = styled.Text`
  font-family: "OpenSans_400Regular_Italic";
  font-size: 18px;
  color: #707070;
  align-self: center;
  margin-top: 10px;
`;
