import funMetaData from '@/common/helpers/funMetaData'
import SearchView from '@/modules/search/SearchView'

type Props = {
  searchParams: { query?: string; categories?: string; difficulty?: string; page?: string }
}

export const metadata = funMetaData({
  title: 'Busqueda de Recetas',
  description:
    'Encuentra fácilmente recetas deliciosas y tradicionales de la cocina peruana y mundial. Explora nuestra colección de recetas y lleva la tradición a tu hogar.'
})

export default function search({ searchParams }: Props) {
  return <SearchView searchParams={searchParams} />
}
