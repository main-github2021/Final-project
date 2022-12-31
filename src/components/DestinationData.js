import { Component } from "react";
import { render } from "react-dom";
import "./DestinationStyle.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image">
          <img alt="4" src={this.props.img1} />
          <img alt="5" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestinationData;
