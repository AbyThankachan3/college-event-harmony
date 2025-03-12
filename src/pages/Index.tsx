import React from "react";
import Layout from "@/components/Layout";
import FeaturedEvent from "@/components/FeaturedEvent";
import EventCard, { EventCardProps } from "@/components/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Index = () => {
  // Mock data
  const featuredEvent = {
    id: "1",
    title: "Annual Tech Symposium 2023",
    description: "Join us for the biggest technology event of the year, featuring keynote speakers from leading tech companies, hands-on workshops, and networking opportunities.",
    date: "October 15, 2023",
    time: "10:00 AM - 5:00 PM",
    location: "Main Campus Auditorium",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  };

  const upcomingEvents: EventCardProps[] = [
    {
      id: "2",
      title: "Career Fair: Engineering & Computer Science",
      date: "September 25, 2023",
      time: "11:00 AM - 3:00 PM",
      location: "Student Union Building",
      category: "Career",
      attendees: 120,
      maxAttendees: 200,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      id: "3",
      title: "Research Symposium",
      date: "October 1, 2023",
      time: "9:00 AM - 4:00 PM",
      location: "Science Building, Room 302",
      category: "Academic",
      attendees: 85,
      maxAttendees: 100,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    },
    {
      id: "4",
      title: "Student Club Fair",
      date: "September 15, 2023",
      time: "12:00 PM - 4:00 PM",
      location: "Campus Lawn",
      category: "Social",
      attendees: 250,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      id: "5",
      title: "Guest Lecture: AI Ethics",
      date: "October 5, 2023",
      time: "2:00 PM - 4:00 PM",
      location: "Psychology Building, Room 101",
      category: "Lecture",
      attendees: 75,
      maxAttendees: 150,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
  ];

  const categories = [
    "All",
    "Academic",
    "Social",
    "Career",
    "Technology",
    "Sports",
    "Arts",
    "Lecture",
  ];

  return (
    <Layout>
      <section className="pt-4 pb-12">
        <div className="container mx-auto px-4">
          {/* Featured Event */}
          <FeaturedEvent {...featuredEvent} />
          
          {/* Search Bar */}
          <div className="mt-12 mb-10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  placeholder="Search for events..." 
                  className="pl-10 pr-4 py-2 w-full"
                />
              </div>
              <Button className="bg-college-purple hover:bg-college-purple/90">
                Search
              </Button>
            </div>
          </div>
          
          {/* Categories */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <Tabs defaultValue="All">
              <TabsList className="w-full overflow-x-auto flex flex-nowrap justify-start mb-8 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="data-[state=active]:bg-college-purple data-[state=active]:text-white"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <TabsContent value="All" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.id} {...event} />
                  ))}
                </div>
              </TabsContent>
              
              {/* Other tabs content would follow the same pattern */}
              {categories.slice(1).map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {upcomingEvents
                      .filter((event) => event.category === category)
                      .map((event) => (
                        <EventCard key={event.id} {...event} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          {/* View All Events Button */}
          <div className="text-center mt-8">
            <Link to="/events">
              <Button variant="outline" className="border-college-purple text-college-purple hover:bg-college-light-purple">
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
