
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="block text-center mb-6">
          <h1 className="text-3xl font-bold text-college-purple">CampusEvents</h1>
        </Link>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">
              Sign in to your account to manage events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="email" className="data-[state=active]:bg-college-purple data-[state=active]:text-white">
                  Email
                </TabsTrigger>
                <TabsTrigger value="student-id" className="data-[state=active]:bg-college-purple data-[state=active]:text-white">
                  Student ID
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="email">
                <form>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="your.email@university.edu" type="email" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link to="/forgot-password" className="text-sm text-college-purple hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input id="password" type="password" />
                    </div>
                    <Button type="submit" className="w-full bg-college-purple hover:bg-college-purple/90">
                      Sign In
                    </Button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="student-id">
                <form>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-id">Student ID</Label>
                      <Input id="student-id" placeholder="e.g. S12345678" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="pin">PIN</Label>
                        <Link to="/forgot-pin" className="text-sm text-college-purple hover:underline">
                          Forgot PIN?
                        </Link>
                      </div>
                      <Input id="pin" type="password" />
                    </div>
                    <Button type="submit" className="w-full bg-college-purple hover:bg-college-purple/90">
                      Sign In
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <Button variant="outline">Google</Button>
                <Button variant="outline">Microsoft</Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link to="/signup" className="text-college-purple hover:underline">
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
