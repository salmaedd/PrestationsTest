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
    backgroundColor: "#CCCCCC",
    width: deviceWitdh - 20,
    height: 70,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    borderRadius: 30,
  },
  text: {
    fontSize: 14,
    color: "black",
    marginRight: 10,
  },
  textTotal: {
    fontSize: 14,
    color: "white",
    marginRight: 10,
  },
});

function TotalCart(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.cartTotal}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
          }}
        >
          <Text style={styles.text}>Total Price : </Text>
          <Text style={styles.textTotal}>{props.totalPrice}€</Text>
          <Text style={styles.text}> Total Hours :</Text>
          <Text style={styles.textTotal}> {props.totalHours}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default memo(TotalCart);
