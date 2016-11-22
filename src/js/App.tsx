import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { Dispatch, createStore, combineReducers } from "redux";

import { GlobalState } from './states'
import reducer from './reducers'
import DispatchActions from "./actions"
// import { changeTool } from "./actions/tool"
import { DotApp } from "./components/DotApp"

const store = createStore(reducer)

const mapStateToProps = (state: GlobalState) => {
  return {
    canvas: state.canvas,
    tool: state.tool
  }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    actions: new DispatchActions(dispatch)
  }
}

const DotAppComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(DotApp);

ReactDOM.render(
  <Provider store={store} >
    <DotAppComponent />
  </Provider>,
  document.getElementById("app")
);
