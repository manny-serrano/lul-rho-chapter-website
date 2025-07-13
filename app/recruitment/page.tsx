import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle, Users, GraduationCap, Heart } from "lucide-react"

export default function RecruitmentPage() {
  return (
    <div>
      {/* Dark Hero Section */}
      <section className="bg-brown-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gradient-gold">Join Our Brotherhood</h1>
          <p className="text-xl text-dark-secondary max-w-3xl mx-auto">
            Become part of a legacy of academic excellence, cultural awareness, and community service
          </p>
        </div>
      </section>

      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Join Our Brotherhood</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Become part of a legacy of academic excellence, cultural awareness, and community service
            </p>
          </div>

          {/* Why Join Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Why Join Lambda Upsilon Lambda?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <GraduationCap className="h-12 w-12 mx-auto mb-4 text-lul-brown" />
                  <CardTitle className="text-xl text-center">Academic Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Access to study groups, tutoring, scholarship opportunities, and academic mentorship to help you
                    achieve your educational goals.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 mx-auto mb-4 text-lul-brown" />
                  <CardTitle className="text-xl text-center">Lifelong Brotherhood</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Build lasting friendships and professional networks with brothers who share your values and
                    commitment to excellence.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Heart className="h-12 w-12 mx-auto mb-4 text-lul-brown" />
                  <CardTitle className="text-xl text-center">Community Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    Make a difference through community service projects, cultural events, and mentorship programs that
                    benefit society.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Requirements Section */}
          <section className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-lul-brown text-center">Membership Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Academic Requirements</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span>Minimum 2.5 GPA</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span>Enrolled as a full-time student</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span>Completed at least 12 credit hours</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">Personal Requirements</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span>Commitment to our values</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span>Leadership potential</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        <span>Community service mindset</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Process Section */}
          <section className="mb-16 bg-dark-gradient py-16 rounded-lg">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8 text-white">How to Join</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="card-gradient-dark text-white border-lul-gold">
                  <CardHeader>
                    <div className="w-12 h-12 bg-lul-gold text-lul-brown rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      1
                    </div>
                    <CardTitle className="text-lg text-center text-lul-gold">Express Interest</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-dark-secondary text-center text-sm">
                      Fill out our interest form or attend an information session to learn more about our brotherhood.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-gradient-dark text-white border-lul-gold">
                  <CardHeader>
                    <div className="w-12 h-12 bg-lul-gold text-lul-brown rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      2
                    </div>
                    <CardTitle className="text-lg text-center text-lul-gold">Meet the Brothers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-dark-secondary text-center text-sm">
                      Attend social events and meetings to get to know current brothers and learn about our activities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-gradient-dark text-white border-lul-gold">
                  <CardHeader>
                    <div className="w-12 h-12 bg-lul-gold text-lul-brown rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      3
                    </div>
                    <CardTitle className="text-lg text-center text-lul-gold">Application Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-dark-secondary text-center text-sm">
                      Submit your formal application and participate in the interview process with current brothers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-gradient-dark text-white border-lul-gold">
                  <CardHeader>
                    <div className="w-12 h-12 bg-lul-gold text-lul-brown rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      4
                    </div>
                    <CardTitle className="text-lg text-center text-lul-gold">New Member Process</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-dark-secondary text-center text-sm">
                      Complete the new member education program and become an initiated brother of Lambda Upsilon
                      Lambda.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-lul-brown">When does recruitment take place?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We hold recruitment events throughout the academic year, with formal recruitment typically occurring
                    at the beginning of each semester. Follow our social media or contact us for specific dates and
                    events.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-lul-brown">Do I need to be Latino to join?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    While Lambda Upsilon Lambda was founded to serve the Latino community, we welcome men of all
                    backgrounds who share our commitment to academic excellence, cultural awareness, and community
                    service.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-lul-brown">What are the time commitments?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We understand that academics come first. Our activities are designed to complement your studies,
                    with weekly meetings, community service projects, and social events that fit around your academic
                    schedule.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-lul-brown">Are there membership fees?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Yes, there are membership fees that cover national dues, chapter activities, and events. We work
                    with prospective members to ensure that financial constraints don't prevent qualified candidates
                    from joining our brotherhood.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Interest Form */}
          <section>
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-lul-brown text-center">Express Your Interest</CardTitle>
                <p className="text-gray-600 text-center">
                  Fill out this form to learn more about joining our brotherhood
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="year">Academic Year</Label>
                      <Input id="year" placeholder="e.g., Sophomore" />
                    </div>
                    <div>
                      <Label htmlFor="major">Major</Label>
                      <Input id="major" placeholder="Your major" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="gpa">Current GPA</Label>
                    <Input id="gpa" placeholder="e.g., 3.5" />
                  </div>
                  <div>
                    <Label htmlFor="message">Why are you interested in joining Lambda Upsilon Lambda?</Label>
                    <Textarea id="message" placeholder="Tell us about your interest in our fraternity..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-lul-brown hover:bg-lul-brown">
                    Submit Interest Form
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
