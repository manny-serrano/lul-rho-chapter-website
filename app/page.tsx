import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Users, Mail, Camera } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-lul-gradient-dark text-white py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Lambda Upsilon Lambda - Rho Chapter Logo"
              width={400}
              height={200}
              className="mx-auto mb-6"
            />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Rho Chapter</h1>
          <h2 className="text-2xl lg:text-3xl mb-4 text-white">La Unidad Latina</h2>
          <h3 className="text-xl lg:text-2xl mb-8 text-yellow-100">Lambda Upsilon Lambda Fraternity, Incorporated</h3>
          <p className="text-lg lg:text-xl mb-8 max-w-3xl mx-auto text-white">
            Welcome to the Rho Chapter of Lambda Upsilon Lambda Fraternity, Incorporated. We are a brotherhood dedicated
            to academic excellence, cultural awareness, and community service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-lul-gold hover:bg-lul-gold text-lul-brown font-semibold">
              <Link href="/recruitment">Join Our Brotherhood</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-lul-brown bg-transparent"
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Explore Our Chapter</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow hover-gradient group">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-lul-brown group-hover:text-white transition-colors" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">About Us</h3>
                <p className="text-gray-600 mb-4 group-hover:text-white transition-colors">
                  Learn about our history, mission, and values
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-transparent group-hover:bg-white group-hover:text-lul-brown"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow hover-gradient group">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-lul-brown group-hover:text-white transition-colors" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">Events</h3>
                <p className="text-gray-600 mb-4 group-hover:text-white transition-colors">
                  Stay updated with our upcoming activities
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-transparent group-hover:bg-white group-hover:text-lul-brown"
                >
                  <Link href="/events">View Events</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow hover-gradient group">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 mx-auto mb-4 text-lul-brown group-hover:text-white transition-colors" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">Contact</h3>
                <p className="text-gray-600 mb-4 group-hover:text-white transition-colors">
                  Get in touch with our chapter
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-transparent group-hover:bg-white group-hover:text-lul-brown"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow hover-gradient group">
              <CardContent className="p-6 text-center">
                <Camera className="h-12 w-12 mx-auto mb-4 text-lul-brown group-hover:text-white transition-colors" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">Gallery</h3>
                <p className="text-gray-600 mb-4 group-hover:text-white transition-colors">
                  View photos from our events and activities
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-transparent group-hover:bg-white group-hover:text-lul-brown"
                >
                  <Link href="/gallery">View Gallery</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Lambda Upsilon Lambda Fraternity, Incorporated is committed to providing a brotherhood that epitomizes
            academic excellence, cultural awareness, and community service. We strive to develop leaders who will
            contribute positively to society while maintaining our Latino heritage and values.
          </p>
          <Button asChild className="mt-8 bg-lul-brown hover:bg-lul-brown">
            <Link href="/about">Read More About Us</Link>
          </Button>
        </div>
      </section>

      {/* New Dark Values Section */}
      <section className="py-16 bg-dark-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gradient-gold">Our Core Values</h2>
            <p className="text-xl text-dark-secondary max-w-3xl mx-auto">
              The pillars that guide our brotherhood and define our commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-gradient-dark p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4 text-lul-gold">Academic Excellence</h3>
              <p className="text-dark-secondary">Pursuing the highest standards in education and intellectual growth</p>
            </div>
            <div className="card-gradient-dark p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4 text-lul-gold">Cultural Awareness</h3>
              <p className="text-dark-secondary">Celebrating and preserving our Latino heritage and traditions</p>
            </div>
            <div className="card-gradient-dark p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4 text-lul-gold">Community Service</h3>
              <p className="text-dark-secondary">Making a positive impact through service and leadership</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brother Access Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 mb-4">Current Brothers & Alumni</p>
          <Button
            asChild
            variant="outline"
            className="bg-transparent border-lul-brown text-lul-brown hover:bg-lul-brown hover:text-white"
          >
            <Link href="/admin">Access Brother Portal</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
