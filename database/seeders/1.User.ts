import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        userName: 'admin',
        email: 'admin@example.com',
        password: 'adminpassword',
        admin: true,
      },
      {
        userName: 'user1',
        email: 'user1@example.com',
        password: 'user1password',
        admin: false,
      },
      {
        userName: 'user2',
        email: 'user2@example.com',
        password: 'user2password',
        admin: false,
      },
    ])
  }
}
