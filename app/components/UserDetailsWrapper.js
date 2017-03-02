import React, { PropTypes } from 'react';

function UserDetailsWrapper(props) {
  return (
    <div className="col-sm-6">
      <p className="lead">Player {props.player}</p>
      {props.children}
    </div>
  );
}

export default UserDetailsWrapper;
