import * as React from "react";
import { GlobalState } from "../models/GlobalState";
import { DispatchActions } from "../models/DispatchActions";

import { TouchScreen } from "./TouchScreen"
import { DotCanvas } from "./DotCanvas"

interface Props {
  value: GlobalState;
  actions: DispatchActions;
}

export class DotApp extends React.Component<Props, {}> {
  constructor(props: Object) {
    super(props);

    this.touchDot = this.touchDot.bind(this);
  }

  touchDot(y: number, x: number, mode: string) {
    this.props.actions.touch(y, x, mode);
  }

  render() {
    const height = this.props.value.dots.length * 16;
    const width = this.props.value.dots[0].length * 16;

    return (
      <div>
        <h1>Hello</h1>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0  }}>
            <DotCanvas dots={this.props.value.dots} />
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
            <TouchScreen onTouchDot={this.touchDot} />
          </div>
        </div>

        <div>
          <button onClick={() => this.props.actions.touch(0, 0, 'down')}>push</button>
        </div>
      </div>
    );
  }
}
