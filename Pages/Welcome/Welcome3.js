import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  WelcomeText,
  WelcomeSpecialText,
  WelcomeView,
  WelcomeTitleView,
  WelcomeTextView,
  WelcomeSpecialView,
  NextStepButtom,
} from "./styles";
import { isFirstTime } from "../../Backend/Storage";
import { MotiView } from "moti";

export default function Welcome3() {
  const navigation = useNavigation();
  isFirstTime();

  return (
    <WelcomeView>
      <MotiView
        from={{ translateX: -400 }}
        animate={{ translateX: 0 }}
        transition={{
          type: "timing",
          duration: 600,
        }}
      >
        <WelcomeTitleView>
          <WelcomeText isTitle={true}>Great!</WelcomeText>
        </WelcomeTitleView>
      </MotiView>
      <MotiView
        from={{ translateX: -400 }}
        animate={{ translateX: 0 }}
        transition={{
          type: "timing",
          duration: 850,
        }}
      >
        <WelcomeTextView>
          <WelcomeText isTitle={false}>We are ready to</WelcomeText>
          <WelcomeSpecialView>
            <WelcomeText isTitle={false}>start </WelcomeText>
            <WelcomeSpecialText>Financy</WelcomeSpecialText>
            <WelcomeText isTitle={false}>!</WelcomeText>
          </WelcomeSpecialView>
        </WelcomeTextView>
      </MotiView>
      <NextStepButtom
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "timing",
            duration: 3200,
          }}
        >
          <AntDesign name="right" size={35} color={"#fff"} />
        </MotiView>
      </NextStepButtom>
    </WelcomeView>
  );
}
