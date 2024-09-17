import React from "react";
import AnimatedLoader from "react-native-animated-loader";
import { animations } from "../constants/animations";

const LoadingAnimation = ({ visible }) => {
  return (
    <AnimatedLoader
      visible={visible}
      overlayColor="rgba(255,255,255,0.75)"
      source={animations.loading_animation}
      animationStyle={{
        width: 150,
        height: 150,
      }}
      speed={1}
    ></AnimatedLoader>
  );
};

export default LoadingAnimation;
