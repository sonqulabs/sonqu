import SearchView from '@/modules/search/SearchView'

type Props = {
  searchParams: { query?: string; categories?: string; difficulty?: string; page?: string }
}

export default function search({ searchParams }: Props) {
  return <SearchView searchParams={searchParams} />
}
