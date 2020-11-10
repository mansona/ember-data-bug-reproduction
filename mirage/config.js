export default function() {
  this.logging = true;
  this.db.loadData({
    tags: [
      {
        id: 'first',
        title: 'First',
        postIds: ['1', '3']
      },
      {
        id: 'ember',
        title: 'Ember Content',
        postIds: ['2']
      }
    ],
    posts: [
      {
        id: '1',
        title: 'My greeatest blog',
        content: 'a masterpiece',
        tagId: 'first',
      },
      {
        id: '2',
        title: 'An alright blog',
        content: 'a masterpiece',
        tagId: 'ember',
      },
      {
        id: '3',
        title: 'Rushed content',
        content: 'a masterpiece',
        tagId: 'first',
      }
    ],
  });

  this.get('/tags')
  this.get('/tags/:id')
  this.get('/posts');
  this.get('/posts/:id');
}
