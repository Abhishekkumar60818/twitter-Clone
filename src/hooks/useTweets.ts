import { useState, useEffect } from 'react';

interface Tweet {
  _id: string;
  content: string;
  author: {
    username: string;
    handle: string;
    avatar: string;
  };
  likes: string[];
  retweets: string[];
  replies: string[];
  createdAt: string;
}

export function useTweets() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTweets();
  }, []);

  const fetchTweets = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tweets');
      if (!response.ok) throw new Error('Failed to fetch tweets');
      const data = await response.json();
      setTweets(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const createTweet = async (content: string, userId: string) => {
    try {
      const response = await fetch('http://localhost:5000/api/tweets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content, userId }),
      });
      if (!response.ok) throw new Error('Failed to create tweet');
      const newTweet = await response.json();
      setTweets(prev => [newTweet, ...prev]);
      return newTweet;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    }
  };

  return { tweets, loading, error, createTweet, refreshTweets: fetchTweets };
}