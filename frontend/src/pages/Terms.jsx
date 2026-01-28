import React from 'react';
import { motion } from 'framer-motion';
import { HiDocumentText, HiShieldCheck, HiLightningBolt, HiUserGroup, HiExternalLink, HiCode, HiExclamation, HiScale, HiCog, HiGlobe, HiMail, HiCheckCircle } from 'react-icons/hi';

const Terms = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full opacity-10 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400 dark:bg-pink-600 rounded-full opacity-10 blur-3xl"
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 20,
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
                className="inline-block p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <HiDocumentText className="text-5xl text-white" />
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                Terms of Service
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
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <HiCheckCircle className="text-3xl text-purple-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">1. Acceptance of Terms</h2>
                </div>
                <p>
                  By accessing and using this portfolio website ("the Website"), you accept and agree to be bound 
                  by the terms and provisions of this agreement. If you do not agree to these terms, please do not 
                  use the Website.
                </p>
              </motion.div>

              {/* Section 2 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <HiShieldCheck className="text-3xl text-blue-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">2. Use License</h2>
                </div>
                <p className="mb-4">
                  Permission is granted to temporarily access and view the materials on this Website for personal, 
                  non-commercial purposes. This is the grant of a license, not a transfer of title, and under this 
                  license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials without explicit permission</li>
                  <li>Use the materials for commercial purposes or public display</li>
                  <li>Attempt to reverse engineer any software contained on the Website</li>
                  <li>Remove any copyright or proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or entity</li>
                </ul>
              </motion.div>

              {/* Section 3 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                    <HiCode className="text-3xl text-green-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">3. Intellectual Property</h2>
                </div>
                <p className="mb-4">
                  All content on this Website, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Text, graphics, logos, images, and code</li>
                  <li>Design elements and layout</li>
                  <li>Project descriptions and case studies</li>
                  <li>Custom animations and interactions</li>
                </ul>
                <p className="mt-4">
                  is the property of M Yogesh Vishwanath and is protected by copyright, trademark, and other 
                  intellectual property laws. Unauthorized use of any content may violate copyright, trademark, 
                  and other laws.
                </p>
              </motion.div>

              {/* Section 4 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                    <HiUserGroup className="text-3xl text-yellow-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">4. User Conduct</h2>
                </div>
                <p className="mb-4">
                  When using the contact form or interacting with the Website, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and truthful information</li>
                  <li>Not submit spam, harmful code, or malicious content</li>
                  <li>Not attempt to gain unauthorized access to any systems or data</li>
                  <li>Respect the intellectual property rights of the content</li>
                  <li>Not use the Website for any illegal or unauthorized purpose</li>
                </ul>
              </motion.div>

              {/* Section 5 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900 rounded-lg">
                    <HiExternalLink className="text-3xl text-orange-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">5. Third-Party Links</h2>
                </div>
                <p>
                  This Website may contain links to third-party websites or services (such as GitHub, LinkedIn, 
                  social media platforms) that are not owned or controlled by me. I have no control over, and 
                  assume no responsibility for, the content, privacy policies, or practices of any third-party 
                  websites or services. You acknowledge and agree that I shall not be responsible or liable for 
                  any damage or loss caused by or in connection with the use of such third-party services.
                </p>
              </motion.div>

              {/* Section 6 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-pink-100 dark:bg-pink-900 rounded-lg">
                    <HiLightningBolt className="text-3xl text-pink-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">6. Project Information</h2>
                </div>
                <p>
                  The projects and work samples displayed on this Website are for portfolio purposes. While I 
                  strive to present accurate information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Project details may be simplified or generalized for presentation</li>
                  <li>Some projects may be collaborative efforts or client work</li>
                  <li>Technologies and implementations may have evolved since project completion</li>
                  <li>Results and outcomes may vary based on specific circumstances</li>
                </ul>
              </motion.div>

              {/* Section 7 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                    <HiExclamation className="text-3xl text-red-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">7. Disclaimer of Warranties</h2>
                </div>
                <p>
                  The Website is provided "as is" without any representations or warranties, express or implied. 
                  I make no representations or warranties in relation to this Website or the information and 
                  materials provided. I do not warrant that the Website will be continuously available, 
                  error-free, or free from viruses or other harmful components.
                </p>
              </motion.div>

              {/* Section 8 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
                    <HiScale className="text-3xl text-indigo-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">8. Limitation of Liability</h2>
                </div>
                <p>
                  In no event shall M Yogesh Vishwanath be liable for any indirect, incidental, special, 
                  consequential, or punitive damages, including without limitation, loss of profits, data, 
                  use, goodwill, or other intangible losses resulting from:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Your access to or use of (or inability to access or use) the Website</li>
                  <li>Any conduct or content of any third party on the Website</li>
                  <li>Any content obtained from the Website</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>
              </motion.div>

              {/* Section 9 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-cyan-100 dark:bg-cyan-900 rounded-lg">
                    <HiCog className="text-3xl text-cyan-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">9. Service Agreements</h2>
                </div>
                <p>
                  Any professional services, consulting, or development work will be governed by separate 
                  written agreements. These Terms of Service apply only to the use of this Website and do not 
                  constitute a contract for services.
                </p>
              </motion.div>

              {/* Section 10 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                    <HiDocumentText className="text-3xl text-purple-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">10. Modifications to Terms</h2>
                </div>
                <p>
                  I reserve the right to modify or replace these Terms of Service at any time at my sole 
                  discretion. The most current version will always be posted on this page with the "Last updated" 
                  date. Your continued use of the Website after any changes constitutes acceptance of the new terms.
                </p>
              </motion.div>

              {/* Section 11 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-lg">
                    <HiGlobe className="text-3xl text-teal-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">11. Governing Law</h2>
                </div>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of India, 
                  without regard to its conflict of law provisions. Any disputes arising from these terms or your 
                  use of the Website shall be subject to the exclusive jurisdiction of the courts in Hyderabad, 
                  Telangana, India.
                </p>
              </motion.div>

              {/* Section 12 - Contact */}
              <motion.div 
                className="glass-card p-8 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 border-2 border-purple-500/20 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                    <HiMail className="text-3xl text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">12. Contact Information</h2>
                </div>
                <p className="mb-6 text-gray-700 dark:text-gray-300">
                  If you have any questions about these Terms of Service, please contact me at:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <HiMail className="text-2xl text-purple-500" />
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
                    <HiGlobe className="text-2xl text-pink-500" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="font-semibold text-gray-900 dark:text-white">Hyderabad, Telangana, India</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Section 13 */}
              <motion.div 
                className="glass-card p-8 hover:shadow-2xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <HiCheckCircle className="text-3xl text-blue-500" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">13. Severability</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  If any provision of these Terms of Service is found to be unenforceable or invalid, that 
                  provision will be limited or eliminated to the minimum extent necessary so that these Terms 
                  of Service will otherwise remain in full force and effect.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
