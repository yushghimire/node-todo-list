import bookshelf from '../db';

// session Model
let Session = bookshelf.Model.extend({
  tableName: 'session',
  hasTimestamps: false
});

export default Session;
