import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import PostValidator from 'App/Validators/PostValidator'

export default class PostsController {
  public async store({ request, response, auth }: HttpContextContract) {
    const { description } = request.body()

    await request.validate(PostValidator)

    const {
      $attributes: { id, admin },
    } = await auth.use('api').authenticate()
    console.log(admin)

    if (!admin) {
      return response.unauthorized({ message: 'you need administrator permission' })
    }

    try {
      const post = await Post.create({
        userId: id,
        description,
      })

      return response.status(201).json({
        message: 'Post successfully created',
        post,
      })
    } catch (error) {
      return response.status(500).json({ message: 'An error occurred while creating the post' })
    }
  }
}
