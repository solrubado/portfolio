import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { serviceId, templateId, publicKey } = emailjsConfig;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'sol.rubado@gmail.com',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Let's Connect</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a href="mailto:maria.sol.rubado@example.com" className="text-slate-300 hover:text-blue-400 transition-colors">
                    sol.rubado@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <Phone className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <a href="tel:+41123456789" className="text-slate-300 hover:text-blue-400 transition-colors">
                    +41794849123
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-slate-300">Geneva, Switzerland</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/solrubado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/maria-sol-rubado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://twitter.com/solrubado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-700 hover:bg-slate-600 p-3 rounded-lg transition-all duration-300 hover:scale-110"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-blue-600/50 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 hover:scale-105'
                }`}
              >
                <Send size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="text-green-400 text-center mt-4">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-red-400 text-center mt-4">
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;