import * as React from "react";
import { GlobalState } from "../models/GlobalState";
import { DispatchActions } from "../models/DispatchActions";
import { DotCanvas } from "./DotCanvas"

interface Props {
  onTouchDot: (y: number, x: number, mode: string) => void;
}

export class TouchScreen extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);

    this.event = this.event.bind(this);
  }

  event(e: React.MouseEvent<HTMLDivElement>, mode: string) {
    const div = (e.target as HTMLDivElement).parentNode.parentNode as HTMLDivElement;

    const y = ((e.pageY - div.offsetTop) / 16) | 0;
    const x = ((e.pageX - div.offsetLeft) / 16) | 0;
    this.props.onTouchDot(y, x, mode);
  }

  render() {
    return (
      <div
        style={{ width: '100%', height: '100%' }}
        onMouseDown= {(e) => this.event(e, 'down')}
        onMouseMove= {(e) => this.event(e, 'move')}
        onMouseUp=   {(e) => this.event(e, 'up')}
        onMouseLeave={(e) => this.event(e, 'leave')}>
      </div>
    );
  }
}
