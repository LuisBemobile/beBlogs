import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CustomMessages, rules, schema } from '@ioc:Adonis/Core/Validator'

export default class SignUpValidator {
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
    userName: schema.string([rules.minLength(5), rules.maxLength(120)]),
    email: schema.string([rules.unique({ table: 'users', column: 'email' }), rules.email()]),
    password: schema.string([rules.minLength(5), rules.maxLength(25)]),
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
    'userName.required': 'Name is mandatory.',
    'userName.minLength': 'The name must be at least 5 characters long.',
    'userName.maxLength': 'The name must not be longer than 120 characters.',
    'email.unique': 'The email is already in use',
    'email.email': 'The email is not valid format',
    'password.required': 'The password must be at least',
    'password.minLength': 'The password must be at least 5 characters long.',
    'password.maxLength': 'The password must not be longer than 25 characters.',
  }
}
