import * as React from "react";
import { DotCell } from "./DotCell"

interface Props {
  dots: number[][];
}

export class DotCanvas extends React.Component<Props, {}> {
  render() {
    const dots = this.props.dots.map((rowDots, y) => {
      const row = rowDots.map((dot, x) => {
        return <DotCell dot={dot} />;
      });
      return <div style={{ display: 'flex', flexDirection: 'row' }}>{row}</div>;
    });

    return (
      <div>{dots}</div>
    );
  }
}
