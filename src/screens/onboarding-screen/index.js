import { View, Image, Text } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { icons } from "../../constants/icons";
import { useTheme } from "@react-navigation/native";
import { FONTS } from "../../constants/theme";
import { SCREENS } from "../../constants/constants";

const OnboardingScreen = ({ navigation }) => {
  const theme = useTheme();

  const handleOnDone = () => {
    navigation.replace(SCREENS.SIGN_IN.name);
  };
  return (
    <View style={{ flex: 1 }}>
      <Onboarding
        onDone={handleOnDone}
        onSkip={handleOnDone}
        pages={[
          {
            backgroundColor: theme.colors.background,
            image: <Image source={icons.all_orders} />,
            title: "Onboarding",
            subtitle: "Done with React Native Onboarding Swiper",
            titleStyles: {
              ...FONTS.h4,
            },
            subTitleStyles: {
              ...FONTS.body2,
            },
          },
          {
            backgroundColor: theme.colors.background,
            image: <Image source={icons.pending_orders} />,
            title: "The Title",
            subtitle: "This is the subtitle that sumplements the title.",
          },
          {
            backgroundColor: theme.colors.background,
            image: <Image source={icons.completed_orders} />,
            title: "Triangle",
            subtitle: "Beautiful, isn't it?",
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;
