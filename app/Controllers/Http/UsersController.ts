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

  public async index({ response }: HttpContextContract) {
    try {
      const users = await User.all()

      return response.status(200).json({
        message: 'List of all users',
        users,
      })
    } catch (error) {
      return response.status(500).json({ message: 'Error fetching users' })
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const { id } = params
    const { userName, email, password } = request.body()

    await request.validate(SignUpValidator)

    try {
      const userToUpdate = await User.findOrFail(id)
      userToUpdate.userName = userName
      userToUpdate.email = email
      userToUpdate.password = password
      await userToUpdate.save()

      return response.status(200).json({
        message: 'User updated successfully',
        user: userToUpdate,
      })
    } catch (error) {
      return response.status(500).json({ message: 'Error updating the user ou user not found' })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const { id } = params

    try {
      const user = await User.findOrFail(id)
      await user.delete()

      return response.status(200).json({ message: 'User deleted successfully' })
    } catch (error) {
      return response.status(500).json({ message: 'Error deleting the user or user not found' })
    }
  }
}
