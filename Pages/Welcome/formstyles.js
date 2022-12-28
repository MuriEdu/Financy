import styled from "styled-components/native";

export const FormView = styled.SafeAreaView`
  background-color: #000;
  height: 100%;
`;
export const FormHeaderView = styled.View`
  background-color: #000;
  padding: 30px;
`;
export const FormContentView = styled.View`
  background-color: #000;
  display: flex;
  align-items: center;
  padding-top: 150px;
  height: auto;
`;
export const FormHeaderText = styled.Text`
  color: ${(props) => (props.isTitle ? "#fff" : "#878787")};
  font-size: ${(props) => (props.isTitle ? "45px" : "28px")};
  font-family: "Poppins_400Regular";
`;
export const FormContentText = styled.Text`
  color: #fff;
  font-size: 30px;
  margin-bottom: 50px;
`;
export const FormContentInput = styled.TextInput`
  margin-top: 50px;
  color: #fff;
  font-size: 30px;
  width: 80%;
  border-bottom-width: 3px;
  border-color: #fff;
  border-radius: 5px;
  text-align: center;
`;
export const FormButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 40px;
  margin-bottom: 60px;
`;
