import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export default function ContactPage() {
  return (
    <div>
      {/* Dark Hero Section */}
      <section className="bg-gold-gradient text-lul-brown py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with the Rho Chapter of Lambda Upsilon Lambda Fraternity, Incorporated
          </p>
        </div>
      </section>

      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with the Rho Chapter of Lambda Upsilon Lambda Fraternity, Incorporated
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-lul-brown">Send Us a Message</CardTitle>
                  <p className="text-gray-600">
                    Have questions about our fraternity or interested in joining? We'd love to hear from you.
                  </p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="Your first name" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Your last name" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="What is this regarding?" required />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" placeholder="Tell us how we can help you..." rows={6} required />
                    </div>
                    <Button type="submit" className="w-full bg-lul-brown hover:bg-lul-brown">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </section>

            {/* Contact Information */}
            <section className="space-y-6">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-lul-brown">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-lul-brown mr-3" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">rho.chapter@lul.org</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-lul-brown mr-3" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-lul-brown mr-3" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-600">
                        University Campus
                        <br />
                        Student Organizations Building
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-lul-brown">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Stay connected with us on social media for the latest updates, events, and brotherhood activities.
                  </p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="hover:bg-lul-gold-50 bg-transparent">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-lul-gold-50 bg-transparent">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                    <Button variant="outline" size="icon" className="hover:bg-lul-gold-50 bg-transparent">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p>@LULRhoChapter</p>
                    <p>Lambda Upsilon Lambda - Rho Chapter</p>
                    <p>@RhoChapterLUL</p>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-lul-brown">Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-semibold">Monday - Friday</span>
                      <span className="text-gray-600">6:00 PM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Saturday</span>
                      <span className="text-gray-600">2:00 PM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Sunday</span>
                      <span className="text-gray-600">Closed</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    *Hours may vary during exam periods and holidays. Please contact us to confirm availability.
                  </p>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-lul-brown">Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start p-0 h-auto">
                      <a href="/recruitment" className="text-left">
                        Interested in Joining? Learn More →
                      </a>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start p-0 h-auto">
                      <a href="/events" className="text-left">
                        View Upcoming Events →
                      </a>
                    </Button>
                    <Button variant="ghost" className="w-full justify-start p-0 h-auto">
                      <a href="/about" className="text-left">
                        Learn About Our History →
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Response Time Notice */}
          <section className="mt-12">
            <Card className="bg-dark-gradient border-lul-gold text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 text-lul-gold">Response Time</h3>
                <p className="text-dark-secondary">
                  We typically respond to messages within 24-48 hours during the academic year. For urgent matters,
                  please call us directly or reach out via social media.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
