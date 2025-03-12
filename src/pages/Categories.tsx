
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Users, 
  Briefcase, 
  Cpu, 
  Trophy,
  Palette, 
  BookOpen,
  Music
} from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: "academic",
      name: "Academic",
      description: "Lectures, seminars, and educational events",
      icon: GraduationCap,
      color: "bg-blue-100 text-blue-600",
      count: 24,
    },
    {
      id: "social",
      name: "Social",
      description: "Parties, mixers, and networking events",
      icon: Users,
      color: "bg-pink-100 text-pink-600",
      count: 18,
    },
    {
      id: "career",
      name: "Career",
      description: "Career fairs, job interviews, and professional development",
      icon: Briefcase,
      color: "bg-green-100 text-green-600",
      count: 12,
    },
    {
      id: "technology",
      name: "Technology",
      description: "Tech talks, hackathons, and coding competitions",
      icon: Cpu,
      color: "bg-purple-100 text-purple-600",
      count: 15,
    },
    {
      id: "sports",
      name: "Sports",
      description: "Games, tournaments, and athletic activities",
      icon: Trophy,
      color: "bg-orange-100 text-orange-600",
      count: 20,
    },
    {
      id: "arts",
      name: "Arts",
      description: "Performances, exhibitions, and creative workshops",
      icon: Palette,
      color: "bg-red-100 text-red-600",
      count: 9,
    },
    {
      id: "lecture",
      name: "Lecture",
      description: "Guest speakers, panel discussions, and presentations",
      icon: BookOpen,
      color: "bg-yellow-100 text-yellow-600",
      count: 21,
    },
    {
      id: "entertainment",
      name: "Entertainment",
      description: "Concerts, movie nights, and fun activities",
      icon: Music,
      color: "bg-indigo-100 text-indigo-600",
      count: 14,
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Event Categories</h1>
          <p className="text-gray-600">
            Browse events by category to find exactly what you're looking for
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={`/events?category=${category.id}`} key={category.id}>
              <Card className="transition-all hover:shadow-md cursor-pointer h-full">
                <CardContent className="p-6 flex flex-col">
                  <div className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-3 flex-grow">{category.description}</p>
                  <div className="text-sm font-medium text-college-purple">
                    {category.count} events
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
