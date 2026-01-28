import React from 'react';
import { motion } from 'framer-motion';
import { HiShieldCheck, HiLockClosed, HiEye, HiGlobe, HiUserGroup, HiDocumentText, HiMail, HiRefresh } from 'react-icons/hi';

const Privacy = () => {
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

  const sections = [
    { icon: HiShieldCheck, title: 'Information We Collect', color: 'text-blue-500' },
    { icon: HiEye, title: 'How We Use Your Information', color: 'text-purple-500' },
    { icon: HiLockClosed, title: 'Data Storage and Security', color: 'text-green-500' },
    { icon: HiGlobe, title: 'Cookies and Tracking', color: 'text-orange-500' },
    { icon: HiUserGroup, title: 'Third-Party Services', color: 'text-pink-500' },
    { icon: HiDocumentText, title: 'Your Rights', color: 'text-indigo-500' },
    { icon: HiShieldCheck, title: 'Children\'s Privacy', color: 'text-cyan-500' },
    { icon: HiRefresh, title: 'Changes to This Policy', color: 'text-yellow-500' },
    { icon: HiMail, title: 'Contact Me', color: 'text-red-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full opacity-10 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full opacity-10 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <section className="section-padding relative z-10">
        <div className="container max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Hero Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.div
                className="inline-block p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <HiShieldCheck className="text-5xl text-white" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Last updated: <span className="font-semibold text-gray-900 dark:text-white">January 29, 2026</span>
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {/* Section 1 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <HiShieldCheck className="text-3xl text-blue-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">1. Information We Collect</h2>
                </div>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  When you contact me through this website, I may collect the following information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Message content and any other information you provide in the contact form</li>
                  <li>Technical information such as IP address, browser type, and device information</li>
                </ul>
              </motion.div>

              {/* Section 2 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <HiEye className="text-3xl text-purple-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">2. How We Use Your Information</h2>
                </div>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  I use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>To respond to your inquiries and requests</li>
                  <li>To communicate with you about potential projects or collaborations</li>
                  <li>To improve the website and user experience</li>
                  <li>To analyze website traffic and usage patterns</li>
                </ul>
              </motion.div>

              {/* Section 3 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                    <HiLockClosed className="text-3xl text-green-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">3. Data Storage and Security</h2>
                </div>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  I take the security of your personal information seriously. Your data is:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Stored securely using industry-standard encryption methods</li>
                  <li>Never shared with third parties without your explicit consent</li>
                  <li>Retained only as long as necessary for the purposes outlined above</li>
                  <li>Protected against unauthorized access, alteration, or destruction</li>
                </ul>
              </motion.div>

              {/* Section 4 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                    <HiGlobe className="text-3xl text-orange-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">4. Cookies and Tracking</h2>
                </div>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  This website may use cookies and similar tracking technologies to enhance your browsing experience. 
                  These technologies help me understand how visitors interact with the website and improve its functionality.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  You can control cookie settings through your browser preferences. Note that disabling cookies may 
                  affect some features of the website.
                </p>
              </motion.div>

              {/* Section 5 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-pink-100 dark:bg-pink-900 rounded-lg">
                    <HiUserGroup className="text-3xl text-pink-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">5. Third-Party Services</h2>
                </div>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  This website may integrate with third-party services such as:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Google Analytics for website analytics</li>
                  <li>GitHub for project showcasing</li>
                  <li>LinkedIn and other social media platforms</li>
                </ul>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  These services have their own privacy policies, and I encourage you to review them.
                </p>
              </motion.div>

              {/* Section 6 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <HiDocumentText className="text-3xl text-indigo-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">6. Your Rights</h2>
                </div>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 dark:text-gray-300">
                  <li>Access the personal information I hold about you</li>
                  <li>Request correction of any inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications at any time</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </motion.div>

              {/* Section 7 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-cyan-100 dark:bg-cyan-900 rounded-lg">
                    <HiShieldCheck className="text-3xl text-cyan-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">7. Children's Privacy</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  This website is not intended for children under the age of 13. I do not knowingly collect 
                  personal information from children. If you believe I have collected information from a child, 
                  please contact me immediately.
                </p>
              </motion.div>

              {/* Section 8 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                    <HiRefresh className="text-3xl text-yellow-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">8. Changes to This Policy</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  I may update this Privacy Policy from time to time to reflect changes in my practices or 
                  for legal, operational, or regulatory reasons. The "Last updated" date at the top of this 
                  page indicates when this policy was last revised.
                </p>
              </motion.div>

              {/* Section 9 - Contact */}
              <motion.div 
                className="glass-card p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-2 border-blue-500/20 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                    <HiMail className="text-3xl text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">9. Contact Me</h2>
                </div>
                <p className="mb-6 text-gray-700 dark:text-gray-300">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, 
                  please contact me at:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <HiMail className="text-2xl text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="font-semibold text-gray-900 dark:text-white">yogeshmagatam@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <HiShieldCheck className="text-2xl text-green-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="font-semibold text-gray-900 dark:text-white">+91 6300440153</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <HiUserGroup className="text-2xl text-purple-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="font-semibold text-gray-900 dark:text-white">Hyderabad, Telangana, India</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
