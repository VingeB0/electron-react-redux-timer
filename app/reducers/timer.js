// @flow
import { START_TIMER, STOP_TIMER } from '../constants';

export default function counter(state: number = 0, action: Action) {
  switch (action.type) {
    case START_TIMER:
      return state + 1;
    case STOP_TIMER:
      return state - 1;
    default:
      return state;
  }
}
