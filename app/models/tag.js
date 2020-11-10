import Model, { attr, hasMany } from '@ember-data/model';

export default class TagModel extends Model {
  @hasMany posts;
  @attr title;
}
