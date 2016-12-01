import * as React from "react";
import { DotCell } from "./DotCell"

interface Props {
  dots: number[][];
  colorMap: string[];
}

export class DotCanvas extends React.Component<Props, {}> {
  render() {
    const dots = this.props.dots.map((rowDots, y) => {
      const row = rowDots.map((dot, x) => {
        const color = dot == -1 ? '#fff' : this.props.colorMap[dot];
        return <DotCell color={color} />;
      });
      return <div style={{ display: 'flex', flexDirection: 'row' }}>{row}</div>;
    });

    return (
      <div>{dots}</div>
    );
  }
}
