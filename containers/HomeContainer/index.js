/**
 *
 * HomeContainer
 *
 */
import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  LogBox,
  FlatList,
  Dimensions,
} from "react-native";
import { compose } from "redux";

import { useInjectSaga } from "../../utils/injectSaga";
import { useInjectReducer } from "../../utils/injectReducer";
import makeSelectHomeContainer from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getPrestationsData } from "./actions";
import Prestation from "../../components/Prestation";
import TotalCart from "../../components/TotalCart";

import { ScrollView } from "react-native-gesture-handler";

LogBox.ignoreAllLogs();
const deviceWitdh = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  PrestationsCard: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  PrestationsTitle: {
    fontWeight: "500",
    color: "#7a879d",
    fontSize: 16,
  },
  categorie: {
    fontSize: 16,
    color: "black",
    fontWeight: "500",
    marginHorizontal: 10,
  },
});

export function HomeContainer(props) {
  useInjectReducer({ key: "homeContainer", reducer });
  useInjectSaga({ key: "homeContainer", saga });

  const [womanCategorie, setWomanCategorie] = useState([]);
  const [menCategorie, setMenCategorie] = useState([]);
  const [childrenCategorie, setChildrenCategorie] = useState([]);
  const [womanCategorieTitle, setWomanCategorieTitle] = useState("");
  const [menCategorieTitle, setMenCategorieTitle] = useState("");
  const [childrenCategorieTitle, setChildrenCategorieTitle] = useState("");

  const { getPrestations } = props;

  useEffect(() => {
    getPrestations();
  }, [getPrestations]);

  useEffect(() => {
    if (props?.homeContainer?.prestations?.categories) {
      setMenCategorie(
        props.homeContainer.prestations.categories[
          Object.keys(props.homeContainer.prestations.categories)[0]
        ]
      );
      setWomanCategorie(
        props.homeContainer.prestations.categories[
          Object.keys(props.homeContainer.prestations.categories)[1]
        ]
      );
      setChildrenCategorie(
        props.homeContainer.prestations.categories[
          Object.keys(props.homeContainer.prestations.categories)[2]
        ]
      );
      setMenCategorieTitle(
        props.homeContainer.prestations.categories[
          Object.keys(props.homeContainer.prestations.categories)[0]
        ].title
      );
      setWomanCategorieTitle(
        props.homeContainer.prestations.categories[
          Object.keys(props.homeContainer.prestations.categories)[1]
        ].title
      );
      setChildrenCategorieTitle(
        props.homeContainer.prestations.categories[
          Object.keys(props.homeContainer.prestations.categories)[2]
        ].title
      );
    }
    console.log("props?????", menCategorie);
  }, [props]);

  const ref = React.createRef();
  return (
    <View style={styles.mainView}>
      <View style={{ flexDirection: "row", marginTop: 80 }}>
        <Text style={styles.categorie}>Category:</Text>
        <Text style={styles.PrestationsTitle}>{menCategorieTitle}</Text>
      </View>
      <ScrollView>
        <FlatList
          data={menCategorie.prestations}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={styles.PrestationsCard}>
              <Prestation
                title={item.title}
                duration={item.duration + " Min"}
                price={item.price + "€"}
              />
            </View>
          )}
          keyExtractor={(item) => item.reference}
        />

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={styles.categorie}>Category:</Text>
          <Text style={styles.PrestationsTitle}>{womanCategorieTitle}</Text>
        </View>

        <FlatList
          data={womanCategorie.prestations}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={styles.PrestationsCard}>
              <Prestation
                title={item.title}
                duration={item.duration + " Min"}
                price={item.price + "€"}
              />
            </View>
          )}
          keyExtractor={(item) => item.reference}
        />

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text style={styles.categorie}>Category:</Text>
          <Text style={styles.PrestationsTitle}>{childrenCategorieTitle}</Text>
        </View>

        <FlatList
          data={childrenCategorie.prestations}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <View style={styles.PrestationsCard}>
              <Prestation
                title={item.title}
                duration={item.duration + " Min"}
                price={item.price + "€"}
              />
            </View>
          )}
          keyExtractor={(item) => item.reference}
        />
      </ScrollView>

      <TotalCart totalPrice={"200000"} totalHours={300} />
    </View>
  );
}

const mapStateToProps = createStructuredSelector({
  homeContainer: makeSelectHomeContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPrestations: () => {
      dispatch(getPrestationsData());
    },
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomeContainer);
