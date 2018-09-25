import {selectProjects, selectTasks} from '../data.js'
import {
  START_TIMER,
  STOP_TIMER,
  LOAD_ALL_PROJECTS,
  LOAD_ALL_TASKS,
  SELECT_PROJECT,
  SELECT_TASK,
  LOAD_TASKS_BY_PROJECT,
  START_WRITE_TO_FILE,
  SYNCHRO_WRITE_TO_FILE,
  END_WRITE_TO_FILE,
  START,
  FAIL,
  SUCCESS
} from '../constants';

export function startTimer(projectName, projectId, taskName, taskId, taskInfo) {
  return {
    type: START_TIMER,
    currentTime: true,
    writeFile: 'start',
    payload: {projectName, projectId, taskName, taskId, taskInfo}
  }
}

export function stopTimer() {
  return {
    type: STOP_TIMER,
    currentTime: true,
    writeFile: 'end'
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

export function selectTask(task) {
  return {
    type: SELECT_TASK,
    payload: {task}
  }
}

export function loadTasksByProject(tasksId) {
  return {
    type: LOAD_TASKS_BY_PROJECT,
    payload: {tasksId}
  }
}

export function synchroWriteToFile(endTime) {
  return {
    type: SYNCHRO_WRITE_TO_FILE,
    writeFile: 'synchro',
    payload: {endTime}
  }
}

