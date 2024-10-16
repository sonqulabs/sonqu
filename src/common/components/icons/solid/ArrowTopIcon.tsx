import { Icon } from '@/common/interfaces/icon'

export const ArrowTopIcon = ({ ...rest }: Icon) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      version="1.2"
      baseProfile="tiny"
      viewBox="0 0 24 24"
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M18.2 13.3l-6.2-6.3-6.2 6.3c-.2.2-.3.5-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7z"></path>
    </svg>
  )
}
