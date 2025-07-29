import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiPlus, HiPencil, HiTrash, HiMail, HiEye } from 'react-icons/hi';
import { useAuth } from '../contexts/AuthContext';
import { portfolioAPI } from '../services/api';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      window.location.href = '/admin/login';
      return;
    }
    
    fetchData();
  }, [isAuthenticated]);

  const fetchData = async () => {
    try {
      const [projectsRes, contactsRes] = await Promise.all([
        portfolioAPI.getProjects(),
        portfolioAPI.getContacts()
      ]);
      setProjects(projectsRes.data);
      setContacts(contactsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const tabs = [
    { id: 'projects', name: 'Projects', icon: HiEye },
    { id: 'contacts', name: 'Contact Messages', icon: HiMail }
  ];

  const ProjectForm = ({ project, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
      title: project?.title || '',
      description: project?.description || '',
      technologies: project?.technologies?.join(', ') || '',
      github_url: project?.github_url || '',
      live_url: project?.live_url || '',
      image_url: project?.image_url || '',
      featured: project?.featured || false
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const projectData = {
          ...formData,
          technologies: formData.technologies.split(',').map(t => t.trim())
        };

        if (project) {
          await portfolioAPI.updateProject(project.id, projectData);
        } else {
          await portfolioAPI.createProject(projectData);
        }
        
        await fetchData();
        onSave();
      } catch (error) {
        console.error('Error saving project:', error);
      }
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <h3 className="text-xl font-semibold mb-4">
            {project ? 'Edit Project' : 'Add New Project'}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="form-input"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="form-textarea"
                rows="4"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Technologies (comma-separated)
              </label>
              <input
                type="text"
                value={formData.technologies}
                onChange={(e) => setFormData({...formData, technologies: e.target.value})}
                className="form-input"
                placeholder="React, Node.js, MongoDB"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
              <input
                type="url"
                value={formData.image_url}
                onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                className="form-input"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">GitHub URL</label>
              <input
                type="url"
                value={formData.github_url}
                onChange={(e) => setFormData({...formData, github_url: e.target.value})}
                className="form-input"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Live URL</label>
              <input
                type="url"
                value={formData.live_url}
                onChange={(e) => setFormData({...formData, live_url: e.target.value})}
                className="form-input"
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({...formData, featured: e.target.checked})}
                className="mr-2"
              />
              <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                Featured Project
              </label>
            </div>
            
            <div className="flex space-x-4 pt-4">
              <button type="submit" className="btn-primary">
                Save
              </button>
              <button type="button" onClick={onCancel} className="btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const deleteProject = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await portfolioAPI.deleteProject(id);
        await fetchData();
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    }
  };

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <button
              onClick={logout}
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="mr-2" />
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {activeTab === 'projects' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Manage Projects</h2>
              <button
                onClick={() => setShowModal(true)}
                className="btn-primary flex items-center"
              >
                <HiPlus className="mr-2" />
                Add Project
              </button>
            </div>

            <div className="grid gap-6">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow p-6"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        {project.featured && (
                          <span className="ml-2 px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4 text-sm text-gray-500">
                        {project.github_url && <span>GitHub: ✓</span>}
                        {project.live_url && <span>Live: ✓</span>}
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <button
                        onClick={() => {
                          setEditingItem(project);
                          setShowModal(true);
                        }}
                        className="p-2 text-gray-600 hover:text-primary-600"
                      >
                        <HiPencil />
                      </button>
                      <button
                        onClick={() => deleteProject(project.id)}
                        className="p-2 text-gray-600 hover:text-red-600"
                      >
                        <HiTrash />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Contact Messages</h2>
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="divide-y divide-gray-200">
                {contacts.map((contact) => (
                  <div key={contact.id} className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{contact.name}</h3>
                        <p className="text-gray-600">{contact.email}</p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(contact.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    {contact.subject && (
                      <p className="text-sm font-medium text-gray-700 mb-2">
                        Subject: {contact.subject}
                      </p>
                    )}
                    <p className="text-gray-700">{contact.message}</p>
                  </div>
                ))}
                
                {contacts.length === 0 && (
                  <div className="p-6 text-center text-gray-500">
                    No contact messages yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <ProjectForm
          project={editingItem}
          onSave={() => {
            setShowModal(false);
            setEditingItem(null);
          }}
          onCancel={() => {
            setShowModal(false);
            setEditingItem(null);
          }}
        />
      )}
    </div>
  );
};

export default AdminDashboard;