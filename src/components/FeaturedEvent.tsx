
import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FeaturedEventProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
}

const FeaturedEvent: React.FC<FeaturedEventProps> = ({
  id,
  title,
  description,
  date,
  time,
  location,
  category,
  image,
}) => {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover filter brightness-[0.6]"
        />
      </div>
      <div className="relative z-10 p-8 md:p-12 text-white">
        <Badge className="mb-4 bg-college-pink text-white">{category}</Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
        <p className="text-lg mb-6 text-gray-100 max-w-2xl">{description}</p>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center">
            <CalendarDays className="w-5 h-5 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            <span>{location}</span>
          </div>
        </div>
        
        <Link to={`/events/${id}`}>
          <Button className="bg-college-purple hover:bg-college-purple/90 text-white">
            Register Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedEvent;
