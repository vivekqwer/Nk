import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../components/MobileNav';
import '../styles/community.css';

function Community() {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');

  const posts = [
    {
      id: 1,
      title: 'Best way to learn guitar chords for beginners?',
      content: 'I just started learning guitar and struggling with chord transitions. Any tips?',
      author: 'John D.',
      avatar: 'J',
      category: 'technique',
      tags: ['guitar', 'chords', 'beginner'],
      likes: 24,
      comments: 8,
      views: 156,
      isPinned: true
    },
    {
      id: 2,
      title: 'Looking for drum practice partners in Mumbai',
      content: 'Anyone interested in jamming together on weekends?',
      author: 'Sarah M.',
      avatar: 'S',
      category: 'collaboration',
      tags: ['drums', 'jam', 'mumbai'],
      likes: 18,
      comments: 12,
      views: 89
    },
    {
      id: 3,
      title: 'Recommendations for jazz piano courses',
      content: 'Looking for good jazz piano courses on Harmony. Any suggestions?',
      author: 'Mike R.',
      avatar: 'M',
      category: 'questions',
      tags: ['piano', 'jazz', 'courses'],
      likes: 15,
      comments: 6,
      views: 72
    },
    {
      id: 4,
      title: 'Just finished my first song! 🎉',
      content: 'After 3 months of learning, I finally wrote my first song. Feedback welcome!',
      author: 'Emma L.',
      avatar: 'E',
      category: 'showcase',
      tags: ['songwriting', 'achievement'],
      likes: 42,
      comments: 15,
      views: 234
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'general', name: 'General' },
    { id: 'technique', name: 'Technique' },
    { id: 'gear', name: 'Gear' },
    { id: 'collaboration', name: 'Collaboration' },
    { id: 'showcase', name: 'Showcase' },
    { id: 'questions', name: 'Questions' }
  ];

  return (
    <div className="community-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/" className="logo">Harmony</Link>
            <div className="nav-links">
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/community" className="active">Community</Link>
            </div>
          </div>
          <div className="nav-right">
            <MobileNav />
            <div className="search-icon">🔍</div>
            <div className="notifications">🔔</div>
            <div className="avatar">A</div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="community-header">
        <div className="section-container">
          <h1>Community</h1>
          <p>Connect with musicians worldwide. Share, learn, grow together.</p>
        </div>
      </section>

      <div className="community-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <button className="create-post-btn primary-button">
            + Create Post
          </button>

          <div className="sidebar-section">
            <h3>Categories</h3>
            <div className="category-list">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-btn ${category === cat.id ? 'active' : ''}`}
                  onClick={() => setCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Popular Tags</h3>
            <div className="tag-cloud">
              <span className="tag">#guitar</span>
              <span className="tag">#piano</span>
              <span className="tag">#jazz</span>
              <span className="tag">#beginner</span>
              <span className="tag">#songwriting</span>
              <span className="tag">#production</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search discussions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="posts-list">
            {posts.map((post) => (
              <div key={post.id} className={`post-card ${post.isPinned ? 'pinned' : ''}`}>
                {post.isPinned && <div className="pinned-badge">📌 Pinned</div>}

                <div className="post-header">
                  <div className="author-info">
                    <div className="avatar">{post.avatar}</div>
                    <div className="author-details">
                      <div className="author-name">{post.author}</div>
                      <div className="post-category">{post.category}</div>
                    </div>
                  </div>
                  <button className="more-btn">•••</button>
                </div>

                <div className="post-content">
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>

                  <div className="post-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag">#{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="post-footer">
                  <div className="post-stats">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                    <span>👁️ {post.views}</span>
                  </div>
                  <button className="join-btn">Join discussion</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Community;
