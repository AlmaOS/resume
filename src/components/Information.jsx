import profilePic from '../assets/image.png';

export default function Information() {
    return (
      <div className="bg-blue-200 p-4 flex items-center justify-center space-x-4 overflow-hidden">
        <img
            className="inline-block h-40 w-40 rounded-full ring-2 ring-white"
            src={profilePic}
            alt=""
          />
        <div>
            <h1 className="font-bold text-2xl">Alma Angélica Ordoñez Sánchez</h1>
            <p className="text-body">Mi nombre es Alma Ordoñez, actualmente soy estudiante de 7° Semestre en Ingeniería de Software en la Facultad de Matemáticas UADY.</p>
        </div>
      </div>
    )
  }
  