import Tag from '../models/tag';

export const getTags = () => {
  return Tag.fetchAll();
};
