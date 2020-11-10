import Route from '@ember/routing/route';

export default class TagRoute extends Route {
  model(params) {
    return this.store.find('tag', params.id)
  }
}
