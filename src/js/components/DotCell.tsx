import * as React from "react";

interface Props {
  color: string
}

export class DotCell extends React.Component<Props, {}> {
  render() {
    const style = {
      width: '14px',
      height: '14px',
      border: '1px solid #000',
      backgroundColor: this.props.color
    };
    return (
      <div style={style}></div>
    );
  }
}
