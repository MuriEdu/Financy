import React, { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import Contents from "../../Components/Contents/Contents";
import Header from "../../Components/Header/Header";
import BudgetsList from "../../Components/BudgetsList/BudgetsList";
import { Container } from "../../styles";
import { getUserData, userData } from "../../Backend/Storage";

export default function Budgets() {
  const [budgets, setBudgets] = useState(userData);
  getUserData();

  useEffect(() => {
    console.log("changed");
    setBudgets(userData);
  }, [userData.budgets]);

  return (
    <Container>
      <Header title={"Budgets"} drawer={true} />
      <Card type={"Total Balance"} isRed={false} typeNum={1} />
      <Contents
        title={"Current Budgets"}
        data={BudgetsList(budgets.budgets)}
        buttonScreen={1}
      />
    </Container>
  );
}
