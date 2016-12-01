import { ColorState, buildInitialColorState } from "../states";
import { ColorAction } from "../actions/color";

const INITIAL_STATE: ColorState = buildInitialColorState();

function colorReducer(state = INITIAL_STATE, action: ColorAction) {
  switch (action.type) {
    case "CHANGE_COLOR":     return change_color(state, action);
    case "CHANGE_COLOR_MAP": return change_color_map(state, action);
    default: return state
  }
}

function change_color(state: ColorState, action: ColorAction): ColorState {
  return { selectedColor: action.colorID, colorMap: state.colorMap };
}

function change_color_map(state: ColorState, action: ColorAction): ColorState {
  const newColorMap = [
    ...state.colorMap.slice(0, action.colorID),
    action.newColor,
    ...state.colorMap.slice(action.colorID+1)
  ];
  return { selectedColor: state.selectedColor, colorMap: newColorMap };
}

export default colorReducer;
