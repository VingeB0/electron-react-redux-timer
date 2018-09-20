// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import projects from './projects';
import tasks from './tasks';
import currentProject from './currentProject';

const rootReducer = combineReducers({
  counter,
  projects,
  tasks,
  currentProject,
  router
});

export default rootReducer;
