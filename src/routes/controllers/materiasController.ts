import { Request, Response } from 'express'
import { getAlunos, getMaterias } from '../../database/calls'

interface BodyDetails {
  materiaId: number
}

export default {
  async index(_: any, res: Response) {
    const response = await getMaterias()

    res.status(200).json({ body: response })
  },

  async details(req: Request, res: Response) {
    const { materiaId } = req.body as BodyDetails

    const response = await getAlunos(materiaId)

    res.status(200).json({ body: response })
  },
}
