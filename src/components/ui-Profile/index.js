import 'suitcss-utils-layout';
import './index.css';

import React from 'react';
import Avatar from 'components/ui-Avatar';

export default React.createClass({
  displayName: 'Profile',

  render() {
    return (
      <div className="Profile">
        <h2 className="Profile-header">{this.props.user.fullname}</h2>
        <div className="Profile-wrapAvatar">
          <Avatar src={this.props.user.avatar.src}
                  width="100"
                  height="100"
                  alt={this.props.user.username}>
            <p>{this.props.user.username}</p>
          </Avatar>
        </div>
      </div>
    )
  }
});
