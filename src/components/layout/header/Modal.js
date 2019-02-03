import React, { Component } from 'react';

class Modal extends Component {
  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
        <div className="modal">
          <h2>Please checkout all tables before signing out!</h2>
          <button
            onClick={this.props.toggleModal}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;