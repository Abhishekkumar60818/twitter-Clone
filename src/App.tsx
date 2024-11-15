import React from 'react';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import TweetInput from './components/TweetInput';
import Tweet from './components/Tweet';

// Mock data for frontend-only version
const tweets = [
  {
    author: 'John Doe',
    handle: 'johndoe',
    content: 'Just deployed my first React application! 🚀 #webdev #react',
    timestamp: '2h',
    likes: 42,
    retweets: 12,
    replies: 8,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    author: 'Sarah Johnson',
    handle: 'sarahj',
    content: 'Learning TypeScript has been a game changer for my development workflow. The type safety is incredible! 💪 #typescript #coding',
    timestamp: '4h',
    likes: 128,
    retweets: 24,
    replies: 16,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    author: 'Alex Chen',
    handle: 'alexc',
    content: 'Beautiful morning for some coding! ☕️ Working on a new project using Next.js and Tailwind CSS. What\'s everyone else building?',
    timestamp: '6h',
    likes: 89,
    retweets: 15,
    replies: 21,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="ml-64 mr-80">
        <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 p-4 backdrop-blur-sm">
          <h1 className="text-xl font-bold">Home</h1>
        </header>
        <TweetInput />
        <div className="divide-y divide-gray-200">
          {tweets.map((tweet, index) => (
            <Tweet key={index} {...tweet} />
          ))}
        </div>
      </main>
      <RightSidebar />
    </div>
  );
}

export default App;