import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CustomMessages, rules, schema } from '@ioc:Adonis/Core/Validator'

export default class CommentValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string([ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string([
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    postId: schema.number([
      rules.unsigned,
      rules.exists({ table: 'posts', column: 'id' }),
      rules.notIn([0]),
    ]),
    comment: schema.string([rules.minLength(20), rules.maxLength(240)]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    'postId.unsigned': 'The  postId must be positive',
    'postId.required': 'The postId is mandatory',
    'postId.notIn': 'The postId most be greater than 0',
    'comment.required': 'The comment is mandatory',
    'comment.minLength': 'The name must be at least 20 characters long.',
    'comment.maxLength': 'The name must not be longer than 240 characters.',
  }
}
