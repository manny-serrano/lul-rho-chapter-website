import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"
import Image from "next/image"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Brotherhood Mixer",
      date: "2024-02-15",
      time: "7:00 PM",
      location: "Student Union Building",
      description: "Join us for an evening of fellowship and getting to know potential new members.",
      type: "Social",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Community Service Day",
      date: "2024-02-22",
      time: "9:00 AM",
      location: "Local Food Bank",
      description: "Help us give back to the community by volunteering at the local food bank.",
      type: "Service",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Academic Workshop",
      date: "2024-03-01",
      time: "6:00 PM",
      location: "Library Conference Room",
      description: "Study skills and time management workshop for all brothers and prospective members.",
      type: "Academic",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Cultural Heritage Celebration",
      date: "2024-03-15",
      time: "5:00 PM",
      location: "Campus Cultural Center",
      description: "Celebrate Latino heritage with traditional food, music, and cultural presentations.",
      type: "Cultural",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const pastEvents = [
    {
      id: 5,
      title: "Fall Initiation Ceremony",
      date: "2023-11-18",
      description: "Welcomed new brothers into our fraternity with a formal initiation ceremony.",
      type: "Ceremony",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      title: "Thanksgiving Food Drive",
      date: "2023-11-20",
      description: "Collected and distributed food to families in need during the holiday season.",
      type: "Service",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 7,
      title: "Alumni Networking Event",
      date: "2023-10-28",
      description: "Connected current brothers with successful alumni for mentorship and career guidance.",
      type: "Professional",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Social":
        return "bg-lul-blue-100 text-lul-brown"
      case "Service":
        return "bg-lul-green-100 text-lul-brown"
      case "Academic":
        return "bg-lul-purple-100 text-lul-brown"
      case "Cultural":
        return "bg-lul-orange-100 text-lul-brown"
      case "Ceremony":
        return "bg-lul-gold-100 text-lul-brown"
      case "Professional":
        return "bg-lul-gray-100 text-lul-brown"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      {/* Dark Hero Section */}
      <section className="bg-lul-gradient-radial text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Events</h1>
          <p className="text-xl text-dark-secondary max-w-3xl mx-auto">
            Stay updated with our upcoming activities and see highlights from past events
          </p>
        </div>
      </section>

      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          {/*
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Events</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our upcoming activities and see highlights from past events
            </p>
          </div>
          */}

          {/* Upcoming Events */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow card-gradient-light">
                  <div className="relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className={`absolute top-4 right-4 ${getTypeColor(event.type)}`}>{event.type}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-lul-brown">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>
                          {new Date(event.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Past Events */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Past Events</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow card-gradient-light">
                  <div className="relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className={`absolute top-4 right-4 ${getTypeColor(event.type)}`}>{event.type}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-lul-brown">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-gray-600 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Event Calendar Notice */}
          <section className="mt-16">
            <Card className="bg-lul-gradient border-0 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Stay Connected</h3>
                <p className="text-white mb-4">
                  Follow us on social media and join our mailing list to stay updated on all upcoming events and
                  activities.
                </p>
                <p className="text-sm text-dark-secondary">
                  Event details may change. Please check our social media or contact us for the most current
                  information.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
