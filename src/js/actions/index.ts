import { touchCanvas } from "./canvas"
import { changeTool } from "./tool"
import { changeColor } from "./color"

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
}

export default DispatchActions;
