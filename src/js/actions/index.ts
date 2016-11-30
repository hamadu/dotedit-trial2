import { touchCanvas } from "./canvas"
import { changeTool } from "./tool"

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
}

export default DispatchActions;
