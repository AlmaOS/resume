import gitlogo from '../assets/github.png';
import phone from '../assets/phone.png';
import mail from '../assets/mail.png';
export default function Contact() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Información de Contacto
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 sm:max-w-xl sm:grid-cols-1 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            <div className="grid grid-cols-3 gap-x-8 gap-y-10">
              <div className="text-center">
                <img
                  className="mx-auto max-h-12 w-full object-contain"
                  src={gitlogo}
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <p className="text-center font-semibold leading-7 tracking-tight text-gray-900">
                  <a
                    href="https://github.com/AlmaOS/"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    AlmaOS
                  </a>
                </p>
              </div>
              <div className="text-center">
                <img
                  className="mx-auto max-h-12 w-full object-contain"
                  src={phone}
                  alt="Tuple"
                  width={158}
                  height={48}
                />
                <p className="text-center font-semibold leading-7 tracking-tight text-gray-900">
                  Telefono: &nbsp;
                  <a
                    href="tel:+9991609677"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    9991609677
                  </a>
                </p>
              </div>
              <div className="text-center">
                <img
                  className="mx-auto max-h-12 w-full object-contain"
                  src={mail}
                  alt="Statamic"
                  width={158}
                  height={48}
                />
                <p className="text-center font-semibold leading-7 tracking-tight text-gray-900">
                  Correo: &nbsp;
                  <a
                    href="mailto:alma.ordonez2002@gmail.com"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Enviar correo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  