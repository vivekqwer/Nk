const express = require('express');
const CommunityPost = require('../models/Community');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Get all posts
router.get('/', async (req, res) => {
  try {
    const { category, search } = req.query;
    
    let query = {};
    if (category) query.category = category;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } }
      ];
    }

    const posts = await CommunityPost.find(query)
      .populate('user', 'fullName avatar')
      .populate('comments.user', 'fullName avatar')
      .sort({ isPinned: -1, createdAt: -1 })
      .limit(50);

    res.json({ posts });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create post
router.post('/', auth, async (req, res) => {
  try {
    const { title, content, category, tags } = req.body;

    const post = new CommunityPost({
      user: req.user._id,
      title,
      content,
      category,
      tags
    });

    await post.save();
    await post.populate('user', 'fullName avatar');

    res.status(201).json({ post });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Like post
router.post('/:postId/like', auth, async (req, res) => {
  try {
    const post = await CommunityPost.findById(req.params.postId);
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const alreadyLiked = post.likes.includes(req.user._id);
    
    if (alreadyLiked) {
      post.likes = post.likes.filter(id => id.toString() !== req.user._id.toString());
    } else {
      post.likes.push(req.user._id);
    }

    await post.save();

    res.json({ 
      liked: !alreadyLiked,
      likeCount: post.likes.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Add comment
router.post('/:postId/comments', auth, async (req, res) => {
  try {
    const post = await CommunityPost.findById(req.params.postId);
    
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    post.comments.push({
      user: req.user._id,
      content: req.body.content
    });

    await post.save();
    await post.populate('comments.user', 'fullName avatar');

    res.json({ comments: post.comments });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
