import {SELECT_TASK} from "../constants";

export default (currentTask = [], action) => {
  const {type, payload} = action;

  switch (type) {
    case SELECT_TASK:
      return {
        ...payload.task,
        isDisabled: payload.isDisabled
      }
  }
  return currentTask;
}
