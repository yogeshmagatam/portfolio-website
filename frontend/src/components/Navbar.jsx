import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { useAuth } from '../contexts/AuthContext';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-900/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold gradient-text">
          M Yogesh Vishwanath            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 rounded-md transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-primary-600 dark:text-primary-400 font-medium'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
                        {/* Dark Mode Toggle */}
            <DarkModeToggle />
            
            {/* Admin Links */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/admin/dashboard"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/admin/login"
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                >
                Admin
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 dark:border-gray-700"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded-md transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'text-primary-600 bg-primary-50 font-medium'
                        : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Admin Links */}
                {isAuthenticated ? (
                  <div className="pt-2 border-t border-gray-200">
                    <Link
                      to="/admin/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-gray-600 hover:text-primary-600"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:text-red-700"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link
                    to="/admin/login"
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-gray-600 hover:text-primary-600"
                  >
                    Admin
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;