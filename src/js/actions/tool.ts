export interface ToolAction {
  type: string;
  toolType: number;
}

export function changeTool(toolType: number) {
  return { type: 'CHANGE_TOOL', toolType: toolType };
}
