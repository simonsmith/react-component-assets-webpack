import "suitcss-base";
import 'styles/base.css';
import './index.css';

import React from 'react';
import Profile from 'components/ui-Profile';

export default React.createClass({
  displayName: 'App',

  render() {
    return (
      <div className="App">
        <div className="App-item">
          <Profile user={this.props.userData}/>
        </div>
      </div>
    )
  }
});
