"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Settings, Plus, Edit, Trash2, LogOut, Home, FileText, ImageIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    { title: "Total Events", value: "12", icon: Calendar, color: "text-blue-500" },
    { title: "Active Brothers", value: "24", icon: Users, color: "text-green-500" },
    { title: "Upcoming Events", value: "4", icon: Calendar, color: "text-orange-500" },
    { title: "Gallery Photos", value: "156", icon: ImageIcon, color: "text-purple-500" },
  ]

  const recentEvents = [
    { id: 1, title: "Brotherhood Mixer", date: "2024-02-15", status: "upcoming" },
    { id: 2, title: "Community Service Day", date: "2024-02-22", status: "upcoming" },
    { id: 3, title: "Academic Workshop", date: "2024-03-01", status: "draft" },
  ]

  const brothers = [
    { id: 1, name: "Carlos Rodriguez", position: "President", year: "Senior", status: "active" },
    { id: 2, name: "Miguel Santos", position: "Vice President", year: "Junior", status: "active" },
    { id: 3, name: "Diego Martinez", position: "Secretary", year: "Sophomore", status: "active" },
    { id: 4, name: "Antonio Lopez", position: "Treasurer", year: "Junior", status: "active" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-dark-gradient shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="LUL Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h1 className="text-xl font-bold text-white">Chapter Admin</h1>
                <p className="text-sm text-dark-secondary">Rho Chapter Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button asChild variant="outline" className="bg-transparent border-lul-gold text-white">
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  View Site
                </Link>
              </Button>
              <Button variant="outline" className="bg-transparent border-lul-gold text-white">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="brothers">Brothers</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-3xl font-bold">{stat.value}</p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentEvents.map((event) => (
                      <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{event.title}</h4>
                          <p className="text-sm text-gray-600">{event.date}</p>
                        </div>
                        <Badge variant={event.status === "upcoming" ? "default" : "secondary"}>{event.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="h-20 flex-col bg-lul-brown hover:bg-lul-brown">
                      <Plus className="h-6 w-6 mb-2" />
                      Add Event
                    </Button>
                    <Button className="h-20 flex-col bg-lul-gold hover:bg-lul-gold text-lul-brown">
                      <Users className="h-6 w-6 mb-2" />
                      Add Brother
                    </Button>
                    <Button className="h-20 flex-col bg-gray-600 hover:bg-gray-700">
                      <ImageIcon className="h-6 w-6 mb-2" />
                      Upload Photos
                    </Button>
                    <Button className="h-20 flex-col bg-green-600 hover:bg-green-700">
                      <FileText className="h-6 w-6 mb-2" />
                      Update Content
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Event Management</h2>
              <Button className="bg-lul-brown hover:bg-lul-brown">
                <Plus className="h-4 w-4 mr-2" />
                Add New Event
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>All Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-gray-600">{event.date}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={event.status === "upcoming" ? "default" : "secondary"}>{event.status}</Badge>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Brothers Tab */}
          <TabsContent value="brothers" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Brother Management</h2>
              <Button className="bg-lul-gold hover:bg-lul-gold text-lul-brown">
                <Plus className="h-4 w-4 mr-2" />
                Add New Brother
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Active Brothers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {brothers.map((brother) => (
                    <div key={brother.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Image
                          src="/placeholder.svg?height=50&width=50"
                          alt={brother.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div>
                          <h4 className="font-medium">{brother.name}</h4>
                          <p className="text-sm text-gray-600">{brother.position}</p>
                          <p className="text-xs text-gray-500">{brother.year}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="default">{brother.status}</Badge>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <h2 className="text-2xl font-bold">Content Management</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>About Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Update chapter history and mission statement</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Content
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Manage event photos and gallery</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Manage Photos
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contact Info</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Update contact details and social media</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Settings className="h-4 w-4 mr-2" />
                    Update Info
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold">Chapter Settings</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Manage admin access for brothers</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Users className="h-4 w-4 mr-2" />
                    Manage Users
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Site Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">Configure website settings and preferences</p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Settings className="h-4 w-4 mr-2" />
                    Site Config
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
