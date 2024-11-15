import React from 'react';
import { Search } from 'lucide-react';

const trends = [
  { topic: 'Technology', tweets: '125K' },
  { topic: 'Programming', tweets: '85K' },
  { topic: 'React', tweets: '65K' },
  { topic: 'TypeScript', tweets: '45K' },
  { topic: 'WebDev', tweets: '35K' },
];

const suggestions = [
  {
    name: 'Sarah Johnson',
    handle: 'sarahj',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Alex Chen',
    handle: 'alexc',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Maria Garcia',
    handle: 'mariag',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

export default function RightSidebar() {
  return (
    <div className="fixed right-0 h-screen w-80 border-l border-gray-200 p-4">
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search Twitter"
            className="w-full rounded-full bg-gray-100 py-3 pl-12 pr-4 outline-none focus:bg-white focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="rounded-xl bg-gray-50 p-4">
        <h2 className="mb-4 text-xl font-bold">Trends for you</h2>
        {trends.map((trend) => (
          <div
            key={trend.topic}
            className="mb-4 cursor-pointer hover:bg-gray-100"
          >
            <p className="font-bold">#{trend.topic}</p>
            <p className="text-sm text-gray-500">{trend.tweets} Tweets</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-gray-50 p-4">
        <h2 className="mb-4 text-xl font-bold">Who to follow</h2>
        {suggestions.map((user) => (
          <div
            key={user.handle}
            className="mb-4 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-10 w-10 rounded-full"
              />
              <div>
                <p className="font-bold">{user.name}</p>
                <p className="text-sm text-gray-500">@{user.handle}</p>
              </div>
            </div>
            <button className="rounded-full bg-black px-4 py-1 text-sm font-bold text-white hover:bg-gray-900">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}