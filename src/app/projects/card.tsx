'use client'
import { GitHubIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@/components/ui/carousel'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export interface CardProjectProps {
  project: {
    id: string
    title: string
    subtitle: string
    description: string
    slug: string
    github: string | null
    imagesUrl: string[]
    topProject: boolean
    createdAt: Date
  }
}

export function ProjectCard({ project }: CardProjectProps) {
  const router = useRouter()

  function handleReadMore(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    router.push(`/projects/${project.slug}`)
  }

  function handleGoToGithub(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    if (project.github) {
      window.open(project.github, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="flex h-full flex-col gap-4 rounded-2xl border border-zinc-400 p-4 shadow dark:border-zinc-700">
      {project.imagesUrl.length > 0 ? (
        <Carousel>
          <CarouselContent>
            {project.imagesUrl.map(imageUrl => (
              <CarouselItem key={imageUrl}>
                <Image
                  key={imageUrl}
                  src={imageUrl}
                  alt={project.title}
                  width={1000}
                  height={1000}
                  quality={100}
                  priority
                  className="aspect-video rounded-lg border border-zinc-400 object-cover object-center dark:border-zinc-700"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselButtons />
        </Carousel>
      ) : (
        <div className="flex aspect-video items-center justify-center rounded-lg border border-zinc-400 bg-zinc-400 dark:border-zinc-700 dark:bg-zinc-800">
          <h1>Project without image</h1>
        </div>
      )}

      <div className="flex-1 text-center lg:text-start">
        <h1 className="mb-2 line-clamp-2 font-bold font-mono text-xl">
          {project.title}
        </h1>
        <h2 className="font-semibold text-zinc-600 dark:text-zinc-400">
          {project.subtitle}
        </h2>
      </div>

      <div className="flex gap-5">
        <Button variant="outline" className="flex-1" onClick={handleReadMore}>
          Read more
        </Button>

        {project.github && (
          <Button variant="outline" size="icon" onClick={handleGoToGithub}>
            <GitHubIcon />
          </Button>
        )}
      </div>
    </div>
  )
}

function CarouselButtons() {
  const { scrollNext, canScrollNext, scrollPrev, canScrollPrev } = useCarousel()

  function handleScrollPrev(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    scrollPrev()
  }

  function handleScrollNext(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    scrollNext()
  }

  return (
    <div className="mt-2 flex gap-x-2">
      <Button
        variant="outline"
        size="icon"
        disabled={!canScrollPrev}
        onClick={handleScrollPrev}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className=""
        disabled={!canScrollNext}
        onClick={handleScrollNext}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  )
}
