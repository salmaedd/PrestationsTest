/**
 *
 * HomeContainer
 *
 */
import React, { useEffect } from "react";
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
    backgroundColor: "#f2f4f8",
    justifyContent: "center",
  },
});

export function HomeContainer(props) {
  useInjectReducer({ key: "homeContainer", reducer });
  useInjectSaga({ key: "homeContainer", saga });

  const { getPrestations } = props;

  useEffect(() => {
    getPrestations();
  }, [getPrestations]);

  const ref = React.createRef();
  return (
    <View style={styles.mainView}>
      <View style={styles.serachBar}></View>
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
