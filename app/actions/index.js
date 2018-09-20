import {selectProjects, selectTasks} from '../data.js'
import {
  START_TIMER,
  STOP_TIMER,
  LOAD_ALL_PROJECTS,
  LOAD_ALL_TASKS,
  SELECT_PROJECT,
  LOAD_TASKS_BY_PROJECT,
  START,
  FAIL,
  SUCCESS
} from '../constants';

export function startTimer() {
  return {
    type: START_TIMER,
    currentTime: true
  }
}

export function stopTimer(dateRange) {
  return {
    type: STOP_TIMER,
    currentTime: true
  }
}

export function loadAllProjects() {
  return {
    type: LOAD_ALL_PROJECTS,
    callAPI: 'http://localhost:3000/selectProjects'
  }
}

export function loadAllTasks() {
  return {
    type: LOAD_ALL_TASKS,
    callAPI: 'http://localhost:3000/selectTasks'
  }
}

export function selectProject(project) {
  return {
    type: SELECT_PROJECT,
    payload: {project}
  }
}

export function loadTasksByProject(id) {
  return {
    type: LOAD_TASKS_BY_PROJECT,
    payload: {id}
  }
}
