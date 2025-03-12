
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarDays, Ticket, Users, Bell, LogIn } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-college-light flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-college-purple">
              CampusEvents
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-college-dark hover:text-college-purple transition-colors">
              Home
            </Link>
            <Link to="/events" className="text-college-dark hover:text-college-purple transition-colors">
              Events
            </Link>
            <Link to="/categories" className="text-college-dark hover:text-college-purple transition-colors">
              Categories
            </Link>
            <Link to="/dashboard" className="text-college-dark hover:text-college-purple transition-colors">
              Dashboard
            </Link>
          </nav>
          
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-college-dark">
              <Bell className="w-5 h-5" />
            </Button>
            <Link to="/login">
              <Button className="bg-college-purple hover:bg-college-purple/90">
                <LogIn className="w-4 h-4 mr-2" /> Login
              </Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-college-dark text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CampusEvents</h3>
              <p className="text-gray-300">
                Making campus events accessible and manageable for everyone.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="/events" className="text-gray-300 hover:text-white">Events</Link></li>
                <li><Link to="/categories" className="text-gray-300 hover:text-white">Categories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
                <li><Link to="/help" className="text-gray-300 hover:text-white">Help Center</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} CampusEvents. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
