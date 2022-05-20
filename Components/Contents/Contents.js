import React, { useState } from "react";
import { CardText } from "../Card/styles";
import { ContentsView, TopView } from "./styles";
import FeatherIcon from "react-native-vector-icons/Feather";
import { TouchableOpacity, View } from "react-native";
import { motify, MotiView, useAnimationState } from "moti";

export default function Contents({ title, data }) {
  const [isClosed, setIsClosed] = useState(true);
  const [iconName, setIconName] = useState("chevron-up");

  const viewAnimated = useAnimationState({
    close: {
      transform: [{ translateY: 0 }],
    },
    open: {
      transform: [{ translateY: -200 }],
    },
  });

  function handleAnimateView(state) {
    viewAnimated.transitionTo(state);
  }

  return (
    <MotiView style={{}}>
      <ContentsView>
        <TopView>
          <CardText size={16}>Today, 06 dec</CardText>
          <TouchableOpacity
            onPress={() => {
              isClosed ? handleAnimateView("open") : handleAnimateView("close");
              isClosed
                ? setIconName("chevron-down")
                : setIconName("chevron-up");
              setIsClosed(!isClosed);
            }}
          >
            <FeatherIcon name={iconName} size={40} color={"#fff"} />
          </TouchableOpacity>
        </TopView>
        <View>{data}</View>
      </ContentsView>
    </MotiView>
  );
}
