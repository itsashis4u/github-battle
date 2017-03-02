import React, { PropTypes } from 'react';

function UserDetails(user) {
  return (
    <div>
      {!!user.score && <li className="list-group-item">
        <h3>Score: {user.score}</h3>
      </li>}
    </div>
  );
}

export default UserDetails;
