import React from 'react';
import { TextInput, StyleSheet, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-screen';

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  style,
  containerStyle,
  placeholderTextColor,
  editable,
  multiline,
  numberOfLines,
  maxLength,
  leftIcon,
  rightIcon,
  iconSize,
  iconColor,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.inputContainer}>
        {leftIcon && (
          <Image
            source={leftIcon}
            style={[styles.icon, { width: iconSize, height: iconSize, tintColor: iconColor }]}
          />
        )}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          style={[styles.input, style]}
          placeholderTextColor={placeholderTextColor}
          editable={editable}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
        />
        {rightIcon && (
          <Image
            source={rightIcon}
            style={[styles.icon, { width: iconSize, height: iconSize, tintColor: iconColor }]}
          />
        )}
      </View>
    </View>
  );
};

// Styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: responsiveWidth(2), // Responsive border radius
    paddingHorizontal: responsiveWidth(2), // Responsive padding
    height: responsiveHeight(6), // Responsive height
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: responsiveFontSize(2), // Responsive font size
  },
  icon: {
    marginHorizontal: responsiveWidth(1), // Responsive margin
  },
});

// Prop Types
CustomTextInput.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  placeholderTextColor: PropTypes.string,
  editable: PropTypes.bool,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  maxLength: PropTypes.number,
  leftIcon: PropTypes.oneOfType([
    PropTypes.number, // For local images
    PropTypes.object, // For remote images
  ]),
  rightIcon: PropTypes.oneOfType([
    PropTypes.number, // For local images
    PropTypes.object, // For remote images
  ]),
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
};

// Default Props
CustomTextInput.defaultProps = {
  value: '',
  placeholder: '',
  secureTextEntry: false,
  keyboardType: 'default',
  style: {},
  containerStyle: {},
  placeholderTextColor: '#999',
  editable: true,
  multiline: false,
  numberOfLines: 1,
  maxLength: 100,
  leftIcon: null,
  rightIcon: null,
  iconSize: responsiveWidth(5), // Responsive icon size
  iconColor: '#000',
};

export default CustomTextInput;
