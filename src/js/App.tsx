import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { Dispatch, createStore } from "redux";

import { reduce } from './reducers/Reducer'
import { DispatchActions } from "./models/DispatchActions";
import { DotApp } from "./components/DotApp";

let store = createStore(reduce);
const DotAppComponent = connect(
  (store: any) => { return { value: store } },
  (dispatch: Dispatch<any>) => { return { actions: new DispatchActions(dispatch) } }
)(DotApp);

ReactDOM.render(
  <Provider store={store} >
    <DotAppComponent />
  </Provider>,
  document.getElementById("app")
);
