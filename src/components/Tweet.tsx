import React from 'react';
import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react';

interface TweetProps {
  author: string;
  handle: string;
  content: string;
  timestamp: string;
  likes: number;
  retweets: number;
  replies: number;
  avatar: string;
}

export default function Tweet({
  author,
  handle,
  content,
  timestamp,
  likes,
  retweets,
  replies,
  avatar,
}: TweetProps) {
  return (
    <article className="border-b border-gray-200 p-4 hover:bg-gray-50">
      <div className="flex gap-4">
        <img
          src={avatar}
          alt={author}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h2 className="font-bold">{author}</h2>
            <span className="text-gray-500">@{handle}</span>
            <span className="text-gray-500">·</span>
            <time className="text-gray-500">{timestamp}</time>
          </div>
          <p className="mt-2 text-gray-900">{content}</p>
          <div className="mt-4 flex justify-between text-gray-500">
            <button className="flex items-center gap-2 hover:text-blue-500">
              <MessageCircle size={18} />
              <span>{replies}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-green-500">
              <Repeat2 size={18} />
              <span>{retweets}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-red-500">
              <Heart size={18} />
              <span>{likes}</span>
            </button>
            <button className="flex items-center gap-2 hover:text-blue-500">
              <Share size={18} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}