export interface GlobalState {
  dots: number[][];
  mouse: boolean;
  lastY: number;
  lastX: number;
}

export function buildInitialState(x: number, y: number): GlobalState {
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
    mouse: false,
    lastY: 0,
    lastX: 0
  };
}
