
import React, { useState } from "react";
import Layout from "@/components/Layout";
import EventCard, { EventCardProps } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Search, CalendarDays, SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  
  // Mock data
  const events: EventCardProps[] = [
    {
      id: "1",
      title: "Annual Tech Symposium 2023",
      date: "October 15, 2023",
      time: "10:00 AM - 5:00 PM",
      location: "Main Campus Auditorium",
      category: "Technology",
      attendees: 320,
      maxAttendees: 500,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
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
    {
      id: "6",
      title: "Freshman Welcome Party",
      date: "October 10, 2023",
      time: "7:00 PM - 11:00 PM",
      location: "Student Center Ballroom",
      category: "Social",
      attendees: 175,
      maxAttendees: 200,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      id: "7",
      title: "Basketball Tournament",
      date: "October 20, 2023",
      time: "2:00 PM - 6:00 PM",
      location: "University Gymnasium",
      category: "Sports",
      attendees: 80,
      maxAttendees: 120,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    },
    {
      id: "8",
      title: "Art Exhibition",
      date: "November 5, 2023",
      time: "10:00 AM - 8:00 PM",
      location: "Fine Arts Building Gallery",
      category: "Arts",
      attendees: 45,
      maxAttendees: 100,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
  ];

  const categories = [
    "All Categories",
    "Academic",
    "Social",
    "Career",
    "Technology",
    "Sports",
    "Arts",
    "Lecture",
  ];

  const locations = [
    "All Locations",
    "Main Campus Auditorium", 
    "Student Union Building",
    "Science Building",
    "Campus Lawn",
    "Psychology Building",
    "Student Center Ballroom",
    "University Gymnasium",
    "Fine Arts Building Gallery",
  ];

  // Filter component for mobile
  const FiltersContent = () => (
    <div className="space-y-6 p-2">
      <div>
        <h3 className="text-lg font-medium mb-2">Category</h3>
        <Select defaultValue="All Categories">
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-2">Location</h3>
        <Select defaultValue="All Locations">
          <SelectTrigger>
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((loc) => (
              <SelectItem key={loc} value={loc}>
                {loc}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2">Date</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left border-gray-300"
            >
              <CalendarDays className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Select date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              className={cn("p-3 pointer-events-auto")}
            />
          </PopoverContent>
        </Popover>
      </div>
      
      <Button className="w-full bg-college-purple hover:bg-college-purple/90">
        Apply Filters
      </Button>
    </div>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">All Events</h1>
          
          {/* Mobile filter button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <h2 className="text-xl font-bold mb-4">Filters</h2>
              <FiltersContent />
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Desktop filters */}
          <div className="hidden md:block w-full md:w-64 shrink-0">
            <div className="sticky top-8 border rounded-lg p-6 bg-white">
              <h2 className="text-xl font-bold mb-4">Filters</h2>
              <FiltersContent />
            </div>
          </div>
          
          {/* Events list */}
          <div className="flex-1">
            {/* Search for desktop */}
            <div className="mb-6 flex flex-col md:flex-row gap-4">
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
            
            {/* Results */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                <Button variant="outline" className="border-college-purple text-college-purple" disabled>
                  Previous
                </Button>
                <Button className="bg-college-purple hover:bg-college-purple/90">
                  1
                </Button>
                <Button variant="outline" className="border-college-purple text-college-purple">
                  2
                </Button>
                <Button variant="outline" className="border-college-purple text-college-purple">
                  3
                </Button>
                <Button variant="outline" className="border-college-purple text-college-purple">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Events;
