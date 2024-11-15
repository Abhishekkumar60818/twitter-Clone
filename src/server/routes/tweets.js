import express from 'express';
import Tweet from '../models/Tweet.js';

const router = express.Router();

// Get all tweets
router.get('/', async (req, res) => {
  try {
    const tweets = await Tweet.find()
      .populate('author', 'username profilePicture')
      .sort({ createdAt: -1 });
    res.json(tweets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create tweet
router.post('/', async (req, res) => {
  const tweet = new Tweet({
    content: req.body.content,
    author: req.body.userId,
    media: req.body.media
  });

  try {
    const newTweet = await tweet.save();
    const populatedTweet = await Tweet.findById(newTweet._id)
      .populate('author', 'username profilePicture');
    res.status(201).json(populatedTweet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Like/Unlike tweet
router.post('/:id/like', async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id);
    if (!tweet.likes.includes(req.body.userId)) {
      await tweet.updateOne({ $push: { likes: req.body.userId }});
      res.json({ message: 'Tweet liked successfully' });
    } else {
      await tweet.updateOne({ $pull: { likes: req.body.userId }});
      res.json({ message: 'Tweet unliked successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;