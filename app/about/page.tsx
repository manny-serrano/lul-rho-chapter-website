import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <>
      {/* Dark Hero Section */}
      <section className="bg-lul-gradient-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gradient-gold">About Us</h1>
          <p className="text-xl text-dark-secondary max-w-3xl mx-auto">
            Learn about the history, mission, and values of the Rho Chapter and Lambda Upsilon Lambda Fraternity,
            Incorporated
          </p>
        </div>
      </section>

      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about the history, mission, and values of the Rho Chapter and Lambda Upsilon Lambda Fraternity,
              Incorporated
            </p>
          </div>

          {/* Rho Chapter History */}
          <section className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-lul-brown">Rho Chapter History</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 mb-4">
                      The Rho Chapter of Lambda Upsilon Lambda Fraternity, Incorporated was established with the vision
                      of creating a strong brotherhood that would serve as a beacon of academic excellence and cultural
                      pride in our community.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Since our founding, we have been committed to upholding the values and traditions of Lambda
                      Upsilon Lambda while making a positive impact through community service, academic achievement, and
                      cultural awareness programs.
                    </p>
                    <p className="text-gray-700">
                      Our chapter has grown to become a respected organization on campus and in the community, producing
                      leaders who continue to make significant contributions in their professional and personal lives.
                    </p>
                  </div>
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Rho Chapter Brothers"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* National History */}
          <section className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-lul-brown">Lambda Upsilon Lambda National History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Lambda Upsilon Lambda Founders"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4">
                      Lambda Upsilon Lambda Fraternity, Incorporated was founded on February 19, 1982, at Rutgers
                      University in New Brunswick, New Jersey. The fraternity was established by a group of Latino men
                      who recognized the need for an organization that would address the unique challenges facing Latino
                      students in higher education.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Our founders envisioned a brotherhood that would promote academic excellence, cultural awareness,
                      and community service while providing a supportive network for Latino men pursuing higher
                      education.
                    </p>
                    <p className="text-gray-700">
                      Today, Lambda Upsilon Lambda has grown to include chapters across the United States, continuing to
                      fulfill its mission of developing Latino leaders and serving communities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Mission Statement */}
          <section className="mb-16">
            <Card className="bg-lul-gradient border-0 text-white">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-white text-center leading-relaxed">
                  Lambda Upsilon Lambda Fraternity, Incorporated is committed to providing a brotherhood that epitomizes
                  academic excellence, cultural awareness, and community service. We strive to develop leaders who will
                  contribute positively to society while maintaining our Latino heritage and values.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Core Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="card-gradient-light hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-lul-brown text-center">Academic Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    We are committed to achieving and maintaining the highest academic standards, supporting each
                    brother in their educational pursuits and professional development.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient-light hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-lul-brown text-center">Cultural Awareness</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    We celebrate and promote Latino culture, heritage, and traditions while fostering understanding and
                    appreciation of diversity in all its forms.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient-light hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-lul-brown text-center">Community Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">
                    We are dedicated to serving our communities through volunteer work, mentorship programs, and
                    initiatives that create positive social impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Current Chapter Members */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-lul-brown text-center">Meet Our Brothers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center mb-8">
                  Our current chapter is composed of dedicated individuals from diverse backgrounds, united by our
                  shared commitment to excellence and brotherhood.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((member) => (
                    <div key={member} className="text-center">
                      <Image
                        src="/placeholder.svg?height=150&width=150"
                        alt={`Brother ${member}`}
                        width={150}
                        height={150}
                        className="rounded-full mx-auto mb-4"
                      />
                      <h3 className="font-semibold text-gray-800">Brother Name</h3>
                      <p className="text-sm text-gray-600">Position/Year</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  )
}
