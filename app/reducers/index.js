// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import timer from './timer';
import projects from './projects';
import tasks from './tasks';
import currentProject from './currentProject';
import currentTask from './currentTask';

const rootReducer = combineReducers({
  counter,
  projects,
  tasks,
  timer,
  currentProject,
  currentTask,
  router
});

export default rootReducer;
