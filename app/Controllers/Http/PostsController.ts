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

  public async update({ params, request, response }: HttpContextContract) {
    const { id } = params
    const { description } = request.body()

    await request.validate(PostValidator)

    try {
      const post = await Post.findOrFail(id)
      post.description = description
      await post.save()

      return response.status(200).json({
        message: 'Post updated successfully',
        post,
      })
    } catch (error) {
      return response.status(500).json({ message: 'Error updating the post, or post not found' })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const { id } = params

    try {
      const post = await Post.findOrFail(id)
      await post.delete()

      return response.status(200).json({ message: 'Post deleted successfully' })
    } catch (error) {
      return response.status(500).json({ message: 'Error deleting the post' })
    }
  }
}
