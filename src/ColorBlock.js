import React from "react";

class ColorBlock extends React.Component {
  state = {
    color: ""
  };
  inputRef = React.createRef();
  updateColor = () => {
    this.setState(() => ({ color: this.inputRef.current.value }));
  };

  clearInput = (event) => {
    event.preventDefault();

    this.inputRef.current.value = "";
    this.inputRef.current.focus();
    this.updateColor();
  };

  render() {
    const { color } = this.state;
    var squreStyle = { backgroundColor: color };
    return (
      <div className="color-area">
        <div style={squreStyle} className="color-square" />
        <form>
          <input
            ref={this.inputRef}
            onChange={this.updateColor}
            placeholder="Enter a color value"
          />
          <button type="button" onClick={this.clearInput}>
            clear
          </button>
        </form>
      </div>
    );
  }
}

export default ColorBlock;
