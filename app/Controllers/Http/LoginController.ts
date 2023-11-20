import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
// import SignUpValidator from 'App/Validators/SignUpValidator'
import Hash from '@ioc:Adonis/Core/Hash'
import LoginValidator from 'App/Validators/LoginValidator'

export default class UsersController {
  public async store({ request, response, auth }: HttpContextContract) {
    const { email, password } = request.body()
    await request.validate(LoginValidator)
    try {
      const data = await User.findByOrFail('email', email)
      if (!(await Hash.verify(data.password, password))) {
        return response.unauthorized({ message: 'email or password is incorrect' })
      }
      const { token } = await auth.use('api').generate(data, { expiresIn: '10 hours' })

      return response.status(201).json({
        message: 'User successfully logged in',
        token,
      })
    } catch (error) {
      return error.message
    }
  }
}
