import express from 'express'
import { initilizer } from './database/calls'
import route from './routes'
import cors from 'cors'

const app = express()
const port = 3000
app.use(cors())

async function init() {
  await initilizer()


  
  /**
   * Midllewares
   */

  app.use(express.json()) // json parser
  app.use(route)

  app.listen(port, () => console.log(`Server listen on ${port}`))
}

init()
