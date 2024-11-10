import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BackgroundBeams } from '@/components/ui/background-beams'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16 relative">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
      <Card className="max-w-lg mx-auto">
        <CardContent>
        <form className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"

                    className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                    rows={5}
                    required
                ></textarea>
               <Button type="submit">Send Message</Button>
            </form>
        </CardContent>
      </Card>
      <BackgroundBeams />
    </div>
  )
}