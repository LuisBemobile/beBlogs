import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'
import CommentUpdateValidator from 'App/Validators/CommentUpdateValidator'
import CommentValidator from 'App/Validators/CommentValidator'

export default class CommentsController {
  public async store({ request, response, auth }: HttpContextContract) {
    const {
      $attributes: { id },
    } = await auth.use('api').authenticate()

    await request.validate(CommentValidator)

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

  public async update({ params, request, response }: HttpContextContract) {
    const { id } = params
    const { comment } = request.body()

    await request.validate(CommentUpdateValidator)

    try {
      const commentToUpdate = await Comment.findOrFail(id)
      commentToUpdate.comment = comment
      await commentToUpdate.save()

      return response.status(200).json({
        message: 'Comment updated successfully',
        comment: commentToUpdate,
      })
    } catch (error) {
      return response.status(500).json({ message: 'Error updating the comment' })
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const { id } = params

    try {
      const comment = await Comment.findOrFail(id)
      await comment.delete()

      return response.status(200).json({ message: 'Comment deleted successfully' })
    } catch (error) {
      return response.status(500).json({ message: 'Error deleting the comment' })
    }
  }
}
