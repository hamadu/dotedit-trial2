import * as React from "react";

interface Props {
  dot: number
}

export class DotCell extends React.Component<Props, {}> {
  render() {
    const color = this.props.dot == 0 ? '#fff' : '#fa6';
    const style = {
      width: '14px',
      height: '14px',
      border: '1px solid #000',
      backgroundColor: color
    };
    return (
      <div style={style}></div>
    );
  }
}
