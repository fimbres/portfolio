import type React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { ProjectSlide } from "@/lib/contentful"
import { cn } from "@/lib/utils";

interface ProjectsCarouselProps {
  projects: ProjectSlide[];
}

export const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({ projects }) => {
  const mobilePhotos = ["Clean Location", "Eva Gyroscope"];

  return (
    <Carousel className="w-full max-w-lg mx-auto">
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index}>
            <a href={"/projects/" + project.slug}>
              <img src={project.carousselImage} alt={project.title} className={cn(mobilePhotos.includes(project.title) ? "w-[122px]" : "w-[300px]", "mx-auto")} />
              <h3 className="text-2xl font-semibold text-center mt-5">{project.title}</h3>
              <div className="text-center mt-1 font-light text-lg">
                <p>{project.shortDescription}</p>
              </div>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
