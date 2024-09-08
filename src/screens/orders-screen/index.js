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
import OrderCard from "../../components/OrderCard";
import { ORDER_TABS } from "../../constants/constants";

const OrdersScreen = () => {
  const navigation = useNavigation();
  const [selectedOrderTab, setSelectedOrderTab] = useState(1);
  const [orders, setOrders] = useState([1, 2]);
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
          {ORDER_TABS.map((order, index) => (
            <Pressable
              key={order.id}
              style={{
                padding: SIZES.padding.medium,
                borderRadius: SIZES.radius.pill,
                marginRight: SIZES.margin.small,
                backgroundColor:
                  selectedOrderTab === order.id
                    ? theme.colors.primary
                    : theme.colors.border,
              }}
              onPress={() => {
                setSelectedOrderTab(order.id);
                if (order.id === 2) {
                  setOrders([1]);
                } else if (order.id === 3) {
                  setOrders([1, 2, 3, 4, 5, 6, 7, 8]);
                } else {
                  setOrders([1, 2]);
                }
              }}
            >
              <Text
                style={{
                  ...FONTS.body3,
                  fontFamily: "Poppins-Medium",
                  color:
                    selectedOrderTab === order.id ? "white" : theme.colors.text,
                }}
              >
                {order.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginBottom: SIZES.margin.small,
        }}
        data={orders}
        renderItem={() => (
          <OrderCard disabled={true} buttonTitle={"Accept Order"} />
        )}
      />
    </View>
  );
};

export default OrdersScreen;
