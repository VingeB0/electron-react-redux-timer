import NeDB from 'nedb';

export const db = new NeDB({
  filename: 'datafile.db',
  autoload: true
});

db.loadDatabase(function(err) {

});
