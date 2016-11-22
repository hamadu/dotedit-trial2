import * as React from "react";

interface Props {
  currentTool: number,
  onChangeTool: (toID: number) => void;
}

export class ToolBar extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <button onClick={() => this.props.onChangeTool(0)}>鉛筆</button>
        <button onClick={() => this.props.onChangeTool(1)}>線分</button>
        <button onClick={() => this.props.onChangeTool(2)}>長方形</button>
      </div>
    );
  }
}
