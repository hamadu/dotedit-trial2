import * as React from "react";

interface Props {
  currentColor: number,
  colorMap: string[],
  onChangeColor: (toID: number) => void,
  onChangeColorMap: (id: number, newColor: string) => void
}

export class ColorPalette extends React.Component<Props, {}> {
  private red:   HTMLInputElement;
  private green: HTMLInputElement;
  private blue:  HTMLInputElement;

  constructor(props: Props) {
    super(props);

    this.changeCurrentColor = this.changeCurrentColor.bind(this);
  }

  changeCurrentColor() {
    const red   = this.red.value;
    const green = this.green.value;
    const blue  = this.blue.value;
    const color = `rgb(${red}, ${green}, ${blue})`

    this.props.onChangeColorMap(this.props.currentColor, color);
  }

  render() {
    const normalStyle = {
      border: '1px solid #000',
      width:  '16px',
      height: '16px'
    };
    const selectedStyle = {
      border: '2px solid #000',
      width:  '16px',
      height: '16px'
    };

    const buttons = this.props.colorMap.map((color, idx) => {
      const selectStyle = this.props.currentColor == idx ? selectedStyle : normalStyle;
      const style = Object.assign({ backgroundColor: color}, selectStyle);
      return (
        <button style={style} onClick={() => this.props.onChangeColor(idx)} />
      )
    });

    const currentColor = this.props.colorMap[this.props.currentColor];
    const red = 127;
    const green = 127;
    const blue = 127;

    return (
      <div>
        <div style={{backgroundColor: currentColor, width: '32px', height: '32px'}} />
        <input ref={(input) => { this.red   = input }} style={{ width: '24px' }} />
        <input ref={(input) => { this.green = input }} style={{ width: '24px' }} />
        <input ref={(input) => { this.blue  = input }} style={{ width: '24px' }} />
        <button onClick={this.changeCurrentColor} />

        <br/>
        {buttons}
      </div>
    );
  }
}
