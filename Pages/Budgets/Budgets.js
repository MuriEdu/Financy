import React, { useEffect } from "react";
import Card from "../../Components/Card/Card";
import Contents from "../../Components/Contents/Contents";
import Header from "../../Components/Header/Header";
import BudgetsList from "../../Components/BudgetsList/BudgetsList";
import { Container } from "../../styles";
import { getUserData, userData, userDataListener } from "../../Backend/Storage";

export default function Budgets() {
  getUserData();

  return (
    <Container>
      <Header title={"Budgets"} drawer={true} />
      <Card type={"Total Balance"} isRed={false} typeNum={1} />
      <Contents
        title={"Current Budgets"}
        data={BudgetsList(userData.budgets)}
        buttonScreen={1}
      />
    </Container>
  );
}
