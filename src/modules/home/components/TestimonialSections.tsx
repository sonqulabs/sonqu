import { cn } from '@/lib/utils'
import { TestimonialAuthor, TestimonialCard } from './TestimonialCard'

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className
}: TestimonialsSectionProps) {
  return (
    <section className={cn('px-0', className)}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-4 text-center sm:gap-8">
        <div className="flex flex-col items-center gap-4 px-4">
          <h2 className="max-w-[720px] text-center font-poppins text-lg font-bold uppercase text-white md:text-3xl">
            {title}
          </h2>

          {/* <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p> */}
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex flex-row overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]">
            <div className="animate-marquee flex shrink-0 flex-row justify-around [gap:var(--gap)] group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) =>
                testimonials.map((testimonial, i) => (
                  <TestimonialCard key={`${setIndex}-${i}`} {...testimonial} />
                ))
              )}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  )
}
