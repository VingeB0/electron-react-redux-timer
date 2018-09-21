import {START, SUCCESS, FAIL} from "../constants";
import axios from 'axios';

export default store => next => action => {
  const {callAPI, type, ...rest} = action;
  if (!callAPI) return next(action);

  fetch(callAPI)
    .then(res => res.json())
    .then(response => {
      // console.log('response');
      // console.log(response);
      next({...rest, type: type, response})
    })
    .catch(error => ({...rest, type: type, error}))

  // fetch(callAPI)
  //   .then(res => res.json())
  //   .then(response => {
  //     // console.log('rest')
  //     // console.log(rest)
  //     // console.log('response')
  //     console.log(response)
  //     next({...rest, type: type, response})
  //   })
  //   .catch(error => ({...rest, type: type, error}))

  // axios.get(callAPI)
  //   .then(function (response) {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // always executed
  //     console.log(error);
  //   });
}
