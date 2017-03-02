import React from 'react';

function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
}

function ConfirmBattle(props) {
  return props.isLoading === true ?
    <p>Loading...</p> :
    <div>Confirm Battle: {puke(props)}</div>;
}

export default ConfirmBattle;
