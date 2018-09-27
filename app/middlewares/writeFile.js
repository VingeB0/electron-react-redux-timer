import {nowDate} from '../utils'
import { db, doc } from '../config';

export default store => next => action => {
  const {writeFile, payload, currentTime, generateId} = action;
  if (!writeFile) return next(action);

  if(writeFile === 'start') {

    db.loadDatabase(function (error) {
      if (error) {
        console.log('FATAL: local database could not be loaded. Caused by: ' + error);
        throw error;
      }
      console.log('INFO: local database loaded successfully.');
    });

    let id = generateId;
    let projectName = payload.projectName;
    let projectId = payload.projectId;
    let taskName = payload.taskName;
    let taskId = payload.taskId;
    let taskInfo = payload.taskInfo;
    let timeStart = currentTime;
    let timeEnd = currentTime;

    console.log('IDIDIDIDIDID')
    console.log(id)

    db.insert(doc(
      id,
      nowDate,
      projectName,
      projectId,
      taskName,
      taskId,
      taskInfo,
      timeStart,
      timeEnd
    ), function(error, newDoc) {
      if (error) {
        console.log('ERROR: saving document. Caused by: ' + error);
        throw error;
      }
      console.log('INFO: successfully saved document: ' + JSON.stringify(newDoc));
    });

      next({...action, generateId: id});
    }

  if(writeFile === 'end') {
    console.log('END END END');

    let timeEnd = payload.idFile;

    db.loadDatabase(function (error) {
      if (error) {
        console.log('FATAL: local database could not be loaded. Caused by: ' + error);
        throw error;
      }
      console.log('INFO: local database loaded successfully.');
    });

    db.update({ _id: timeEnd }, { $set: { time_end: currentTime } }, {}, function (error) {
      if(!error) {
        console.log("updated");
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
