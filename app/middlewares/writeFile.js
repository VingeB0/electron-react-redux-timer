import {nowDate} from '../utils'
import { db, doc } from '../config';

export default store => next => action => {
  const {writeFile, payload, currentTime} = action;
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
    let taskId = payload.taskId;
    let taskInfo = payload.taskInfo;
    let timeStart = currentTime;

    db.insert(doc(
      nowDate,
      projectName,
      projectId,
      taskName,
      taskId,
      taskInfo,
      timeStart
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

    db.loadDatabase(function (error) {
      if (error) {
        console.log('FATAL: local database could not be loaded. Caused by: ' + error);
        throw error;
      }
      console.log('INFO: local database loaded successfully.');
      console.log('*********');
      console.log(currentTime);
    });

    db.update({ time_end: 'timeEnd' }, { $set: { time_end: currentTime } }, { multi: true }, function (error) {
      if(!error) {
        console.log("updated");
        console.log('*********');
        console.log(currentTime);
        console.log('*********');
        console.log(currentTime);
      }
    });

    db.find({}, function (err, docs) {
      if(!err) {
        console.log(docs);
      }
    });

      next({...action, writeFile: '123'});
    }
}
