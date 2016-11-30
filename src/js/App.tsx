import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { Dispatch, createStore, combineReducers, compose } from "redux";
import DevTools from './containers/DevTools'

import { GlobalState } from './states'
import reducer from './reducers'
import DispatchActions from "./actions"
// import { changeTool } from "./actions/tool"
import { DotApp } from "./components/DotApp"

const enhancer = compose(
  DevTools.instrument()
);

const store = createStore(reducer, {}, enhancer);

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
    <div>
      <DotAppComponent />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById("app")
);
