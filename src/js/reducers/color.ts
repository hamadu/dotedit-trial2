import { ColorState, buildInitialColorState } from "../states";
import { ColorAction } from "../actions/color";

const INITIAL_STATE: ColorState = buildInitialColorState();

function colorReducer(state = INITIAL_STATE, action: ColorAction) {
  switch (action.type) {
    case "CHANGE_COLOR": return change_color(state, action);
    default: return state
  }
}

function change_color(state: ColorState, action: ColorAction): ColorState {
  return { selectedColor: action.colorID, colorMap: state.colorMap };
}

export default colorReducer;
