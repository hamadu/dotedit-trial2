import * as React from "react";

interface Props {
  currentColor: number,
  colorMap: string[],
  onChangeColor: (toID: number) => void,
}

export class ColorPalette extends React.Component<Props, {}> {
  render() {
    const normalStyle = {
      border: '1px solid #000'
    };
    const selectedStyle = {
      border: '2px solid #000'
    };

    const buttons = this.props.colorMap.map((color, idx) => {
      const selectStyle = this.props.currentColor == idx ? selectedStyle : normalStyle;
      const style = { backgroundColor: color, selectStyle };
      return (
        <button style={style} onClick={() => this.props.onChangeColor(idx)} />
      )
    });

    const currentColor = this.props.colorMap[this.props.currentColor];

    return (
      <div>
        <div style={{backgroundColor: currentColor, width: '32px', height: '32px'}} />
        <br/>
        {buttons}
      </div>
    );
  }
}
