import bookshelf from '../db';

import Tag from '../models/tag';
import User from '../models/user';

const TABLE_NAME_TODO = 'todo';

/**
 * Todo model.
 */

export class Todo extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME_TODO;
  }

  get hasTimestamps() {
    return false;
  }

  user() {
    return this.belongsTo(User);
  }

  tags() {
    return this.belongsToMany(Tag);
  }
}

export default Todo;
