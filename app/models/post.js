import Model, { attr, belongsTo } from '@ember-data/model';

export default class PostModel extends Model {
  @belongsTo tag;
  @attr title;
  @attr content;
}
