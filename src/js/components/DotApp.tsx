import * as React from "react";
import { CanvasState, ToolState, ColorState } from "../states";

import { TouchScreen } from "./TouchScreen"
import { DotCanvas } from "./DotCanvas"
import { ToolBar } from "./ToolBar"
import { ColorPalette } from "./ColorPalette"

interface Props {
  canvas: CanvasState;
  tool: ToolState;
  color: ColorState;
  actions: any;
}

export class DotApp extends React.Component<Props, {}> {
  constructor(props: Object) {
    super(props);

    this.touchCanvas = this.touchCanvas.bind(this);
    this.changeTool = this.changeTool.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  touchCanvas(y: number, x: number, mode: string) {
    this.props.actions.touchCanvas(y, x, mode);
  }

  changeTool(toId: number) {
    this.props.actions.changeTool(toId);
  }

  changeColor(toId: number) {
    console.log(toId);
  }

  render() {
    const height = this.props.canvas.dots.length * 16;
    const width = this.props.canvas.dots[0].length * 16;

    return (
      <div>
        <h1>Hello</h1>

        <div>
          <ColorPalette currentColor={this.props.color.selectedColor}
                        colorMap={this.props.color.colorMap}
                        onChangeColor={this.changeColor} />
        </div>

        <div>
          <ToolBar currentTool={this.props.tool.type} onChangeTool={this.changeTool} />
        </div>

        <div style={{ opacity: 0.5 }}>
          <DotCanvas dots={this.props.canvas.previewDots} />
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0  }}>
            <DotCanvas dots={this.props.canvas.dots} />
          </div>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: '#eee',
            opacity: 0.0 ,
            width: width,
            height: height
          }}>
            <TouchScreen onTouchDot={this.touchCanvas} />
          </div>
        </div>
      </div>
    );
  }
}
