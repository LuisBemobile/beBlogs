import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Post from 'App/Models/Post'
// import Comment from 'App/Models/Comment'

export default class FeedsController {
  public async index({ response }: HttpContextContract) {
    try {
      const feed = await Post.query().preload('comments')
      return response.status(200).json({ feed })
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Erro ao buscar feed do usuário', error: error.message })
    }
  }

  public async show({ request, response }: HttpContextContract) {
    const { id } = request.params()
    try {
      const feed = await Post.query().where('userId', id).preload('comments')
      return response.status(200).json({ feed })
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'Erro ao buscar feed do usuário', error: error.message })
    }
  }
}
