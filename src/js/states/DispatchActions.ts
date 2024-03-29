export class DispatchActions {
  private dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any){
    this.dispatch = dispatch;
  }

  public touch(y: number, x: number, mode: string) {
    this.dispatch({ type: mode, y: y, x: x, color: 1 });
  }

  public changeTool(toolID: number) {
    this.dispatch({ type: 'CHANGE_TOOL', toolID: toolID })
  }
}
