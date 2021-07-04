/**
 *
 * Product
 *
 */

import React, { memo } from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const deviceWitdh = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  cartTotal: {
    position: "absolute",
    bottom: 15,
    backgroundColor: "grey",
    width: deviceWitdh - 20,
    height: 70,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    borderRadius: 30,
  },
});

function TotalCart(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.cartTotal}>
        <View style={{ flexDirection: "row" }}>
          <Text>Total Price : {props.totalPrice}€</Text>
          <Text> Total Hours : {props.totalHours} h</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default memo(TotalCart);
