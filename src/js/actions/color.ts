export interface ColorAction {
  type: string;
  colorID: number;
  newColor?: string;
}

export function changeColor(colorID: number): ColorAction {
  return { type: 'CHANGE_COLOR', colorID };
}

export function changeColorMap(colorID: number, newColor: string): ColorAction {
  return { type: 'CHANGE_COLOR_MAP', colorID, newColor };
}
