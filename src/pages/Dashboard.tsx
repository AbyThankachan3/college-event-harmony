
import React from "react";
import Layout from "@/components/Layout";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar as CalendarIcon, 
  Users, 
  Ticket, 
  Clock,
  Plus,
  Edit,
  Trash,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  XCircle
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  // Mock data
  const upcomingEvents = [
    {
      id: "1",
      title: "Annual Tech Symposium 2023",
      date: "October 15, 2023",
      location: "Main Campus Auditorium",
      status: "published",
      attendees: 320,
      maxAttendees: 500,
    },
    {
      id: "2",
      title: "Career Fair: Engineering & Computer Science",
      date: "September 25, 2023",
      location: "Student Union Building",
      status: "published",
      attendees: 120,
      maxAttendees: 200,
    },
    {
      id: "3",
      title: "Research Symposium",
      date: "October 1, 2023",
      location: "Science Building, Room 302",
      status: "draft",
      attendees: 85,
      maxAttendees: 100,
    },
  ];
  
  const recentRegistrations = [
    { id: 1, name: "Jane Smith", email: "jane.smith@university.edu", event: "Annual Tech Symposium 2023", status: "confirmed", date: "September 10, 2023" },
    { id: 2, name: "John Doe", email: "john.doe@university.edu", event: "Career Fair", status: "confirmed", date: "September 9, 2023" },
    { id: 3, name: "Emily Johnson", email: "emily.j@university.edu", event: "Research Symposium", status: "pending", date: "September 8, 2023" },
    { id: 4, name: "Michael Brown", email: "michael.b@university.edu", event: "Annual Tech Symposium 2023", status: "confirmed", date: "September 8, 2023" },
    { id: 5, name: "Sarah Wilson", email: "sarah.w@university.edu", event: "Annual Tech Symposium 2023", status: "declined", date: "September 7, 2023" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-500">Published</Badge>;
      case "draft":
        return <Badge variant="outline" className="text-amber-600 border-amber-600">Draft</Badge>;
      case "confirmed":
        return <Badge className="bg-green-500">Confirmed</Badge>;
      case "pending":
        return <Badge variant="outline" className="text-amber-600 border-amber-600">Pending</Badge>;
      case "declined":
        return <Badge variant="destructive">Declined</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">Dashboard</h1>
          <Link to="/create-event">
            <Button className="bg-college-purple hover:bg-college-purple/90">
              <Plus className="mr-2 h-4 w-4" /> Create Event
            </Button>
          </Link>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">Total Events</h3>
                <div className="p-2 bg-college-light-purple rounded-full">
                  <CalendarIcon className="h-5 w-5 text-college-purple" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold">8</p>
                <p className="text-sm text-green-500 flex items-center">
                  <ArrowUpRight className="h-4 w-4 mr-1" /> 25%
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">Total Attendees</h3>
                <div className="p-2 bg-blue-100 rounded-full">
                  <Users className="h-5 w-5 text-blue-500" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold">1,246</p>
                <p className="text-sm text-green-500 flex items-center">
                  <ArrowUpRight className="h-4 w-4 mr-1" /> 12%
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">Registrations</h3>
                <div className="p-2 bg-green-100 rounded-full">
                  <Ticket className="h-5 w-5 text-green-500" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold">854</p>
                <p className="text-sm text-green-500 flex items-center">
                  <ArrowUpRight className="h-4 w-4 mr-1" /> 18%
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">Upcoming Events</h3>
                <div className="p-2 bg-amber-100 rounded-full">
                  <Clock className="h-5 w-5 text-amber-500" />
                </div>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold">3</p>
                <p className="text-sm text-gray-500 flex items-center">
                  Next: 5 days
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Tabs Section */}
        <Tabs defaultValue="upcoming" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-college-purple data-[state=active]:text-white">
              Upcoming Events
            </TabsTrigger>
            <TabsTrigger value="registrations" className="data-[state=active]:bg-college-purple data-[state=active]:text-white">
              Recent Registrations
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming">
            <Card>
              <CardHeader>
                <CardTitle>Manage Events</CardTitle>
                <CardDescription>
                  View and manage your upcoming events.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Attendees</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingEvents.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium">{event.title}</TableCell>
                        <TableCell>{event.date}</TableCell>
                        <TableCell>{event.location}</TableCell>
                        <TableCell>{getStatusBadge(event.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress 
                              value={(event.attendees / event.maxAttendees) * 100}
                              className="h-2 w-24"
                            />
                            <span className="text-sm text-gray-500">
                              {event.attendees}/{event.maxAttendees}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="registrations">
            <Card>
              <CardHeader>
                <CardTitle>Recent Registrations</CardTitle>
                <CardDescription>
                  View and manage attendee registrations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentRegistrations.map((reg) => (
                      <TableRow key={reg.id}>
                        <TableCell className="font-medium">{reg.name}</TableCell>
                        <TableCell>{reg.email}</TableCell>
                        <TableCell>{reg.event}</TableCell>
                        <TableCell>{getStatusBadge(reg.status)}</TableCell>
                        <TableCell>{reg.date}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            {reg.status === "pending" ? (
                              <>
                                <Button variant="ghost" size="icon" className="text-green-500">
                                  <CheckCircle className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-red-500">
                                  <XCircle className="h-4 w-4" />
                                </Button>
                              </>
                            ) : (
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Dashboard;
