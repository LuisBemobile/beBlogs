import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Comment from 'App/Models/Comment'

export default class extends BaseSeeder {
  public async run() {
    await Comment.createMany([
      {
        userId: 1,
        postId: 1,
        comment: 'Exemplo de comentário 1',
      },
      {
        userId: 2,
        postId: 1,
        comment: 'Exemplo de comentário 2',
      },
      {
        userId: 1,
        postId: 2,
        comment: 'Exemplo de comentário 3',
      },
    ])
  }
}
