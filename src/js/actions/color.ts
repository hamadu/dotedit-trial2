export interface ColorAction {
  type: string;
  colorID: number;
}

export function changeColor(colorID: number) {
  return { type: 'CHANGE_COLOR', colorID: colorID };
}
