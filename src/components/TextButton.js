import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const TextButton = ({
  title,
  onPress,
  disabled,
  titleStyle,
  containerStyle,
}) => {
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

// Styles using StyleSheet
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
  },
  disabledButton: {
    opacity: 0.6, // Reduce opacity for disabled state
  },
});



export default TextButton;
