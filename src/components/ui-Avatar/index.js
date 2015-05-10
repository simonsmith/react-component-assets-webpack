import './index.css';

import React from 'react';

export default React.createClass({
  displayName: 'Avatar',

  render() {
    return (
      <figure className="Avatar">
        <img className="Avatar-img"
             src={this.props.src}
             width={this.props.width}
             height={this.props.height}
             alt={this.props.alt} />
        <figcaption className="Avatar-caption">
          {this.props.children}
        </figcaption>
      </figure>
    )
  }
});
