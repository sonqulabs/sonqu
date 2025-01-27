import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const useSearchParamDifficult = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const getParamDifficult = () => {
    const params = new URLSearchParams(searchParams)
    return params.get('difficulty') || ''
  }

  const addParamDifficult = (valor: string) => {
    const params = new URLSearchParams(searchParams)

    params.set('difficulty', valor.toString())
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const deleteParamDifficult = () => {
    const params = new URLSearchParams(searchParams)
    params.delete('difficulty')

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return {
    getParamDifficult,
    addParamDifficult,
    deleteParamDifficult
  }
}

export default useSearchParamDifficult
