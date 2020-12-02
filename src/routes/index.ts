import { Router } from 'express'
import materiaController from './controllers/materiasController'

const routes = Router()

// venomController
routes.get('/', materiaController.index)
routes.post('/aluno', materiaController.details)

export default routes
