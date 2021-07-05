/**
 *
 * Tests for MyCart
 *
 * @see https://github.com/keremcubuk/react-native-boilerplate/tree/master/docs/testing
 *
 */

import React from "react";
import { render } from "@testing-library/react";

import MyCart from "../index";

describe("<MyCart />", () => {
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    render(<MyCart />);
    expect(spy).not.toHaveBeenCalled();
  });

  it("Expect to have additional unit tests specified", () => {
    expect(true).toEqual(false);
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip("Should render and match the snapshot", () => {
    const {
      container: { firstChild },
    } = render(<MyCart />);
    expect(firstChild).toMatchSnapshot();
  });
});
