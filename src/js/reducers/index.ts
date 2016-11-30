import { combineReducers } from "redux";
import canvas from "./canvas"
import tool from "./tool"
import color from "./color"

const rootReducer = combineReducers({
  canvas,
  tool,
  color
});

export default rootReducer;
