import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import useSearchParamPage from './useSearchParamPage'

const useSearchParamCategories = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const { checkParamPage } = useSearchParamPage()

  const getParamCategories = (paramCategories: string) => {
    if (!paramCategories) return []
    return paramCategories.split('|')
  }
  const getCateries = () => {
    const params = new URLSearchParams(searchParams)
    const paramCategories = params.get('categories') || ''
    const re = getParamCategories(paramCategories)
    return re
  }

  const addParamCategories = (valor: string) => {
    const params = new URLSearchParams(searchParams)
    checkParamPage(params)
    const paramCategories = params.get('categories') || ''

    const re = getParamCategories(paramCategories)
    // console.log({ re, valor })

    if (re.some((item) => item == valor)) return
    re.push(valor)

    params.set('categories', re.join('|'))
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const deleteParamCategories = (name: string) => {
    const params = new URLSearchParams(searchParams)
    checkParamPage(params)
    const paramCategories = params.get('categories') || ''
    const re = getParamCategories(paramCategories)

    const data = re.filter((item) => item != name)

    if (data.length == 0) {
      params.delete('categories')
    } else {
      params.set('categories', data.toString())
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return {
    getCateries,
    addParamCategories,
    deleteParamCategories
  }
}

export default useSearchParamCategories
