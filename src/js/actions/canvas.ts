export interface CanvasAction {
  type: string;
  y: number;
  x: number;
  color: number;
}

export function touchCanvas(mode: string, y: number, x: number, color: number) {
  return { type: mode, y, x, color };
}
