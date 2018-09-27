import {selectProjects, selectTasks} from '../data.js'
import {
  START_TIMER,
  STOP_TIMER,
  LOAD_ALL_PROJECTS,
  LOAD_ALL_TASKS,
  SELECT_PROJECT,
  SELECT_TASK,
  LOAD_TASKS_BY_PROJECT,
  START,
  FAIL,
  SUCCESS
} from '../constants';

export function startTimer(projectName, projectId, taskName, taskId, taskInfo) {
  return {
    type: START_TIMER,
    currentTime: true,
    generateId: true,
    writeFile: 'start',
    payload: {projectName, projectId, taskName, taskId, taskInfo}
  }
}

export function stopTimer(idFile) {
  return {
    type: STOP_TIMER,
    currentTime: true,
    writeFile: 'end',
    payload: {idFile}
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

export function selectProject(project, isDisabled) {
  return {
    type: SELECT_PROJECT,
    payload: {project, isDisabled}
  }
}

export function selectTask(task, isDisabled) {
  return {
    type: SELECT_TASK,
    payload: {task, isDisabled}
  }
}

export function loadTasksByProject(tasksId) {
  return {
    type: LOAD_TASKS_BY_PROJECT,
    payload: {tasksId}
  }
}
