import { Button } from '@/common/components/shadcnui/button'
import { RadioGroup, RadioGroupItem } from '@/common/components/shadcnui/radio-group'
import { useState } from 'react'
import useSearchParamDifficult from '../../hooks/useSearchParamDifficult'

const DifficultRadioGroup = () => {
  const [isOpen, setIsOpen] = useState(true)
  const toggleFilter = () => setIsOpen(!isOpen)

  const { addParamDifficult, deleteParamDifficult } = useSearchParamDifficult()

  const handleClickRadioGroup = (data) => {
    if (data == 'none') {
      deleteParamDifficult()
    } else {
      addParamDifficult(data)
    }
  }

  return (
    <div className="h-fit w-full overflow-hidden rounded-lg border bg-background shadow-md md:w-64">
      <Button
        onClick={toggleFilter}
        variant="ghost"
        className="flex h-fit w-full items-center justify-between p-3"
      >
        <span className="flex items-center gap-2 text-base">
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-align-box-right-middle"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 15h2" />
            <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
            <path d="M11 12h6" />
            <path d="M13 9h4" />
          </svg>
          Dificultad
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
      <div className={`${isOpen ? 'block' : 'hidden'} `}>
        <div className="flex flex-col gap-5 py-4 pl-5">
          <RadioGroup defaultValue="none" onValueChange={handleClickRadioGroup}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="none" id="r0" />
              <label htmlFor="r0">None</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="facil" id="r1" />
              <label htmlFor="r1">Facil</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medio" id="r2" />
              <label htmlFor="r2">Medio</label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dificil" id="r3" />
              <label htmlFor="r3">Dificil</label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  )
}

export default DifficultRadioGroup
