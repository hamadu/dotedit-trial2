export interface GlobalState {
  canvas: CanvasState;
  tool: ToolState;
}

export interface CanvasState {
  dots: number[][];
  previewDots: number[][];
  mouse: boolean;
  lastY: number;
  lastX: number;
}

export interface ToolState {
  type: number;
}

export function buildInitialCanvasState(x: number, y: number): CanvasState {
  let dots: number[][] = [];

  for (var i = 0 ; i < y ; i++) {
    let row: number[] = [];
    for (var j = 0 ; j < x ; j++) {
      row.push(0);
    }
    dots.push(row);
  }

  return {
    dots: dots,
    previewDots: dots,
    mouse: false,
    lastY: 0,
    lastX: 0
  };
}

export function buildInitialToolState(): ToolState {
  return { type: 0 }
}
