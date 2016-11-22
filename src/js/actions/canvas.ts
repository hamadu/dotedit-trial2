export interface CanvasAction {
  type: string;
  y: number;
  x: number;
  color: number;
}

export function touchCanvas(mode: string, y: number, x: number) {
  return { type: mode, y: y, x: x, color: 1 };
}
