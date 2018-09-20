import {LOAD_ALL_PROJECTS} from "../constants";

export default (projectsState = [], action) => {
  const {type, response} = action;

  switch (type) {
    case LOAD_ALL_PROJECTS:
      return response;
  }
  return projectsState;
}
