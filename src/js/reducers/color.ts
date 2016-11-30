import { ColorState, buildInitialColorState } from "../states";
import { ToolAction } from "../actions/tool";

const INITIAL_STATE: ColorState = buildInitialColorState();

function colorReducer(state = INITIAL_STATE, action: ToolAction) {
  return state;
}

export default colorReducer;
