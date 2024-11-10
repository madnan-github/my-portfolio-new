import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { BackgroundBeams } from '@/components/ui/background-beams'

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 70 },
  { name: 'JavaScript', level: 70 },
  { name: 'TypeScript', level: 60 },
  { name: 'Node.js', level: 60 },
  { name: 'Next.js', level: 65 },
]

export default function Skills() {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      <h1 className="text-4xl font-bold text-center mb-8">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <Card key={skill.name}>
            <CardHeader>
              <CardTitle>{skill.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={skill.level} className="w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
      <BackgroundBeams />
    </div>
  )
}