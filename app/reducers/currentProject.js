import {SELECT_PROJECT} from "../constants";

export default (currentProject = [], action) => {
  const {type, payload} = action;

  switch (type) {
    case SELECT_PROJECT:
      console.log('PAYLOAD')
      console.log(payload)
      return {
        ...payload.project,
        isDisabled: payload.isDisabled
      };
  }
  return currentProject;
}
