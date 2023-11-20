import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'

export default class CommentsController {
  public async store({ request, response, auth }: HttpContextContract) {
    const {
      $attributes: { id },
    } = await auth.use('api').authenticate()

    try {
      const { postId, comment } = request.body()

      const newComment = await Comment.create({
        userId: id,
        postId,
        comment,
      })

      return response.status(201).json({
        message: 'Comment successfully added',
        comment: newComment,
      })
    } catch (error) {
      return response.status(500).json({ message: 'An error occurred while adding the comment' })
    }
  }
}
