import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'

export default class PostsSeeder extends BaseSeeder {
  public async run() {
    await Post.createMany([
      {
        userId: 1,
        description: 'Exemplo de post 1',
      },
      {
        userId: 1,
        description: 'Exemplo de post 2',
      },
      {
        userId: 2,
        description: 'Exemplo de post 3',
      },
    ])
  }
}
