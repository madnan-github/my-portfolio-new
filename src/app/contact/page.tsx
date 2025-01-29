"use client"
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="container mx-auto px-4 py-16 relative">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
      <Card className="max-w-lg mx-auto pt-6 relative z-10">
        <CardContent>
          <form className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              rows={5}
              required
            />
            <Button type="submit">Send Message</Button>
          </form>
        </CardContent>
      </Card>
      {/* Ensure BackgroundBeams doesn't block inputs */}
      <BackgroundBeams className="pointer-events-none absolute inset-0 -z-10" />
    </div>
  );
}
