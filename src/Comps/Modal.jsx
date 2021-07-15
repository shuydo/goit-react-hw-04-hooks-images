import { Component } from "react";
import PropTypes from "prop-types";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (e) => {
    if (e.code === "Escape") this.props.onClose();
  };
  handleClickOnBD = (e) => {
    if (e.target === e.currentTarget) this.props.onClose();
  };
  render() {
    return (
      <div className="Overlay" onClick={this.handleClickOnBD}>
        <div className="Modal">
          <img src={this.props.urlBigImg} alt="oversize" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  urlBigImg: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}; // https://basiclightbox.electerious.com/
