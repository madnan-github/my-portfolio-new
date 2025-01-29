import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import Image from 'next/image'

const projects = [
    { title: "Resturant Website", description: "Food Resturant Website.", image: "/img/resturant.png", link: "https://hackathon-webite-sanity.vercel.app/", code: "https://github.com/madnan-github/hackathon-sanity" },
    { title: "Web Automation", description: "Web Automation Services, including Web, App, and Desktop Application.", image: "/img/portfolio.png", link: "https://websservices.vercel.app/", code: "https://github.com/madnan-github/web-services" },
    { title: "Digital Servies", description: "Website for Digital Services.", image: "/img/digitalweb.jpg", link: "https://webdigitalservices.vercel.app/", code: "https://github.com/madnan-github/web-services-02" },
    { title: "E-Commerce Website", description: "E-Commerce Website for Ladies Bags.", image: "/img/bags.jpg", link: "https://ecommerce-web01.vercel.app/",code: "https://github.com/madnan-github/ecommerce-web01" },
    { title: "E-Commerce Website", description: "E-Commerce Perfume Website.", image: "/img/perfume.png", link: "https://e-commerce-perfume.vercel.app/",code: "https://github.com/madnan-github/e-commerce-perfume" },
    { title: "Editable Resume Builder", description: "Editable Resume Builder.", image: "/img/resume.jpg", link: "https://resumelink.vercel.app/", code: "https://github.com/madnan-github/hackathon_milestone4" },
    { title: "ATM Program", description: "A Node.js simulation of basic ATM operations like balance inquiry, withdrawal, and deposit.", image: "/img/atm.png", link: "https://github.com/madnan-github/NP_ATM" },
    { title: "Currency Converter", description: "A tool that converts currencies based on real-time exchange rates.", image: "/img/currency.png", link: "https://github.com/madnan-github/NP_currencyconverter" },
    { title: "Number Guessing Game", description: "A fun game where users guess a randomly generated number within a given range.", image: "/img/num-game.png", link: "https://github.com/madnan-github/NP_NumberGuessingGame" },
    { title: "Simple Calculator", description: "Performing basic arithmetic operations like addition, subtraction, multiplication, and division.", image: "/img/calc.png", link: "https://github.com/madnan-github/NP_SimpleCalculator" },
    { title: "To Do App", description: "A task management app allowing users to add, track, and delete to-do items.", image: "/img/todoapp.png", link: "https://github.com/madnan-github/NP_todo" },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
            <Image src={project.image} alt="project image" width={150} height={150} className="w-[150px] h-[150px] p-4 border-4 rounded-full max-auto"></Image>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild className="mr-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
              </Button>
              <Button asChild>
                <a href={project.code} target="_blank" rel="noopener noreferrer">Github code</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <BackgroundGradient className="fixed inset-0 -z-10" />
    </div>
  )
}