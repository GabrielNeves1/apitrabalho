interface Aluno {
  id: number
  name: string
}

interface Materia {
  materia: string
}

interface SeedsData {
  material: Materia[]
  alunos: Aluno[]
}

const seed = {
  material: [
    {
      materia: 'Poo',
    },
    {
      materia: 'Logica de Programação',
    },
    {
      materia: 'Redes',
    },
    {
      materia: 'Banco de dados',
    },
  ],
  alunos: [
    {
      id: 1,
      name: 'Gustavo',
    },
    {
      id: 1,
      name: 'Gabriel',
    },
    {
      id: 1,
      name: 'Matheus',
    },
    {
      id: 2,
      name: 'Yuri',
    },
    {
      id: 2,
      name: 'Heloiza',
    },
    {
      id: 2,
      name: 'Beatrice',
    },
    {
      id: 3,
      name: 'Gabriel',
    },
    {
      id: 3,
      name: 'Rui',
    },
    {
      id: 3,
      name: 'Mauro',
    },
    {
      id: 4,
      name: 'Braia',
    },
    {
      id: 4,
      name: 'Dom',
    },
    {
      id: 4,
      name: 'The Rock',
    },
  ],
} as SeedsData

export default seed
