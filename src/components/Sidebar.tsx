import React from 'react';
import {
  Home,
  Search,
  Bell,
  Mail,
  Bookmark,
  User,
  Settings,
  Twitter,
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: Search, label: 'Explore' },
  { icon: Bell, label: 'Notifications' },
  { icon: Mail, label: 'Messages' },
  { icon: Bookmark, label: 'Bookmarks' },
  { icon: User, label: 'Profile' },
  { icon: Settings, label: 'Settings' },
];

export default function Sidebar() {
  return (
    <div className="fixed h-screen w-64 border-r border-gray-200 p-4">
      <div className="flex h-full flex-col">
        <div className="mb-4">
          <Twitter className="h-8 w-8 text-blue-500" />
        </div>
        <nav className="flex-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex w-full items-center gap-4 rounded-full p-3 text-xl hover:bg-gray-100"
            >
              <item.icon size={24} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <button className="w-full rounded-full bg-blue-500 p-3 font-bold text-white hover:bg-blue-600">
          Tweet
        </button>
      </div>
    </div>
  );
}