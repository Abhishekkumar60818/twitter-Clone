import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    maxLength: 280
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  retweets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  media: {
    type: String
  },
  replies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tweet'
  }]
}, {
  timestamps: true
});

export default mongoose.model('Tweet', tweetSchema);