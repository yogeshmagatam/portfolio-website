import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiCalendar, HiUser, HiTag, HiSearch } from 'react-icons/hi';
import { portfolioAPI } from '../services/api';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await portfolioAPI.getBlogPosts();
        setPosts(response.data);
        setFilteredPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    let filtered = posts;

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => 
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    if (selectedTag !== 'All') {
      filtered = filtered.filter(post =>
        post.tags.includes(selectedTag)
      );
    }

    setFilteredPosts(filtered);
  }, [searchTerm, selectedTag, posts]);

  const allTags = ['All', ...new Set(posts.flatMap(p => p.tags))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h1 variants={itemVariants} className="mb-6 text-gray-900 dark:text-white">
              My <span className="gradient-text">Blog</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Thoughts, insights, and tutorials on web development, technology trends, 
              and my journey as a software developer.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            {/* Tag Filter */}
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">No blog posts match your search criteria.</p>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="card hover-lift group"
                >
                  {/* Post Image */}
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Post Meta */}
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <HiCalendar className="mr-1" />
                    <span className="mr-4">{formatDate(post.created_at)}</span>
                    <HiUser className="mr-1" />
                    <span>John Doe</span>
                  </div>

                  {/* Post Title */}
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>

                  {/* Post Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full"
                      >
                        <HiTag className="mr-1" />
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Read More Link */}
                  <a
                    href={`/blog/${post.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                  >
                    Read More →
                  </a>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.h2 variants={itemVariants} className="text-white mb-6">
              Stay Updated
            </motion.h2>
            <motion.p variants={itemVariants} className="text-primary-100 mb-8 text-lg">
              Get notified when I publish new articles about web development, 
              technology trends, and programming tips.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                Subscribe
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Popular Posts */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-center mb-12">
              Popular Posts
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(0, 3).map((post, index) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm line-clamp-2 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">
                      {formatDate(post.created_at)}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;