import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const TextButton = ({
  title,
  onPress,
  disabled,
  titleStyle,
  containerStyle,
}) => {
  // Styles using StyleSheet
  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontFamily: "Poppins-Medium",
    },
    disabledButton: {
      opacity: 0.6, // Reduce opacity for disabled state
    },
  });
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, containerStyle, disabled && styles.disabledButton]}
    >
      <Text style={[styles.text, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;
