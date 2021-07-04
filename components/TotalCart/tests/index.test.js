/**
 *
 * Tests for TotalCart
 *
 * @see https://github.com/keremcubuk/react-native-boilerplate/tree/master/docs/testing
 *
 */

import React from "react";
import { render } from "@testing-library/react";

import TotalCart from "../index";

describe("<TotalCart />", () => {
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    render(<TotalCart />);
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
    } = render(<TotalCart />);
    expect(firstChild).toMatchSnapshot();
  });
});
