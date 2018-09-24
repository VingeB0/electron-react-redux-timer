import {nowDate} from '../utils'
import { db, doc } from '../config';

export default store => next => action => {
  const {writeFile, payload} = action;
  if (!writeFile) return next(action);
  if(writeFile === 'start') {

    db.loadDatabase(function (error) {
      if (error) {
        console.log('FATAL: local database could not be loaded. Caused by: ' + error);
        throw error;
      }
      console.log('INFO: local database loaded successfully.');
    });

    let projectName = payload.projectName;
    let projectId = payload.projectId;
    let taskName = payload.taskName;
    let taskId = payload.tasksId;
    let taskInfo = payload.tasksInfo;

    db.insert(doc(
      nowDate,
      projectName,
      projectId,
      taskName,
      taskId,
      taskInfo
    ), function(error, newDoc) {
      if (error) {
        console.log('ERROR: saving document. Caused by: ' + error);
        throw error;
      }
      console.log('INFO: successfully saved document: ' + JSON.stringify(newDoc));
    });

      next({...action, writeFile: '123'});
    }

  if(writeFile === 'synchro') {
      console.log('middleware synchro 123');
      next({...action, writeFile: '123'});
    }

  if(writeFile === 'end') {
      console.log('middleware stop 123');
      next({...action, writeFile: '123'});
    }
}
