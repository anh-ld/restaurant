import React, { Component } from 'react';

class Credit extends Component {
  render() {
    return (
      <p className="credit">
        made by&nbsp;
        <a
          href="https://github.com/culee" target="_blank"
          rel="noopener noreferrer"
        >
          @culee
        </a>
      </p>
    );
  }
}

export default Credit;