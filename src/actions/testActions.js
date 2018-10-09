import axios from 'axios';

export function test(name, value) {
  return {
    type: 'SET_BRIEF_VALUE_AS_OBJECT',
    payload: { name: name, value: value }
  };
}

export function test1(url, initial, changed) {
  return function(dispatch) {
    axios
      .post(url, {
        initial: initial,
        changed: changed
      })
      .then(answer => {
        window.location.href = answer.data;
      })
      .catch(err => {
        dispatch({ type: 'FETCH_REJECTED', payload: err });
      });
  };
}
