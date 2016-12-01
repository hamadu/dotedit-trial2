import { touchCanvas } from "./canvas"
import { changeTool } from "./tool"
import { changeColor, changeColorMap } from "./color"

class DispatchActions {
  private dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any){
    this.dispatch = dispatch;
  }

  public touchCanvas(y: number, x: number, mode: string) {
    this.dispatch(touchCanvas(mode, y, x));
  }

  public changeTool(toolID: number) {
    this.dispatch(changeTool(toolID))
  }

  public changeColor(colorID: number) {
    this.dispatch(changeColor(colorID))
  }

  public changeColorMap(colorID: number, newColor: string) {
    this.dispatch(changeColorMap(colorID, newColor))
  }
}

export default DispatchActions;
