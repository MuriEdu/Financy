import styled from "styled-components/native";

export const BottonView = styled.View`
  background-color: #3d3d3d;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: space-around;
  align-items: center;
`;

export const BottonContents = styled.View`
  background-color: #3d3d3d;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  width: 200px;
  /* border-right-width: ${(props) => props.left};
  border-left-width: ${(props) => props.right};
  border-color: #353535; */
`;

export const Line = styled.View`
  display: flex;
  height: 100%;
  width: 6px;
  background-color: #353535;
`;
