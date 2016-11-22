import { combineReducers } from "redux";
import canvas from "./canvas"
import tool from "./tool"

const rootReducer = combineReducers({
  canvas,
  tool
});

export default rootReducer;
