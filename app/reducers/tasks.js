import {LOAD_ALL_TASKS, LOAD_TASKS_BY_PROJECT} from "../constants";

const defaultTasksState = {
    groupedTasks: [],
    loadedTasks: ''
};

export default (tasksState = defaultTasksState, action) => {
  const {type, response, payload} = action;

  switch (type) {
    case LOAD_ALL_TASKS:
      console.log('111111111111111111111111111111111111');
      console.log('RESPONSE', response);
      return {
        ...tasksState,
        loadedTasks: [
          ...response
        ]
      };
    case LOAD_TASKS_BY_PROJECT:
      console.log('111111111111111111111111111111111111');
      console.log('PAYLOAD TASKS', payload);
      return {
        ...tasksState,
        groupedTasks: payload.id
      };
  }
  return tasksState;
}

// return {
//     ...articleState,
//     [payload.articleId]: {
//         ...article,
//         comments: (article.comments.concat(randomId) || [].concat(randomId))
//     },
// };

// arr.reduce((acc, item) =>
//     acc.set(item.id, new DataRecord(item))
//   , new OrderedMap({}))

// "selectTasks": [
//   {
//     "id": "12",
//     "name": "task from project 12",
//     "info": "Commodo qui incvaluevalueunt"
//   },
//   {
//     "id": "132",
//     "name": "task from project 132",
//     "info": "Quis occaecat"
//   },

// var selectTasks = [
//   {
//     "id": "12",
//     "name": "task from project 12",
//     "info": "Commodo qui incvaluevalueunt"
//   },
//   {
//     "id": "132",
//     "name": "task from project 132",
//     "info": "Quis occaecat"
//   },
//   {
//     "id": "1",
//     "name": "task from project 132",
//     "info": "Quis occaecat"
//   },
//   {
//     "id": "132",
//     "name": "task from project 132",
//     "info": "Quis occaecat"
//   },
//   {
//     "id": "132",
//     "name": "task from project 132",
//     "info": "Quis occaecat"
//   },
//   {
//     "id": "1",
//     "name": "task from project 132",
//     "info": "Quis occaecat"
//   }
// ];
//
// var idd = '132';
// var arr = selectTasks.reduce((id, item) => {
//   console.log(idd === item.id ? item : null)
//   return idd === item.id ? item : null;
// });
//
// console.log(arr);
