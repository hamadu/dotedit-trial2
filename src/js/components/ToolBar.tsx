import * as React from "react";

interface Props {
  currentTool: number,
  onChangeTool: (toID: number) => void;
}

export class ToolBar extends React.Component<Props, {}> {
  render() {
    const selectedStyle = {
      fontWeight: 'bold'
    };

    return (
      <div>
        <button style={this.props.currentTool == 0 ? selectedStyle : {}} onClick={() => this.props.onChangeTool(0)}>鉛筆</button>
        <button style={this.props.currentTool == 1 ? selectedStyle : {}} onClick={() => this.props.onChangeTool(1)}>線分</button>
        <button style={this.props.currentTool == 2 ? selectedStyle : {}} onClick={() => this.props.onChangeTool(2)}>長方形</button>
      </div>
    );
  }
}
