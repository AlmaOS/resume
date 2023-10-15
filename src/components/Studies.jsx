import logoUADY from '../assets/logoUADY.jpg'
import logoFMAT from '../assets/logoFMAT.png'
import logoCoursera from '../assets/coursera-logo.png'
const posts = [
    {
      id: 1,
      title: 'Escuela Preparatoria Uno UADY',
      href: 'https://www.prepa1.uady.mx/ ',
      description:
        'Mis estudios de nivel medio superior fueron en la Escuela Preparatoria Uno de la Universidad Autónoma de Yucatán.',
      date: 'Bachillerato',
      datetime: '2020-03-16',
      author: {
        name: '2017-2020',
        role: 'UADY',
        href: 'https://uady.mx/',
        imageUrl:
          logoUADY,
      },
    },
    {
        id: 2,
        title: 'Facultad de Matemáticas UADY',
        href: 'https://www.matematicas.uady.mx/',
        description:
          'Mis estudios de nivel superior son actualmente en la Facultad de Matemáticas de la Universidad Autónoma de Yucatán, en la carrera de Ingeniería de Software',
        date: 'Universidad',
        datetime: '2020-03-16',
        author: {
          name: '2020-Actualidad',
          role: 'UADY',
          href: 'https://uady.mx/',
          imageUrl:
          logoFMAT,
        },
      },
      {
        id: 3,
        title: 'Coursera',
        href: 'https://www.coursera.org/',
        description:
          'En la plataforma de Coursera realicé diferentes cursos de Python, para aprender los conceptos básicos de este lenguaje de programación.',
        date: 'Formación Extra',
        datetime: '2020-03-16',
        author: {
          name: '2023',
          role: 'Coursera',
          href: 'https://www.coursera.org/',
          imageUrl:
          logoCoursera,
        },
      }
  ]
  
  export default function Studies() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Estudios</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Mi trayectoria académica ha sido la siguiente
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  