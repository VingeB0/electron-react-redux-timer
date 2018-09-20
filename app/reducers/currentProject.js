import {SELECT_PROJECT} from "../constants";

export default (currentProject = [], action) => {
  const {type, payload} = action;

  switch (type) {
    case SELECT_PROJECT:
      return payload.project;
  }
  return currentProject;
}
