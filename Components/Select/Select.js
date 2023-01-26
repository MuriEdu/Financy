import React, { useState } from "react";
import { MotiView } from "moti";
import Header from "../Header/Header";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  SlButton,
  SlConteiner,
  SlContent,
  SlCreateItemButton,
  SlItemButton,
  SlList,
  SlModal,
  SlModalView,
  SlText,
  SlTextButtons,
  styles,
} from "./styles";
import { formatNumber } from "react-native-currency-input";

export default function Select({ Title, List, Function, createButton, type }) {
  const [open, setOpen] = useState(false);
  const [selectedName, setSelectedName] = useState(List[0].name);
  const [selectedIcon, setSelectedIcon] = useState("bank");

  // LIST FUNCTIONS

  const ListFunctions = [
    CreateBudgetList, // type 0
    CreateIconList, // type 1
  ];

  function CreateBudgetList(value) {
    return (
      <SlItemButton
        onPress={() => {
          setSelectedName(value.name);
          Function(value);
          setOpen(false);
        }}
      >
        <SlList>
          <SlText>{value.name}</SlText>
          <SlText>
            {formatNumber(value.amount, {
              prefix: "R$",
              precision: 2,
              minValue: 0,
            })}
          </SlText>
        </SlList>
      </SlItemButton>
    );
  }

  function CreateIconList(icon) {
    return (
      <SlItemButton
        onPress={() => {
          setSelectedIcon(icon);
          Function(icon);
          setOpen(false);
        }}
      >
        <SlList>
          <FontAwesome name={icon} size={40} color="#fff" />
        </SlList>
      </SlItemButton>
    );
  }

  //PLACE HOLDERS

  const PlaceHolders = [BudgetPlaceHolder, IconPlaceHolder];

  function BudgetPlaceHolder() {
    return <SlText>{selectedName}</SlText>;
  }

  function IconPlaceHolder() {
    return (
      <FontAwesome
        style={{ marginBottom: 10, marginLeft: 5 }}
        name={selectedIcon}
        size={40}
        color="#fff"
      />
    );
  }

  return (
    <SlConteiner>
      <SlButton
        onPress={() => {
          setOpen(!open);
        }}
      >
        {PlaceHolders[type]()}
      </SlButton>
      <SlModal visible={open}>
        <SlModalView>
          <MotiView
            style={styles.moti}
            from={{ translateY: 300 }}
            animate={{ translateY: 0 }}
            transition={{
              type: "timing",
              duration: 500,
            }}
          >
            <Header title={"Select " + Title} drawer={false}></Header>
            <SlContent contentContainerStyle={{ alignItems: "center" }}>
              {List.map(ListFunctions[type])}
              <SlCreateItemButton createButton={createButton}>
                <SlTextButtons isCancel={false}>
                  Create new {Title}
                </SlTextButtons>
              </SlCreateItemButton>
              <SlCreateItemButton
                createButton={true}
                onPress={() => {
                  setOpen(!open);
                }}
              >
                <SlTextButtons isCancel={true}>Cancel</SlTextButtons>
              </SlCreateItemButton>
            </SlContent>
          </MotiView>
        </SlModalView>
      </SlModal>
    </SlConteiner>
  );
}
