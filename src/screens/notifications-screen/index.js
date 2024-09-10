import {
  View,
  Text,
  Button,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { SIZES, FONTS } from "../../constants/theme";
import { NOTIFICATION_TABS } from "../../constants/constants";
import NotificationItem from "../../components/NotificationItem";

const NotificationScreen = () => {
  const navigation = useNavigation();
  const [selectedOrderTab, setSelectedOrderTab] = useState(1);
  const [notifications, setNotifications] = useState([1, 2]);
  const theme = useTheme();

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          marginHorizontal: SIZES.margin.medium,
          paddingVertical: SIZES.padding.medium,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {NOTIFICATION_TABS.map((notification, index) => (
            <Pressable
              key={notification.id}
              style={{
                paddingVertical: SIZES.padding.medium,
                borderRadius: SIZES.radius.pill,
                marginRight: SIZES.margin.small,
                backgroundColor:
                  selectedOrderTab === notification.id
                    ? theme.colors.primary
                    : theme.colors.border,
                paddingHorizontal: SIZES.padding.large,
              }}
              onPress={() => {
                setSelectedOrderTab(notification.id);
                if (notification.id === 1) {
                  setNotifications([1]);
                } else if (notification.id === 2) {
                  setNotifications([1, 2, 3, 4, 5, 6, 7, 8]);
                } 
              }}
            >
              <Text
                style={{
                  ...FONTS.body3,
                  fontFamily: "Poppins-Medium",
                  color:
                    selectedOrderTab === notification.id
                      ? "white"
                      : theme.colors.text,
                }}
              >
                {notification.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginBottom: SIZES.margin.small,
          marginHorizontal: SIZES.margin.medium,
        }}
        data={notifications}
        renderItem={() => (
          <NotificationItem disabled={true} buttonTitle={"Accept Order"} />
        )}
      />
    </View>
  );
};

export default NotificationScreen;
