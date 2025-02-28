import Image from 'next/image'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'María Rodríguez',
      role: 'Chef Principal',
      image:
        'https://img.freepik.com/foto-gratis/cerca-voluntario-sonriendo_23-2149134454.jpg?t=st=1740083938~exp=1740087538~hmac=990dc3fb105ee2752c18f395b5b587c53b0f11a5c847c3b2a7dc7c3aa21bf3f4&w=740',
      bio: 'Con más de 15 años de experiencia en cocina peruana, María lidera nuestro equipo con pasión y creatividad.'
    },
    {
      name: 'Carlos Mendoza',
      role: 'Sommelier',
      image:
        'https://img.freepik.com/foto-gratis/cerca-voluntario-sonriendo_23-2149134454.jpg?t=st=1740083938~exp=1740087538~hmac=990dc3fb105ee2752c18f395b5b587c53b0f11a5c847c3b2a7dc7c3aa21bf3f4&w=740',
      bio: 'Experto en maridaje, Carlos selecciona los mejores vinos para complementar nuestros platos peruanos.'
    },
    {
      name: 'Ana Gómez',
      role: 'Chef Pastelera',
      image:
        'https://img.freepik.com/foto-gratis/cerca-voluntario-sonriendo_23-2149134454.jpg?t=st=1740083938~exp=1740087538~hmac=990dc3fb105ee2752c18f395b5b587c53b0f11a5c847c3b2a7dc7c3aa21bf3f4&w=740',
      bio: 'Especialista en postres peruanos, Ana combina técnicas tradicionales con toques modernos.'
    },
    {
      name: 'Luis Vargas',
      role: 'Nutricionista',
      image:
        'https://img.freepik.com/foto-gratis/cerca-voluntario-sonriendo_23-2149134454.jpg?t=st=1740083938~exp=1740087538~hmac=990dc3fb105ee2752c18f395b5b587c53b0f11a5c847c3b2a7dc7c3aa21bf3f4&w=740',
      bio: 'Luis asegura que nuestras recetas sean no solo deliciosas, sino también nutritivas y balanceadas.'
    }
  ]

  return (
    <section className="pt-10">
      <div>
        <h2 className="mb-3 text-start font-jallaOne text-4xl font-semibold">Nuestro Equipo</h2>
        <p className="mx-auto mb-12 text-start font-fingerPaint text-xl text-gray-600">
          Conoce a nuestros expertos de sonqu
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="overflow-hidden rounded-[40px] bg-white shadow-md">
              <div className="relative h-64">
                <Image
                  src={member.image || '/placeholder.svg'}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                <p className="mb-3 font-fingerPaint font-medium text-orange-500">{member.role}</p>
                <p className="mb-4 text-gray-600">{member.bio}</p>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 transition-colors hover:text-orange-500">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 transition-colors hover:text-orange-500">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 transition-colors hover:text-orange-500">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
