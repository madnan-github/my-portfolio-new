import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-10 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          PortFolio
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/"><Button className="text-md font-bold"  variant="ghost">Home</Button></Link></li>
          <li><Link href="/about"><Button className="text-md font-bold" variant="ghost">About</Button></Link></li>
          <li><Link href="/skills"><Button className="text-md font-bold" variant="ghost">Skills</Button></Link></li>
          <li><Link href="/projects"><Button className="text-md font-bold"  variant="ghost">Projects</Button></Link></li>
          <li><Link href="/contact"><Button className="text-md font-bold"  variant="ghost">Contact</Button></Link></li>
        </ul>
      </nav>
    </header>
  )
}