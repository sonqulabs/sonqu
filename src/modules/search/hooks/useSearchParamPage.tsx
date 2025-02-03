import { usePathname, useSearchParams } from 'next/navigation'

const useSearchParamPage = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const checkParamPage = (params) => {
    const page = params.get('page') || '1'

    if (page == '1') return true

    params.set('page', '1')
  }

  const getParamPage = () => {
    const params = new URLSearchParams(searchParams)
    return params.get('page') || ''
  }

  const urlPage = (data) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', data.toString())
    return `${pathname}?${params.toString()}`
  }
  return {
    getParamPage,
    urlPage,
    checkParamPage
  }
}

export default useSearchParamPage
