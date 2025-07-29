import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { HiMail, HiPhone, HiLocationMarker, HiCheck } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { portfolioAPI } from '../services/api';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await portfolioAPI.submitContact(data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'john@example.com',
      href: 'mailto:john@example.com'
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com/?q=San+Francisco,+CA'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/johndoe' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/johndoe' },
    { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/johndoe' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.h1 variants={itemVariants} className="mb-6">
              Get In <span className="gradient-text">Touch</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a project in mind? Want to collaborate? Or just want to say hello? 
              I'd love to hear from you. Let's start a conversation!
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="card"
            >
              <motion.h2 variants={itemVariants} className="text-2xl font-semibold mb-6">
                Send a Message
              </motion.h2>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center"
                >
                  <HiCheck className="mr-2" />
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6"
                >
                  Sorry, there was an error sending your message. Please try again.
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="form-error">{errors.name.message}</p>}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="form-error">{errors.email.message}</p>}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject')}
                    className="form-input"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    {...register('message', { required: 'Message is required' })}
                    className={`form-textarea ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Tell me about your project or just say hello..."
                  />
                  {errors.message && <p className="form-error">{errors.message.message}</p>}
                </motion.div>

                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <HiMail className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-semibold mb-6">Let's Connect</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you have a specific project in mind, want to collaborate, 
                  or just want to chat about technology and development, I'd love to hear from you.
                </p>
              </motion.div>

              {/* Contact Details */}
              <motion.div variants={itemVariants} className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.label === 'Location' ? '_blank' : undefined}
                    rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <info.icon className="text-primary-600 text-2xl mr-4 group-hover:scale-110 transition-transform" />
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      <p className="text-gray-900 font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm hover:shadow-md hover:text-primary-600 transition-all"
                    >
                      <social.icon className="text-xl" />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Availability */}
              <motion.div variants={itemVariants} className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-800 mb-2">
                  Currently Available
                </h3>
                <p className="text-primary-700">
                  I'm open to discussing new projects and opportunities. 
                  Response time is typically within 24 hours.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-center mb-12">
              Frequently Asked Questions
            </motion.h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "What's your typical project timeline?",
                  answer: "Project timelines vary based on complexity, but most websites take 2-6 weeks, while larger applications can take 2-4 months. I'll provide a detailed timeline during our initial consultation."
                },
                {
                  question: "Do you work with clients remotely?",
                  answer: "Yes! I work with clients worldwide. I'm experienced in remote collaboration and use modern tools to ensure smooth communication and project management."
                },
                {
                  question: "What's your development process?",
                  answer: "I follow an agile approach with regular check-ins, design mockups, development iterations, testing phases, and deployment. You'll be involved throughout the entire process."
                },
                {
                  question: "Do you provide ongoing support?",
                  answer: "Absolutely! I offer maintenance packages and ongoing support to ensure your website or application continues to run smoothly and stays up-to-date."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card"
                >
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;