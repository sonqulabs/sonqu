'use client'
import { Checkbox } from '@/common/components/shadcnui/checkbox'
import useSearchParamCategories from '../hooks/useSearchParamCategories'
import { useEffect, useState } from 'react'
import { Button } from '@/common/components/shadcnui/button'
import IconAdjustmentsHorizontal from '../Icons/IconAdjustmentsHorizontal'
import { getAllCategoriesGroup } from '../services/searchService'

// const listFood = [
//   {
//     title: 'Tipos de Comida',
//     data: ['Desayuno', 'Entrada', 'Almuerzo', 'Postre', 'Cena', 'Bebida']
//   },
//   { title: 'Sabor', data: ['Dulce', 'Salado', 'Amargo'] },
//   { title: 'Dificultad', data: ['Dificil', 'Medio', 'Facil'] },
//   { title: 'Comidas por Lugar', data: [] },
//   { title: 'Comidas por Evento', data: [] },
//   { title: 'Más populares', data: [] },
//   { title: 'Ingredientres', data: [] }
// ]

const RadioGroupCategories = () => {
  const { addParamCategories, deleteParamCategories, getCateries } = useSearchParamCategories()

  const [listFood, setListFood] = useState([])

  const [isOpen, setIsOpen] = useState(false)
  const toggleFilter = () => setIsOpen(!isOpen)

  const handleGroup = async (check, value) => {
    console.log({ value, check })
    if (check) {
      addParamCategories(value)
    } else {
      deleteParamCategories(value)
    }
  }

  useEffect(() => {
    const getCG = async () => {
      setListFood(await getAllCategoriesGroup())
    }

    getCG()
  }, [])

  return (
    <>
      <div className="hidden flex-col gap-5 md:flex">
        <ListCategoriesGroup
          listFood={listFood}
          getCateries={getCateries}
          handleGroup={handleGroup}
        />
      </div>

      <div className="h-fit w-full overflow-hidden rounded-lg border bg-background md:hidden md:w-64">
        <Button
          onClick={toggleFilter}
          variant="ghost"
          className="flex w-full items-center justify-between p-4 md:hidden"
        >
          <span className="flex items-center gap-2 text-base">
            <IconAdjustmentsHorizontal />
            Filtros
          </span>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 15l6 -6l6 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 9l6 6l6 -6" />
            </svg>
          )}
        </Button>
        <div className={`${isOpen ? 'block' : 'hidden'} p-4 md:block`}>
          <div className="flex flex-col gap-5">
            <ListCategoriesGroup
              listFood={listFood}
              getCateries={getCateries}
              handleGroup={handleGroup}
            />
          </div>
        </div>
      </div>
    </>
  )
}

const ListCategoriesGroup = ({ listFood, getCateries, handleGroup }) => {
  return listFood.map((item, i) => (
    <div className="" key={i}>
      <h3 className="mb-2 font-semibold uppercase">{item?.name}</h3>
      <div className="ml-2 flex flex-col gap-1">
        {item?.Category?.map((itemData, i) => (
          <div className="flex items-center space-x-2" key={i}>
            <Checkbox
              // key={i}
              // value={itemData.name}
              // id={itemData.name}
              checked={getCateries().some((category) => category == itemData.name)}
              onCheckedChange={(check) => handleGroup(check, itemData.name)}
            />
            <label htmlFor={itemData.name}>{itemData.name}</label>
          </div>
        ))}
        {/* <RadioGroup defaultValue="default" onValueChange={(value) => handleGroup(value)}>
        {item.data.map((itemData, i) => (
          <div className="flex items-center space-x-2" key={i}>
            <RadioGroupItem value={itemData} id={itemData} />
            <label htmlFor={itemData}>{itemData}</label>
          </div>
        ))}
      </RadioGroup> */}
      </div>
    </div>
  ))
}

export default RadioGroupCategories
