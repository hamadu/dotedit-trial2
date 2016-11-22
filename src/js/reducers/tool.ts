import { ToolState, buildInitialToolState } from "../states";
import { ToolAction } from "../actions/tool";

const INITIAL_STATE: ToolState = buildInitialToolState();

function toolReducer(state = INITIAL_STATE, action: ToolAction) {
  switch (action.type) {
    case "CHANGE_TOOL": return change_tool(state, action);
    default: return state
  }
}

function change_tool(state: ToolState, action: ToolAction): ToolState {
  return { type: action.toolType };
}

export default toolReducer;
