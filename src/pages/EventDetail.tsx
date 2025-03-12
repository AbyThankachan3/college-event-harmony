
import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from "@/components/ui/tabs";
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  User,
  BookOpen,
  Share2,
  Heart,
  MessageSquare
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock event data (would come from an API in a real application)
  const event = {
    id: id || "1",
    title: "Annual Tech Symposium 2023",
    description: "Join us for the biggest technology event of the year, featuring keynote speakers from leading tech companies, hands-on workshops, and networking opportunities. This event is perfect for students interested in technology careers, faculty members, and industry professionals. Light refreshments will be served.",
    date: "October 15, 2023",
    time: "10:00 AM - 5:00 PM",
    location: "Main Campus Auditorium",
    address: "123 University Way, Campus Building, Room 200",
    category: "Technology",
    organizer: "Computer Science Department",
    attendees: 320,
    maxAttendees: 500,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    speakers: [
      {
        name: "Dr. Jane Smith",
        title: "AI Research Lead, TechCorp",
        avatar: "JS",
        bio: "Dr. Smith is a leading researcher in artificial intelligence with over 15 years of experience in the field.",
      },
      {
        name: "John Doe",
        title: "VP of Engineering, Future Tech",
        avatar: "JD",
        bio: "John has helped scale multiple tech startups and currently leads a team of 200 engineers.",
      },
    ],
    agenda: [
      {
        time: "10:00 AM - 10:30 AM",
        title: "Registration & Coffee",
        description: "Sign in and receive your event materials",
      },
      {
        time: "10:30 AM - 11:30 AM",
        title: "Keynote: The Future of Tech",
        description: "Dr. Jane Smith discusses emerging trends in technology",
      },
      {
        time: "11:45 AM - 12:45 PM",
        title: "Panel Discussion: Career Paths in Tech",
        description: "Industry experts share insights on various career opportunities",
      },
      {
        time: "12:45 PM - 1:45 PM",
        title: "Lunch Break",
        description: "Networking lunch provided for all attendees",
      },
      {
        time: "2:00 PM - 3:30 PM",
        title: "Workshop Sessions",
        description: "Choose from 3 hands-on workshops (Web Dev, AI, Cybersecurity)",
      },
      {
        time: "3:45 PM - 4:45 PM",
        title: "Industry Showcase",
        description: "Companies demonstrate latest technologies and innovations",
      },
      {
        time: "4:45 PM - 5:00 PM",
        title: "Closing Remarks & Raffle",
        description: "Final thoughts and prize drawings for attendees",
      },
    ],
  };

  const attendancePercentage = (event.attendees / event.maxAttendees) * 100;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event details - takes up 2/3 of the space on large screens */}
          <div className="lg:col-span-2">
            <div className="relative rounded-t-lg overflow-hidden h-64 md:h-80">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-white rounded-b-lg shadow-sm p-6">
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <Badge className="mb-3 bg-college-purple">{event.category}</Badge>
                  <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
                  <p className="text-gray-500 mb-2">Organized by {event.organizer}</p>
                </div>
                <div className="flex space-x-2 mt-2 sm:mt-0">
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <CalendarDays className="w-5 h-5 mr-3 text-college-purple" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-3 text-college-purple" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-3 text-college-purple" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-3 text-college-purple" />
                  <span>{event.attendees} attending</span>
                </div>
              </div>
              
              <Tabs defaultValue="about">
                <TabsList className="w-full justify-start mb-6">
                  <TabsTrigger value="about" className="data-[state=active]:bg-college-purple data-[state=active]:text-white">
                    About
                  </TabsTrigger>
                  <TabsTrigger value="agenda" className="data-[state=active]:bg-college-purple data-[state=active]:text-white">
                    Agenda
                  </TabsTrigger>
                  <TabsTrigger value="speakers" className="data-[state=active]:bg-college-purple data-[state=active]:text-white">
                    Speakers
                  </TabsTrigger>
                  <TabsTrigger value="discussions" className="data-[state=active]:bg-college-purple data-[state=active]:text-white">
                    Discussions
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="about">
                  <h2 className="text-xl font-semibold mb-3">About This Event</h2>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  
                  <h3 className="text-lg font-semibold mb-2">Location Details</h3>
                  <p className="text-gray-700 mb-6">{event.address}</p>
                  
                  <div className="bg-gray-100 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">What to Bring</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>Student ID</li>
                      <li>Laptop (for workshop sessions)</li>
                      <li>Resume (for networking)</li>
                      <li>Questions for speakers</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="agenda">
                  <h2 className="text-xl font-semibold mb-4">Event Schedule</h2>
                  <div className="space-y-4">
                    {event.agenda.map((item, index) => (
                      <div key={index} className="border-l-4 border-college-purple pl-4 py-1">
                        <p className="text-sm font-medium text-college-purple">{item.time}</p>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="speakers">
                  <h2 className="text-xl font-semibold mb-4">Featured Speakers</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {event.speakers.map((speaker, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={`/placeholder-${index}.jpg`} alt={speaker.name} />
                              <AvatarFallback>{speaker.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">{speaker.name}</h3>
                              <p className="text-sm text-gray-500">{speaker.title}</p>
                              <p className="mt-2 text-gray-700">{speaker.bio}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="discussions">
                  <div className="text-center py-8">
                    <MessageSquare className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                    <h2 className="text-xl font-semibold mb-2">No discussions yet</h2>
                    <p className="text-gray-600 mb-4">Be the first to start a discussion about this event.</p>
                    <Button className="bg-college-purple hover:bg-college-purple/90">
                      Start a Discussion
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Registration sidebar - takes up 1/3 of the space on large screens */}
          <div>
            <div className="sticky top-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Registration</h2>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Available seats</span>
                      <span>
                        {event.attendees}/{event.maxAttendees}
                      </span>
                    </div>
                    <Progress value={attendancePercentage} className="h-2" />
                  </div>
                  
                  <Button className="w-full mb-4 bg-college-purple hover:bg-college-purple/90">
                    Register Now
                  </Button>
                  
                  <Separator className="my-4" />
                  
                  <h3 className="font-semibold mb-2">Event Details</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CalendarDays className="w-5 h-5 mr-3 text-college-purple shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Date</p>
                        <p className="text-gray-600">{event.date}</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 mr-3 text-college-purple shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Time</p>
                        <p className="text-gray-600">{event.time}</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 text-college-purple shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-gray-600">{event.location}</p>
                        <p className="text-gray-600 text-sm">{event.address}</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <User className="w-5 h-5 mr-3 text-college-purple shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Organizer</p>
                        <p className="text-gray-600">{event.organizer}</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="w-5 h-5 mr-3 text-college-purple shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Category</p>
                        <p className="text-gray-600">{event.category}</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
