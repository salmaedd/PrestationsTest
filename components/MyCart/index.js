/**
 *
 * Product
 *
 */

import React, { memo, useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Modal from "react-native-modal";
import { findOcc } from "../../utils/MainMethods";

const deviceWitdh = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    margin: 0,
    marginTop: 120,
    borderRadius: 14,
  },
  content: {
    flex: 1,
    marginHorizontal: 10,
  },
  main: {
    width: deviceWitdh / 2 - 40,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ededed",
    borderColor: "#e0e0e0",
    borderRadius: 20,
    marginVertical: 10,
    height: 120,
    margin: 15,
  },
  duration: {
    marginHorizontal: 10,
    marginVertical: 10,
    color: "#24378b",
    fontSize: 14,
    alignSelf: "center",
  },
  plusButton: {
    marginHorizontal: 10,
    marginVertical: 10,
    marginTop: 5,
    color: "red",
    fontSize: 29,

    alignSelf: "center",
  },
  title: {
    color: "#3b3b3b",
    fontWeight: "bold",
    fontSize: 14,
    marginHorizontal: 10,
    marginVertical: 10,
    marginBottom: 5,
    alignSelf: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  price: {
    marginHorizontal: 10,
    marginVertical: 10,
    color: "#7a879d",
    fontSize: 14,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

function MyCart(props) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (props?.data) {
      let key = "reference";
      setCartItems(findOcc(props.data, key));
      console.log("===========>", findOcc(props.data, key));
    }
  }, [props]);

  return (
    <Modal
      testID={"modal"}
      isVisible={props.isVisible}
      onSwipeComplete={props.toggleModal}
      propagateSwipe={true}
      style={styles.view}
      transparent={true}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
    >
      <View>
        <TouchableOpacity
          onPress={() => props.toggleModal()}
          style={{
            marginLeft: 16,
            marginVertical: 16,
          }}
        >
          <Text style={{ fontSize: 20 }}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <FlatList
          numColumns={2}
          data={cartItems}
          renderItem={({ item, index }) => (
            <View style={styles.main}>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={styles.duration} numberOfLines={1}>
                    {item.occurrence + " X "}
                  </Text>
                  <Text style={styles.title} numberOfLines={2}>
                    {item.title}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      props.onPress(item.reference);
                    }}
                  >
                    <Text style={styles.plusButton} numberOfLines={1}>
                      {"-"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.reference}
        />
      </View>
    </Modal>
  );
}

export default memo(MyCart);
