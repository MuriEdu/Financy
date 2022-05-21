import React, { useState } from "react";
import BottonOptions from "../BottonOptions/BottonOptions";
import { CardText } from "../Card/styles";
import { ContentsView, MiddleView, TopView } from "./styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import { TouchableOpacity, View } from "react-native";
import { motify, MotiView, useAnimationState } from "moti";

export default function Contents({ title, data }) {
  const [isClosed, setIsClosed] = useState(true);
  const [iconName, setIconName] = useState("chevron-up");
  const [middleHight, setMiddleHeight] = useState(245);

  const viewAnimated = useAnimationState({
    close: {
      transform: [{ translateY: 0 }],
    },
    open: {
      transform: [{ translateY: -250 }],
    },
  });

  const middleAnimated = useAnimationState({
    close: {
      height: 245,
    },
    open: {
      height: 491,
    },
  });

  function handleAnimateView(state) {
    viewAnimated.transitionTo(state);
  }
  function handleAnimateMiddle(state) {
    middleAnimated.transitionTo(state);
  }

  return (
    <MotiView state={viewAnimated}>
      <ContentsView>
        <TopView>
          <CardText size={16}>Today, 06 dec</CardText>
          <TouchableOpacity
            onPress={() => {
              isClosed ? handleAnimateView("open") : handleAnimateView("close");
              isClosed
                ? handleAnimateMiddle("open")
                : handleAnimateMiddle("close");
              isClosed
                ? setIconName("chevron-down")
                : setIconName("chevron-up");
              setIsClosed(!isClosed);
            }}
          >
            <FeatherIcon name={iconName} size={40} color={"#fff"} />
          </TouchableOpacity>
        </TopView>
        <MotiView style={{ height: 245 }} state={middleAnimated}>
          {data}
        </MotiView>
        <BottonOptions screen={0} />
      </ContentsView>
    </MotiView>
  );
}
