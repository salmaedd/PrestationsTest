/**
 *
 * HomeContainer
 *
 */
import React, { useEffect, useState } from "react";

import { View, Text, StyleSheet, LogBox } from "react-native";
import { compose } from "redux";

import { useInjectSaga } from "../../utils/injectSaga";
import { useInjectReducer } from "../../utils/injectReducer";
import makeSelectHomeContainer from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getPrestationsData } from "./actions";

LogBox.ignoreAllLogs();

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
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
  }, [props]);

  const ref = React.createRef();
  return (
    <View style={styles.mainView}>
      <Text> WeCasa Test App !</Text>
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
