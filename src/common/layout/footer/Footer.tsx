import Image from 'next/image'
import IconFacebook from './iconsSocialMedia/IconFacebook'
import IconInstagram from './iconsSocialMedia/IconInstagram'
import IconWhatsapp from './iconsSocialMedia/IconWhatsapp'
import IconX from './iconsSocialMedia/IconX'
import IconYoutube from './iconsSocialMedia/IconYoutube'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="relative bg-sonqu-red-300 py-10 text-white">
      <div className="wrapper flex flex-col items-center gap-20 text-center md:flex-row md:items-start md:text-start">
        <ul className="flex flex-col gap-4 px-5 md:border-r md:border-white md:pr-16">
          <li>Subir una receta</li>
          <li>+51 998938491</li>
          <li>Descarga la app</li>
          <li>Escríbenos</li>
        </ul>

        <div className="my-auto">
          <Image src="/logo.png" className="mb-2" height={200} width={200} alt="logo" />
          <ul className="flex gap-4">
            <li>
              <IconFacebook />
            </li>
            <li>
              <IconInstagram />
            </li>
            <li>
              <IconX />
            </li>
            <li>
              <IconWhatsapp />
            </li>
            <li>
              <IconYoutube />
            </li>
          </ul>
        </div>

        <div className="">
          <h4 className="mb-3 font-medium">ENLACES ÚTILES</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href={'#'}>Inicio</Link>
            </li>
            <li>
              <Link href={'#'}>Recetas</Link>
            </li>
            <li>
              <Link href={'#'}>Tips</Link>
            </li>
            <li>
              <Link href={'#'}>Mapa</Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h4 className="mb-3 font-medium">LA COMPAÑÍA</h4>

          <ul className="flex flex-col gap-2">
            <li>
              <Link href={'#'}>Aviso de Privacidad</Link>
            </li>
            <li>
              <Link href={'#'}>Políticas de Uso del Sitio Web</Link>
            </li>
            <li>
              <Link href={'#'}>Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
