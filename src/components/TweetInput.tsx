import React, { useState } from 'react';
import { Image, Send } from 'lucide-react';

export default function TweetInput() {
  const [tweet, setTweet] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle tweet submission
    setTweet('');
  };

  return (
    <form onSubmit={handleSubmit} className="border-b border-gray-200 p-4">
      <div className="flex gap-4">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <textarea
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
            placeholder="What's happening?"
            className="w-full resize-none border-0 bg-transparent text-lg outline-none placeholder:text-gray-500"
            rows={3}
          />
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-blue-500">
              <button type="button" className="rounded-full p-2 hover:bg-blue-50">
                <Image size={20} />
              </button>
            </div>
            <button
              type="submit"
              disabled={!tweet.trim()}
              className="rounded-full bg-blue-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-600 disabled:opacity-50"
            >
              <Send size={18} className="inline" />
              <span className="ml-2">Tweet</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}