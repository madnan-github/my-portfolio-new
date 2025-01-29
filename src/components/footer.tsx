import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-sm py-8 mx-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-md font-bold">
          <p>&copy; 2024 Muhammad Adnan. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/madnan-github" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-primary" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad~adnan/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}