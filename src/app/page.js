import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Briefcase, Users, TrendingUp, Star } from "lucide-react"
import LandingSearch from "@/components/landing-search"

export default async function Landing() {
  return (
    <div className="flex flex-col min-h-screen text-black">
      <main className="flex-1">
        {/* HERO */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg animate-fade-in text-black">
                  Find Your Dream Job Today 🚀
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl text-black">
                  Discover thousands of job opportunities with the best companies. Your next career move is just a click away.
                </p>
              </div>
              <div className="w-full max-w-xl space-y-2">
                <LandingSearch />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED JOBS */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center mb-12 text-black">
              🌟 Featured Jobs
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Software Engineer", company: "TechCorp", location: "San Francisco, CA", badge: "Hot" },
                { title: "Product Manager", company: "InnovateCo", location: "New York, NY", badge: "New" },
                { title: "Data Scientist", company: "DataDrive", location: "Boston, MA", badge: "Remote" },
              ].map((job, index) => (
                <Card
                  key={index}
                  className="rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition duration-300 bg-white"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-black">{job.title}</h3>
                      <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">{job.badge}</Badge>
                    </div>
                    <p className="mb-4 text-black">{job.company}</p>
                    <div className="flex items-center text-sm text-black">
                      <Briefcase className="mr-2 h-4 w-4 text-indigo-500" />
                      {job.location}
                    </div>
                    <Button className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center mb-12 text-black">
              🚀 How It Works
            </h2>
            <div className="grid gap-10 md:grid-cols-3">
              {[
                { icon: Search, title: "Search Jobs", description: "Browse through thousands of job listings." },
                { icon: Users, title: "Apply with Ease", description: "One-click application to your dream jobs." },
                { icon: TrendingUp, title: "Grow Your Career", description: "Get hired and take your career to new heights." },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 hover:shadow-xl hover:scale-105 transition duration-300 text-black"
                >
                  <div className="mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-white shadow-md">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-black">{step.title}</h3>
                  <p className="text-black">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100">
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center mb-12 text-black">
              💬 What Our Users Say
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Alex Johnson", role: "Software Developer", content: "I found my dream job through this portal. The process was smooth and efficient!" },
                { name: "Sarah Lee", role: "Marketing Specialist", content: "The variety of job listings is impressive. I had multiple offers within weeks!" },
                { name: "Michael Brown", role: "Data Analyst", content: "The platform's user-friendly interface made job hunting a breeze. Highly recommended!" },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition bg-white"
                >
                  <CardContent className="p-6 text-black">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar>
                        <AvatarImage src={`/placeholder-avatar-${index + 1}.jpg`} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-black">{testimonial.name}</p>
                        <p className="text-sm text-black">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-black">{testimonial.content}</p>
                    <div className="flex mt-4 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center text-black">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
                Take the Next Step in Your Career 🌟
              </h2>
              <p className="mx-auto max-w-[700px] text-lg md:text-xl text-black">
                Discover opportunities tailored to your skills and ambitions — your dream job is just a few clicks away.
              </p>
              <form className="flex w-full max-w-md items-center bg-white rounded-full p-2 shadow-lg">
                <Input
                  className="flex-1 border-0 rounded-full focus:ring-0 text-black placeholder:text-black/60"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button
                  type="submit"
                  className="ml-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 hover:opacity-90"
                >
                  Get Started
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="flex flex-col sm:flex-row items-center justify-between w-full px-6 py-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg">
        <p className="text-xs text-black">
          © 2025 <span className="font-semibold">JOB-KHOJO</span>. All rights reserved.
        </p>
        <nav className="flex gap-6 mt-2 sm:mt-0">
          <Link className="text-xs text-black hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-black hover:underline" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
