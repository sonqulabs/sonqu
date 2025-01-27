import funMetaData from '@/common/helpers/funMetaData'
import SearchView from '@/modules/search/SearchView'

type Props = {
  searchParams: { query?: string; categories?: string; difficulty?: string; page?: string }
}

export const metadata = funMetaData({
  title: 'Busqueda de Recetas'
})

export default function search({ searchParams }: Props) {
  return <SearchView searchParams={searchParams} />
}
