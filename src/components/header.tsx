// import Link from 'next/link'
// import { Button } from '@/components/ui/button'

// export default function Header() {
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 px-10 bg-background/80 backdrop-blur-sm">
//       <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <Link href="/" className="text-2xl font-bold">
//           PortFolio
//         </Link>
//         <ul className="flex space-x-4">
//           <li><Link href="/"><Button className="text-md font-bold"  variant="ghost">Home</Button></Link></li>
//           <li><Link href="/about"><Button className="text-md font-bold" variant="ghost">About</Button></Link></li>
//           <li><Link href="/skills"><Button className="text-md font-bold" variant="ghost">Skills</Button></Link></li>
//           <li><Link href="/projects"><Button className="text-md font-bold"  variant="ghost">Projects</Button></Link></li>
//           <li><Link href="/contact"><Button className="text-md font-bold"  variant="ghost">Contact</Button></Link></li>
//         </ul>
//       </nav>
//     </header>
//   )
// }
"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          PortFolio
        </Link>
        
        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4">
          <li><Link href="/"><Button className="text-md font-bold" variant="ghost">Home</Button></Link></li>
          <li><Link href="/about"><Button className="text-md font-bold" variant="ghost">About</Button></Link></li>
          <li><Link href="/skills"><Button className="text-md font-bold" variant="ghost">Skills</Button></Link></li>
          <li><Link href="/projects"><Button className="text-md font-bold" variant="ghost">Projects</Button></Link></li>
          <li><Link href="/contact"><Button className="text-md font-bold" variant="ghost">Contact</Button></Link></li>
        </ul>
      </nav>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden absolute top-16 left-0 right-0 bg-background shadow-md flex flex-col space-y-2 py-4 px-6">
          <li><Link href="/" onClick={() => setIsOpen(false)}><Button className="w-full text-md font-bold" variant="ghost">Home</Button></Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}><Button className="w-full text-md font-bold" variant="ghost">About</Button></Link></li>
          <li><Link href="/skills" onClick={() => setIsOpen(false)}><Button className="w-full text-md font-bold" variant="ghost">Skills</Button></Link></li>
          <li><Link href="/projects" onClick={() => setIsOpen(false)}><Button className="w-full text-md font-bold" variant="ghost">Projects</Button></Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}><Button className="w-full text-md font-bold" variant="ghost">Contact</Button></Link></li>
        </ul>
      )}
    </header>
  );
}
