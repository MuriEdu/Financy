import React, { useState } from "react";
import { MotiView } from "moti";
import Header from "../Header/Header";
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

export default function Select({ Title, List, Function }) {
  const [open, setOpen] = useState(false);
  const [selectedName, setSelectedName] = useState(List[0].name);

  function CreateList(value) {
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
          <SlText>{value.amount}</SlText>
        </SlList>
      </SlItemButton>
    );
  }

  return (
    <SlConteiner>
      <SlButton
        onPress={() => {
          setOpen(!open);
        }}
      >
        <SlText>{selectedName}</SlText>
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
              {List.map(CreateList)}
              <SlCreateItemButton>
                <SlTextButtons isCancel={false}>
                  Create new {Title}
                </SlTextButtons>
              </SlCreateItemButton>
              <SlCreateItemButton
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
