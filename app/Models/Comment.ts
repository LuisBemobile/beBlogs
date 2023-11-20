import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import CamelCaseNamingStrategy from '../utils/CamelCaseNamingStrategy'

import Post from '../Models/Post'
import User from '../Models/User'

export default class Comment extends BaseModel {
  public static namingStrategy = new CamelCaseNamingStrategy()
  @column({ isPrimary: true })
  public id: number

  @column()
  public comment: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public userId: number

  @column()
  public postId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Post)
  public post: BelongsTo<typeof Post>
}
