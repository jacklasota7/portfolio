import { useState } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };
    emailjs.send(
      'service_cj620nc', // service id
      'template_3djcdnp', // template id
      templateParams,
      '_k4WF6evIzFwxkhZ7' // public key
    )
    .then(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      alert('Oops! Something went wrong. Please try again.');
      // Log full error details for debugging
      if (error && error.text) {
        console.error('EmailJS error:', error.text);
      } else {
        console.error('EmailJS error:', error);
      }
    });
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/jacklasota7', icon: '/github.png' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/jack-lasota-072745302/', icon: '/linkedin.png' },
    { name: 'Instagram', url: 'https://instagram.com/jacklasota77', icon: '/instagram.jpeg' },
    { name: 'Email', url: 'mailto:jjl120@pitt.edu', icon: '/email.jpeg' }
  ];

  return (
    <section 
      id="contact" 
      className="min-h-screen py-20 bg-black"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            Get In <span className="text-white">Touch</span>
          </h2>
          <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
            I'm always interested in hearing about internship and job opportunities, as well as exciting projects. 
            Feel free to reach out if you'd like to collaborate or just want to say hello!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 font-mono">
                Let's Connect
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8 font-mono">
                I'll make sure to get back to you!
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h4 className="text-white font-medium font-mono">Location</h4>
                  <p className="text-gray-300 font-mono">Pittsburgh, PA</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <h4 className="text-white font-medium font-mono">Email</h4>
                  <a href="mailto:jack@example.com" className="text-white hover:text-gray-300 transition-colors font-mono">
                    jjl120@pitt.edu
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <h4 className="text-white font-medium font-mono">Phone</h4>
                  <a href="tel:+1234567890" className="text-white hover:text-gray-300 transition-colors font-mono">
                    (240) 750-5374
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-white font-medium mb-4 font-mono">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-white/20 hover:border-white rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 overflow-hidden"
                  >
                    <img 
                      src={social.icon} 
                      alt={social.name} 
                      className="w-8 h-8 object-contain" 
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/5 rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6 font-mono">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2 font-mono">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 font-mono"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2 font-mono">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 font-mono"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2 font-mono">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 font-mono"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2 font-mono">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 resize-none font-mono"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-white hover:bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg font-mono"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        </div>
      
      {/* Back to Top Button - Floating */}
      <div className="fixed bottom-8 right-8 z-50">
      <a 
          href="#home" 
          className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-white text-white border-2 border-white/100 hover:border-blue-500 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg font-mono text-lg !no-underline"
          title="Back to Top"
        >
          ↑
        </a>
      </div>
    </section>
  );
}

export default Contact;
