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
  ActivityIndicator,
  Dimensions,
} from "react-native";

import { Image } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import PrestationImage from "../../assets/noImage.png";

const deviceWitdh = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  main: {
    width: deviceWitdh / 2 - 40,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingVertical: 10,
    height: 170,
  },
  boxShadow: {
    shadowOffset: { width: 6, height: 10 },
    shadowColor: "rgba(228, 232, 239, 0.45)",
    shadowOpacity: 1.0,
  },
  productContainer: {
    width: 130,
    height: 90,
    borderRadius: 10,
    marginBottom: 10,
  },
  duration: {
    color: "#24378b",
    fontSize: 14,
    textAlign: "center",
  },
  plusButton: {
    marginTop: 5,
    color: "grey",
    fontSize: 29,
    textAlign: "center",
  },
  title: {
    color: "#3b3b3b",
    fontWeight: "bold",
    fontSize: 14,
    width: 120,
    textAlign: "center",
    marginBottom: 5,
  },
  price: {
    color: "#7a879d",
    fontSize: 14,
    fontWeight: "bold",
  },
});

function Prestation(props) {
  return (
    <View style={[styles.main, styles.boxShadow]}>
      {/* <Image
        source={require("../../assets/noImage.png")}
        style={styles.productContainer}
        PlaceholderContent={<ActivityIndicator />}
      /> */}
      <Text style={styles.title} numberOfLines={1}>
        {props.title}
      </Text>
      <Text style={styles.price}>{props.price}</Text>
      <Text style={styles.duration} numberOfLines={1}>
        {props.duration}
      </Text>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.plusButton} numberOfLines={1}>
          {"+"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default memo(Prestation);
