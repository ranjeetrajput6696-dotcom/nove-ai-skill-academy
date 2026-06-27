import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ExternalLink } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !message) {
      setError('Please fill out all required fields.');
      return;
    }

    // Mock successful submission
    setIsSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="py-16 bg-[#fcf9f8] border-t border-[#c3c6d5]/50" id="contact-section">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10" id="contact-container">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3" id="contact-header">
          <h2 className="font-display font-bold text-3xl text-[#1E3A8A]" id="contact-heading">Contact Our Advisors</h2>
          <p className="font-sans text-xs md:text-sm text-[#434653]" id="contact-subheading">
            Have questions about syllabus, enrollment structures, or financial aid partnerships? Talk with us directly.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 bg-white rounded-3xl border border-[#c3c6d5] overflow-hidden premium-card-shadow" id="contact-grid">
          
          {/* Column Left Side: Physical/Digital Metadata Contacts - Takes 2 Columns */}
          <div className="md:col-span-2 bg-[#1E3A8A] text-white p-8 md:p-10 flex flex-col justify-between space-y-8" id="contact-left">
            <div className="space-y-4" id="contact-left-upper">
              <h3 className="font-display font-extrabold text-xl text-white">Admissions Office</h3>
              <p className="font-sans text-xs text-[#bcceff] leading-relaxed">
                Connect with our expert course counselors to outline professional learning pathways corresponding with your tech goals.
              </p>
            </div>

            <div className="space-y-5" id="contact-details-list">
              <a
                href="mailto:admissions@novaaiacademy.com"
                className="flex items-center gap-4 text-xs group/contact hover:opacity-95 transition-all cursor-pointer"
                id="contact-detail-email"
              >
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#06B6D4] flex-shrink-0 group-hover/contact:bg-white/20 transition-colors">
                  <Mail size={16} />
                </span>
                <div>
                  <span className="block font-semibold opacity-75 uppercase text-[9px] tracking-wider">Email Us</span>
                  <span className="font-bold underline decoration-[#06B6D4]/30 group-hover/contact:decoration-[#06B6D4] transition-all decoration-2 underline-offset-2">admissions@novaaiacademy.com</span>
                </div>
              </a>
              <a
                href="tel:+918810449584"
                className="flex items-center gap-4 text-xs group/contact hover:opacity-95 transition-all cursor-pointer"
                id="contact-detail-phone"
              >
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#06B6D4] flex-shrink-0 group-hover/contact:bg-white/20 transition-colors">
                  <Phone size={16} />
                </span>
                <div>
                  <span className="block font-semibold opacity-75 uppercase text-[9px] tracking-wider">Call Directly</span>
                  <span className="font-bold underline decoration-[#06B6D4]/30 group-hover/contact:decoration-[#06B6D4] transition-all decoration-2 underline-offset-2">+91 8810449584</span>
                </div>
              </a>
              <a
                href="https://maps.google.com/?q=A11,+First+Floor+Kamla-Nagar,+Delhi+7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-xs group/contact hover:opacity-95 transition-all cursor-pointer"
                id="contact-detail-location"
              >
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#06B6D4] flex-shrink-0 group-hover/contact:bg-white/20 transition-colors">
                  <MapPin size={16} />
                </span>
                <div>
                  <span className="block font-semibold opacity-75 uppercase text-[9px] tracking-wider">Campus</span>
                  <span className="font-bold underline decoration-[#06B6D4]/30 group-hover/contact:decoration-[#06B6D4] transition-all decoration-2 underline-offset-2">A11, First Floor Kamla-Nagar, Delhi 7</span>
                </div>
              </a>
            </div>

            <div className="border-t border-white/15 pt-6 text-[10px] text-[#bcceff]" id="contact-left-footer">
              Admissions open year-round. Dynamic virtual advising sessions scheduled weekly.
            </div>
          </div>

          {/* Column Right Side: Active interactive form - Takes 3 Columns */}
          <div className="md:col-span-3 p-8 md:p-10" id="contact-right">
            {isSubmitted ? (
              <div className="h-full flex flex-col justify-center items-center text-center space-y-4 py-8" id="contact-success-state">
                <div className="w-14 h-14 bg-[#EFF6FF] border-2 border-[#1E3A8A] rounded-full flex items-center justify-center text-[#1E3A8A] animate-pulse">
                  <CheckCircle size={28} />
                </div>
                <h3 className="font-display font-extrabold text-[#1b1b1c] text-lg">Inquiry Transmitted Successfully</h3>
                <p className="font-sans text-xs text-[#434653] max-w-sm leading-relaxed">
                  Thank you for reaching out! An academic counselor specialized in your chosen pathway will reach out within 24 working hours.
                </p>
                <button
                  id="contact-reset-btn"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-xs font-bold text-[#1E3A8A] hover:underline cursor-pointer focus:outline-none"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="contact-active-form">
                {error && (
                  <div className="p-3 rounded-xl bg-[#ffdad6] text-xs font-semibold text-red-600 border border-[#ba1a1a]/30" id="contact-error-alert">
                    {error}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4" id="contact-form-row-1">
                  <div className="space-y-1.5" id="form-group-contact-name">
                    <label htmlFor="contact-name-field" className="text-[10px] font-bold text-[#434653] uppercase tracking-wide select-none">
                      Your Full Name *
                    </label>
                    <input
                      id="contact-name-field"
                      type="text"
                      placeholder="e.g. Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#fcf9f8] border border-[#c3c6d5] rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                    />
                  </div>
                  <div className="space-y-1.5" id="form-group-contact-email">
                    <label htmlFor="contact-email-field" className="text-[10px] font-bold text-[#434653] uppercase tracking-wide select-none">
                      Email Address *
                    </label>
                    <input
                      id="contact-email-field"
                      type="email"
                      placeholder="e.g. jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-[#fcf9f8] border border-[#c3c6d5] rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5" id="form-group-contact-interest">
                  <label htmlFor="contact-interest-field" className="text-[10px] font-bold text-[#434653] uppercase tracking-wide select-none">
                    Learning Pathway of Interest
                  </label>
                  <select
                    id="contact-interest-field"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#fcf9f8] border border-[#c3c6d5] rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] cursor-pointer"
                  >
                    <option value="General Inquiry">General Admissions Inquiry</option>
                    <option value="AI & Agentic">Generative & Agentic AI Orchestration</option>
                    <option value="Digital Marketing">AI-Driven Digital Marketing</option>
                    <option value="Graphic Design">Professional Graphic Design & Branding</option>
                    <option value="Data Analytics">Data Science & Analytics Pathway</option>
                    <option value="Web Development">Full-Stack Web Development Pathway</option>
                  </select>
                </div>

                <div className="space-y-1.5" id="form-group-contact-message">
                  <label htmlFor="contact-message-field" className="text-[10px] font-bold text-[#434653] uppercase tracking-wide select-none">
                    Brief Counsel Query / Message *
                  </label>
                  <textarea
                    id="contact-message-field"
                    rows={4}
                    placeholder="Tell us about your learning goals and professional timeline..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#fcf9f8] border border-[#c3c6d5] rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] resize-none"
                  ></textarea>
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="w-full py-3.5 bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white rounded-xl font-sans font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  Transmit Advising Request
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Google Map Embed Section */}
        <div className="mt-12 bg-white rounded-3xl border border-[#c3c6d5] overflow-hidden premium-card-shadow" id="campus-map-wrapper">
          <div className="p-6 md:p-8 border-b border-[#c3c6d5]/60 flex flex-col md:flex-row md:items-center justify-between gap-4" id="map-header">
            <div className="space-y-1">
              <h3 className="font-display font-extrabold text-lg text-[#1E3A8A] flex items-center gap-2">
                <MapPin size={18} className="text-[#06B6D4]" />
                Interactive Campus Map
              </h3>
              <p className="font-sans text-xs text-[#434653]">
                Visit us at our premier learning academy in Kamla Nagar, Delhi.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=A11,+First+Floor+Kamla-Nagar,+Delhi+7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#1E3A8A] hover:bg-[#1D4ED8] px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all self-start md:self-auto cursor-pointer"
            >
              Get Directions on Google Maps
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="w-full h-[350px] md:h-[450px] bg-[#f0eded] relative" id="map-iframe-container">
            <iframe
              title="NovaAI Academy Campus Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.9679123846666!2d77.20235377618957!3d28.675640275640523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd80e722c8cb%3A0x6bbf510e11894d8d!2sKamla%20Nagar%2C%20Delhi%2C%20110007!5e0!3m2!1sen!2sin!4v1719480000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
