import ImgP from '../assets/softProj.png';
import webApp from '../assets/webapp.jpg';
import projectImg from '../assets/project2.png';
import projectImg2 from '../assets/project3.png';

export default function Projects() {
    return (
        <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
            <div class="max-w-2xl">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mis Proyectos</h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">Durante mi carrera, he tenido la oportunidad de elaborar diversos proyectos, por lo que aquí muestro algunos de ellos. </p>
            </div>
            <ul role="list" class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            <li>
                <div class="flex items-center gap-x-6">
                    <img class="h-16 w-16 rounded-full" src={ImgP} alt=""/>
                    <div>
                    <a href="https://github.com/AlmaOS/framework-MVC" class="text-base font-semibold leading-7 tracking-tight text-gray-900 hover:text-gray-500">MVC Framework</a>
                    <p class="text-sm font-semibold leading-6 text-indigo-600">Construcción de un framework que utiliza un archivo plano para definir una configuración, la cual será utilizada en MVC.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="flex items-center gap-x-6">
                    <img class="h-16 w-16 rounded-full" src={projectImg} alt=""/>
                    <div>
                    <a href="https://github.com/AlmaOS/ConstruccionProyectoUnidad3NovDic2022" class="text-base font-semibold leading-7 tracking-tight text-gray-900 hover:text-gray-500">Proyecto de Administración Empleados</a>
                    <p class="text-sm font-semibold leading-6 text-indigo-600">Proyecto elaborado con el patrón MVC, donde se presenta un proyecto para registrar a un grupo de empleados.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="flex items-center gap-x-6">
                    <img class="h-16 w-16 rounded-full" src={webApp} alt=""/>
                    <div>
                    <a href="https://github.com/AlmaOS/ProyectoFinalDAW" class="text-base font-semibold leading-7 tracking-tight text-gray-900 hover:text-gray-500">Página Web de Iglesia</a>
                    <p class="text-sm font-semibold leading-6 text-indigo-600">Página web desarrollada con Html, CSS, JS y PHP, para una Iglesia.</p>
                    </div>
                </div>
            </li>
            <li>
                <div class="flex items-center gap-x-6">
                    <img class="h-16 w-16 rounded-full" src={projectImg2} alt=""/>
                    <div>
                    <a href="https://github.com/JonatanJSM/Calculadora" class="text-base font-semibold leading-7 tracking-tight text-gray-900 hover:text-gray-500">Calculadora</a>
                    <p class="text-sm font-semibold leading-6 text-indigo-600">Aplicación en Java de una calculadora con las principales funciones básicas.</p>
                    </div>
                </div>
            </li>
            </ul>
            
        </div>
        </div>
    )
}