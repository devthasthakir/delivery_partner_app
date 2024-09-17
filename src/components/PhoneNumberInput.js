import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { FONTS, SIZES } from "../constants/theme";
import { useTheme } from "@react-navigation/native";


const App = ({ label, errorMsg }) => {
  const [value, setValue] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            ...FONTS.body2,
            color: theme.colors.text,
            fontFamily: "Poppins-Medium",
          }}
        >
          {label}
        </Text>
        <Text
          style={{
            color: "red",
            ...FONTS.body3,
            fontFamily: "Poppins-Medium",
          }}
        >
          {errorMsg}
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: "grey",
          marginVertical: 10,
          borderRadius: SIZES.radius.medium,
          height: SIZES.buttonHeight.large,
        }}
      >
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="IN"
          layout="first"
          onChangeText={(text) => {
            setValue(text);
          }}
          onChangeFormattedText={(text) => {
            setFormattedValue(text);
            setCountryCode(phoneInput.current?.getCountryCode() || "");
          }}
          countryPickerProps={{ withAlphaFilter: true }}
          disabled={disabled}
          withDarkTheme
          containerStyle={{
            borderRadius: SIZES.radius.medium,
          }}
          textContainerStyle={{
            backgroundColor: "white",
            marginLeft: -SIZES.margin.medium,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  button: {
    marginTop: 20,
    height: 50,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7CDB8A",
    shadowColor: "rgba(0,0,0,0.4)",
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
  redColor: {
    backgroundColor: "#F57777",
  },
  message: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export default App;
