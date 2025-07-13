import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 1,
      title: "Brotherhood Retreat 2023",
      category: "Brotherhood",
      date: "October 2023",
      image: "/placeholder.svg?height=300&width=400",
      description: "Annual brotherhood retreat focusing on leadership development and team building.",
    },
    {
      id: 2,
      title: "Community Service Day",
      category: "Service",
      date: "September 2023",
      image: "/placeholder.svg?height=300&width=400",
      description: "Brothers volunteering at the local food bank to help families in need.",
    },
    {
      id: 3,
      title: "Cultural Heritage Night",
      category: "Cultural",
      date: "November 2023",
      image: "/placeholder.svg?height=300&width=400",
      description: "Celebrating Latino heritage with traditional music, dance, and food.",
    },
    {
      id: 4,
      title: "Academic Excellence Awards",
      category: "Academic",
      date: "December 2023",
      image: "/placeholder.svg?height=300&width=400",
      description: "Recognizing brothers who achieved outstanding academic performance.",
    },
    {
      id: 5,
      title: "New Member Initiation",
      category: "Ceremony",
      date: "November 2023",
      image: "/placeholder.svg?height=300&width=400",
      description: "Welcoming new brothers into our fraternity family.",
    },
    {
      id: 6,
      title: "Alumni Networking Event",
      category: "Professional",
      date: "October 2023",
      image: "/placeholder.svg?height=300&width=400",
      description: "Connecting current brothers with successful alumni for mentorship.",
    },
    {
      id: 7,
      title: "Spring Formal 2023",
      category: "Social",
      date: "April 2023",
      image: "/placeholder.svg?height=300&width=400",
      description: "Annual formal dinner celebrating our brotherhood and achievements.",
    },
    {
      id: 8,
      title: "Scholarship Fundraiser",
      category: "Fundraising",
      date: "March 2023",
      image: "/placeholder.svg?height=300&width=400",
      description: "Raising funds for our scholarship program to support Latino students.",
    },
    {
      id: 9,
      title: "Campus Involvement Fair",
      category: "Recruitment",
      date: "August 2023",
      image: "/placeholder.svg?height=300&width=400",
      description: "Representing our fraternity at the campus involvement fair.",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Brotherhood":
        return "bg-lul-brown-100 text-lul-brown"
      case "Service":
        return "bg-green-100 text-green-800"
      case "Cultural":
        return "bg-purple-100 text-purple-800"
      case "Academic":
        return "bg-blue-100 text-blue-800"
      case "Ceremony":
        return "bg-gold-100 text-gold-800"
      case "Professional":
        return "bg-gray-100 text-gray-800"
      case "Social":
        return "bg-pink-100 text-pink-800"
      case "Fundraising":
        return "bg-orange-100 text-orange-800"
      case "Recruitment":
        return "bg-teal-100 text-teal-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <>
      {/* Dark Hero Section */}
      <section className="bg-lul-gradient-vertical text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Gallery</h1>
          <p className="text-xl text-dark-secondary max-w-3xl mx-auto">
            Explore photos from our events, activities, and brotherhood moments
          </p>
        </div>
      </section>

      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          {/*
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Gallery</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore photos from our events, activities, and brotherhood moments
            </p>
          </div>
          */}

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                  />
                  <Badge className={`absolute top-4 right-4 ${getCategoryColor(item.category)}`}>{item.category}</Badge>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm bg-black bg-opacity-50 px-2 py-1 rounded">{item.date}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Gallery Categories */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Photo Categories</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Brotherhood",
                "Service",
                "Cultural",
                "Academic",
                "Ceremony",
                "Professional",
                "Social",
                "Fundraising",
                "Recruitment",
              ].map((category) => (
                <Badge key={category} className={`${getCategoryColor(category)} cursor-pointer hover:opacity-80`}>
                  {category}
                </Badge>
              ))}
            </div>
          </section>

          {/* Photo Submission Notice */}
          <section className="mt-16">
            <Card className="bg-brown-gradient border-0 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-lul-gold">Share Your Photos</h3>
                <p className="text-white mb-4">
                  Have photos from our events that you'd like to share? We'd love to feature them in our gallery!
                </p>
                <p className="text-sm text-dark-secondary">
                  Send your photos to our social media accounts or email them to us at rho.chapter@lul.org
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  )
}
