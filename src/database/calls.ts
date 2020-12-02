import { PrismaClient } from '@prisma/client'
import seed from '../../seed'

const prisma = new PrismaClient()

const getAlunos = async (id: number) => {
  const alunos = await prisma.aluno.findMany({
    where: {
      materiaId: id,
    },
  })

  return alunos
}

const getMaterias = async () => {
  const allUsers = await prisma.materias.findMany()

  return allUsers
}

const initilizer = async () => {
  const materias = await getMaterias()

  if (materias.length <= 0) {
    for (const materiaEach of seed.material) {
      await prisma.materias.create({
        data: {
          nome: materiaEach.materia,
        },
      })
    }

    for (const alunos of seed.alunos) {
      await prisma.aluno.create({
        data: {
          name: alunos.name,
          Materia: {
            connect: {
              id: alunos.id,
            },
          },
        },
      })
    }
  }
}

export { getMaterias, initilizer, getAlunos }
