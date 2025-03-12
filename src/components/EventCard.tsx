
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  attendees: number;
  maxAttendees?: number;
  image: string;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  date,
  time,
  location,
  category,
  attendees,
  maxAttendees,
  image,
}) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-3 right-3 bg-college-purple">
          {category}
        </Badge>
      </div>
      <CardHeader className="p-4">
        <h3 className="text-xl font-semibold line-clamp-1">{title}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <CalendarDays className="w-4 h-4 mr-2 text-college-purple" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2 text-college-purple" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2 text-college-purple" />
          <span className="truncate">{location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Users className="w-4 h-4 mr-2 text-college-purple" />
          <span>
            {attendees} {maxAttendees ? `/ ${maxAttendees}` : ""} attendees
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/events/${id}`} className="w-full">
          <Button className="w-full bg-college-purple hover:bg-college-purple/90">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
