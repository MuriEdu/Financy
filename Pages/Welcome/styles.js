import styled from "styled-components/native";

export const WelcomeView = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #000;
`;
export const WelcomeTitleView = styled.View`
  margin: 20px;
`;
export const WelcomeTextView = styled.View`
  margin: 20px;
`;
export const WelcomeSpecialView = styled.View`
  display: flex;
  flex-direction: row;
`;
export const WelcomeText = styled.Text`
  color: ${(props) => (props.isTitle ? "#fff" : "#878787")};
  font-size: ${(props) => (props.isTitle ? "50px" : "40px")};
  font-family: "Poppins_400Regular";
`;
export const WelcomeSpecialText = styled.Text`
  color: #414e9b;
  font-size: 40px;
  font-family: "Poppins_400Regular";
`;

export const NextStepButtom = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  margin-bottom: 60px;
`;
