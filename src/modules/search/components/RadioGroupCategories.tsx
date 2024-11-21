'use client'
import { Checkbox } from '@/common/components/shadcnui/checkbox'
import useSearchParamCategories from '../hooks/useSearchParamCategories'

const listFood = [
  {
    title: 'Tipos de Comida',
    data: ['Desayuno', 'Entrada', 'Almuerzo', 'Postre', 'Cena', 'Bebida']
  },
  { title: 'Sabor', data: ['Dulce', 'Salado', 'Amargo'] },
  { title: 'Dificultad', data: ['Dificil', 'Medio', 'Facil'] },
  { title: 'Comidas por Lugar', data: [] },
  { title: 'Comidas por Evento', data: [] },
  { title: 'Más populares', data: [] },
  { title: 'Ingredientres', data: [] }
]

const RadioGroupCategories = () => {
  const { addParamCategories, deleteParamCategories, getCateries } = useSearchParamCategories()

  const handleGroup = async (check, value) => {
    console.log({ value, check })
    if (check) {
      addParamCategories(value)
    } else {
      deleteParamCategories(value)
    }
  }

  return (
    <div className="flex flex-col gap-5">
      {listFood.map((item, i) => (
        <div className="" key={i}>
          <h3 className="mb-2 font-semibold uppercase">{item.title}</h3>
          <div className="ml-2 flex flex-col gap-1">
            {item.data.map((itemData, i) => (
              <div className="flex items-center space-x-2" key={i}>
                <Checkbox
                  // key={i}
                  // value={itemData}
                  // id={itemData}
                  checked={getCateries().some((category) => category == itemData)}
                  onCheckedChange={(check) => handleGroup(check, itemData)}
                />
                <label htmlFor={itemData}>{itemData}</label>
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
      ))}
    </div>
  )
}

export default RadioGroupCategories
