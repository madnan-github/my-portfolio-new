
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import Image from 'next/image'

const abouts = [
  { title: "Professional Expertise", content: "I specialize in web development using HTML, CSS, JavaScript & TypeScript and modern frameworks like Next.js. My focus is on creating sleek, responsive interfaces that deliver a smooth user experience across all devices."},
  { title: "Design Meets Development", content: "I have a deep appreciation for both design and functionality. I enjoy the process of turning creative ideas into fully-functional products, ensuring they are not only visually appealing but also easy to navigate for users."},
  { title: "Performance Optimization", content: "I believe that speed is critical to good user experience. That&apos;s why I focus on optimizing load times and interactions, ensuring that my projects run efficiently and smoothly, no matter the complexity."},
  { title: "Lifelong Learner", content: "Technology evolves rapidly, and I enjoy keeping up with the latest tools, frameworks, and industry trends. Continuous learning is a core part of my approach, helping me improve my skills and bring innovative solutions to the table."},
  { title:"Team Player and Collaborator", content: "My experience working closely with designers, developers, and project stakeholders has taught me the value of communication and teamwork. I thrive in collaborative environments and enjoy contributing to group success."},
  ]


export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      <div className="flex justify-center m-10">
            <Image
              src="/picture.jpg"
              alt="picture"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {abouts.map((about) => (
          <Card key={about.title}>
            <CardHeader>
              <CardTitle>{about.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{about.content}</p>
          </CardContent>
        </Card>
        ))}
      </div>
      <BackgroundGradient className="fixed inset-0 -z-10" />
    </div>
  )
}