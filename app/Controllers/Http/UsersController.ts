import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import SignUpValidator from 'App/Validators/SignUpValidator'

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    await request.validate(SignUpValidator)
    try {
      const data = await User.create(body)
      return response.status(201).json({
        message: 'User successfully registered',
        data,
      })
    } catch (error) {
      return error.message
    }
  }
}
