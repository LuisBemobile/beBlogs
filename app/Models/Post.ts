import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Comment from '../Models/Comment'
import User from '../Models/User'
import CamelCaseNamingStrategy from '../utils/CamelCaseNamingStrategy'

export default class Post extends BaseModel {
  public static namingStrategy = new CamelCaseNamingStrategy()

  @column({ isPrimary: true })
  public id: number

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public userId: number

  @belongsTo(() => User, {})
  public user: BelongsTo<typeof User>

  @hasMany(() => Comment, {})
  public comments: HasMany<typeof Comment>
}
