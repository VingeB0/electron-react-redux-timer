import {LOAD_ALL_TASKS, LOAD_TASKS_BY_PROJECT} from "../constants";

const defaultTasksState = {
    groupedTasks: [],
    loadedTasks: []
};

export default (tasksState = defaultTasksState, action) => {
  const {type, response, payload} = action;

  switch (type) {
    case LOAD_ALL_TASKS:
      return {
        ...tasksState,
        loadedTasks: [
          ...response
        ]
      };
    case LOAD_TASKS_BY_PROJECT:
      return {
        ...tasksState,
        groupedTasks: [
          ...tasksState.loadedTasks.filter((item) => payload.tasksId.indexOf(item.id) > -1)
        ]
      };
  }
  return tasksState;
}
