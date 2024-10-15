import { Icon } from '@/common/interfaces/icon'

export const MenuIcon = ({ ...rest }: Icon) => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  )
}
