import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { SIZES, FONTS } from "../../constants/theme";
import { icons } from "../../constants/icons";
import AccountSettingOptions from "../../components/AccountSettingOptions";

const MyProfileScreen = ({ navigation }) => {
  const theme = useTheme();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginHorizontal: SIZES.margin.medium }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginVertical: SIZES.margin.large,
        }}
      >
        <View
          style={{
            width: 90,
            height: 90,
            backgroundColor: theme.colors.border,
            borderRadius: SIZES.radius.pill,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={icons.user_two}
            style={{ width: 30, height: 30, tintColor: theme.colors.primary }}
          />
        </View>
        <Text
          style={{
            color: theme.colors.text,
            ...FONTS.h6,
            marginTop: SIZES.margin.small,
          }}
        >
          Mohammed Thasthakir
        </Text>
        <Text
          style={{
            color: "grey",
            ...FONTS.body2,
            fontFamily: "Poppins-Medium",
          }}
        >
          6369383954
        </Text>
      </View>
      <View>
        <Text
          style={{
            ...FONTS.body1,
            color: theme.colors.text,
            marginVertical: SIZES.margin.large,
            fontFamily: "Poppins-SemiBold",
          }}
        >
          Account Settings
        </Text>

        <AccountSettingOptions
          icon={icons.user}
          title={"Profile Settings"}
          onPress={() => navigation.navigate("EditProfile")}
        />
        <AccountSettingOptions
          icon={icons.lock}
          title={"Change Password"}
          containerStyle={{
            marginVertical: SIZES.margin.large,
          }}
          onPress={() => navigation.navigate("ChangePassword")}
        />
        <AccountSettingOptions
          icon={icons.bell}
          title={"Notifications"}
          onPress={() => navigation.navigate("Notifications")}
        />
        <AccountSettingOptions
          icon={icons.terms}
          title={"Terms & Conditions"}
          containerStyle={{
            marginVertical: SIZES.margin.large,
          }}
          onPress={() => navigation.navigate("TermsCondition")}
        />
      </View>
      <View
        style={{ flexDirection: "row", marginVertical: SIZES.margin.large }}
      >
        <Image
          source={icons.logout}
          style={{ width: 20, height: 20, tintColor: "red" }}
        />
        <Text
          style={{
            color: "red",
            marginLeft: SIZES.margin.large,
            ...FONTS.body2,
            fontFamily: "Poppins-Medium",
          }}
        >
          Log out
        </Text>
      </View>
    </ScrollView>
  );
};

export default MyProfileScreen;
