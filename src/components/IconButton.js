import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";
import PropTypes from "prop-types";

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

// Prop Types
IconButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([
    PropTypes.number, // For local images
    PropTypes.object, // For remote images
  ]),
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
  titleStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  iconPosition: PropTypes.oneOf(["left", "right"]),
};

// Default Props
IconButton.defaultProps = {
  disabled: false,
  containerStyle: {},
  iconPosition: "left",
};

export default IconButton;
