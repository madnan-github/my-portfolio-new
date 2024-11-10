import { Button } from '@/components/ui/button'
import { BackgroundBeams } from '@/components/ui/background-beams'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="p-8 relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-4">Muhammad Adnan</h1>
        <p className="text-xl mb-8 p-5 underline">A passionate Frontend Developer.</p>
        <p className="text-xl mb-8">As a Front-end Developer who bridges the gap between creativity and code. With every project, I aim to create immersive digital experiences that are not just functional but delightful. From sleek, responsive layouts to optimized performance, I believe in crafting web solutions that leave a lasting impression. Dive into my work, explore my journey, and let's turn innovative ideas into reality!</p>
        <Link href="/contact">
          <Button size="lg">Get in Touch</Button>
        </Link>
      </div>
      <BackgroundBeams />
    </div>
  )
}