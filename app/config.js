import NeDB from 'nedb';
import { remote } from 'electron';

const app = remote.app;
const dbDir = app.getPath('userData') + '/rexit-db/';
console.log(dbDir);

export const db = new NeDB({
  filename: dbDir + '/datafile.db',
  autoload: true
});

export function doc(id, nowDate, projectName, projectId, taskName, taskId, taskInfo, timeStart, timeEnd) {
  return {
    _id: id,
    // user: 'login',
    day: nowDate,
    project_id: projectId,
    project_name: projectName,
    task_id: taskId,
    task_name: taskName,
    task_info: taskInfo,
    time_start: timeStart,
    time_end: timeEnd
  }
}
