import {formatTime} from '../utils'

export default store => next => action => {
  if (!action.currentTime) return next(action);
  next({
    ...action,
    currentTime: formatTime(new Date().getHours()) + ' : ' + formatTime(new Date().getMinutes()) + ' : ' + formatTime(new Date().getSeconds())
  })
}
