export interface GlobalState {
  canvas: CanvasState;
  tool: ToolState;
  color: ColorState;
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

export interface ColorState {
  selectedColor: number;
  colorMap: string[];
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

export function buildInitialColorState(): ColorState {
  return {
    selectedColor: 0,
    colorMap: ['#fff', '#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f', '#000', '#888']
  }
}
