
import { Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <nav className="flex space-x-6">
        <Button variant="ghost" className="text-gray-400 hover:text-white">
          Overview
        </Button>
        <Button variant="ghost" className="text-gray-400 hover:text-white">
          News
        </Button>
        <Button variant="ghost" className="text-gray-400 hover:text-white">
          Subscriptions
        </Button>
        <Button variant="ghost" className="text-gray-400 hover:text-white">
          Rewards
        </Button>
        <Button variant="ghost" className="text-gray-400 hover:text-white">
          Settings
        </Button>
      </nav>
      
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Search className="h-5 w-5 text-gray-400" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5 text-gray-400" />
        </Button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-600" />
          <span className="text-white">Tomas Brown</span>
        </div>
      </div>
    </header>
  );
}