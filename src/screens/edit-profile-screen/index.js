import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { SIZES, FONTS } from "../../constants/theme";
import { useTheme } from "@react-navigation/native";
import { icons } from "../../constants/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import FormInput from "../../components/FormInput";
import TextButton from "../../components/TextButton";
import PhoneNumberInput from "../../components/PhoneNumberInput";

const EditProfileScreen = () => {
  const theme = useTheme();
  const [fullName, setFullName] = useState("Mohammed Thasthakir");
  const [email, setEmail] = useState("mohammed.mt392@gmail.com");
  const [phone, setPhone] = useState("");
  return (
    <SafeAreaView
      style={{
        marginHorizontal: SIZES.margin.medium,
        flex: 1,
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginBottom: SIZES.margin.large,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Image
            source={{
              uri: "https://t4.ftcdn.net/jpg/05/79/67/83/360_F_579678392_4Bh9vMB1DP4QXNzE0E2pUHJYLOYpBgwO.jpg",
            }}
            style={{
              width: 100,
              height: 100,
              borderColor: theme.colors.primary,
              borderWidth: 3,
              borderRadius: 75,
            }}
            resizeMode="cover"
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 30,
              height: 30,
              backgroundColor: theme.colors.border,
              borderRadius: 30,
              marginLeft: -30,
            }}
          >
            <Image
              source={icons.pencil}
              style={{
                width: 16,
                height: 16,
                tintColor: theme.colors.primary,
              }}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      <View style={{ marginVertical: SIZES.margin.large }}>
        <View>
          <FormInput
            placeholder={"Enter your name"}
            type="email"
            keyboardType="text"
            label={"Full Name"}
            value={fullName}
            onChangeText={(value) => setFullName(value)}
            startIcon={icons.pencil}
          />
        </View>
        <View style={{ marginTop: SIZES.margin.small }}>
          <FormInput
            placeholder={"Enter your email"}
            type="email"
            label={"Email"}
            value={email}
            keyboardType="email-address"
            autoCompleteType="email"
            onChangeText={(value) => setEmail(value)}
            readOnly={true}
            startIcon={icons.envelope}
            endIcon={icons.correct}
          />
        </View>
        <View style={{ marginTop: SIZES.margin.small }}>
          {/* <Text
            style={{
              ...FONTS.body2,
              color: theme.colors.text,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Phone Number
          </Text>
          <FormInput
            placeholder={"Enter your email"}
            type="email"
            value={"+916369383954"}
          /> */}
          <PhoneNumberInput label={"Phone Number"} />
        </View>
        <TextButton
          title={"Save changes"}
          containerStyle={{
            backgroundColor: theme.colors.primary,
            height: SIZES.buttonHeight.large,
            borderRadius: SIZES.radius.pill,
            marginTop: SIZES.margin.large,
          }}
          titleStyle={{
            color: "white",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
