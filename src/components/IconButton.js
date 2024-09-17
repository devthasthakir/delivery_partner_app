import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";

const IconButton = ({
  title,
  onPress,
  icon,
  iconSize,
  iconColor,
  disabled,
  titleStyle,
  containerStyle,
  iconPosition,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, containerStyle, disabled && styles.disabledButton]}
    >
      <View style={styles.content}>
        {icon && iconPosition === "left" && (
          <Image
            source={icon}
            style={[
              styles.icon,
              {
                width: iconSize || 24,
                height: iconSize || 24,
                tintColor: iconColor,
              },
            ]}
          />
        )}
        <Text style={[styles.text, titleStyle]}>{title}</Text>
        {icon && iconPosition === "right" && (
          <Image
            source={icon}
            style={[
              styles.icon,
              {
                width: iconSize || 24,
                height: iconSize || 24,
                tintColor: iconColor,
              },
            ]}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

// Styles using StyleSheet
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
  },
  disabledButton: {
    opacity: 0.6,
  },
  icon: {
    marginHorizontal: 8,
  },
});

export default IconButton;
