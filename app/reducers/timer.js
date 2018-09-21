// @flow
import { START_TIMER, STOP_TIMER } from '../constants';

const defaultTimerState = {
  time_start: '',
  time_end: ''
};

export default function (timerState = defaultTimerState, action) {
  const {type, currentTime} = action;

  switch (action.type) {
    case START_TIMER:
      return {
        ...timerState,
        time_start: currentTime
      };
    case STOP_TIMER:
      return {
        ...timerState,
        time_end: currentTime
      };
    default:
      return timerState;
  }
}
