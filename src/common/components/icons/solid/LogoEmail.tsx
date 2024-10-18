import { cn } from '@/lib/utils'

export const LogoEmail = ({ className }: Props) => {
    return (
        <div className={cn('flex items-center justify-center', className)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 14 14"
            >
                <g fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round"><path d="M10.05 7A3 3 0 1 1 7 4a3 3 0 0 1 3.05 3Z" /><path d="M10.05 7v1.3c0 3.49 5.47.2 2.6-4.54A6.59 6.59 0 0 0 7 .5A6.5 6.5 0 1 0 9.52 13" /></g>
            </svg>
        </div>
    )
}

type Props = {
    className: string
}