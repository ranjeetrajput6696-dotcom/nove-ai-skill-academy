import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please provide a valid email address.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email format.');
      return;
    }

    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-10 pt-12 pb-16 md:pb-20" id="newsletter-section">
      <div className="bg-[#e5e2e1] rounded-3xl p-8 md:p-14 flex flex-col md:flex-row gap-10 items-center justify-between" id="newsletter-card">
        
        <div className="flex-1 text-center md:text-left space-y-2" id="newsletter-left">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl text-[#1b1b1c]" id="newsletter-heading">
            Ready to start your journey?
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#434653] leading-relaxed max-w-xl" id="newsletter-paragraph">
            Get exclusive syllabus updates, tech sector career news, and professional advising opportunities delivered to your inbox weekly.
          </p>
        </div>

        <div className="w-full max-w-md flex-shrink-0" id="newsletter-right">
          {isSubscribed ? (
            <div className="bg-[#EFF6FF] border border-[#1E3A8A]/30 p-4 rounded-2xl flex items-center gap-3 text-[#1E3A8A]" id="newsletter-success">
              <CheckCircle size={22} className="text-[#1E3A8A] flex-shrink-0" />
              <div className="space-y-0.5 text-xs">
                <span className="block font-bold">Subscription Configured Successfully</span>
                <span className="opacity-80">You will receive exclusive pathway bulletins starting next Monday!</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2" id="newsletter-active-form">
              <div className="flex flex-col sm:flex-row gap-2" id="newsletter-form-row">
                <input
                  id="newsletter-email-field"
                  type="email"
                  placeholder="Enter your professional email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-5 py-3.5 bg-[#fcf9f8] border border-[#c3c6d5] rounded-full text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] placeholder-[#434653]/50"
                />
                <button
                  id="newsletter-submit-btn"
                  type="submit"
                  className="bg-[#1E3A8A] hover:bg-[#1D4ED8] text-white px-7 py-3.5 rounded-full font-sans font-bold text-xs cursor-pointer transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Send size={13} />
                  Subscribe
                </button>
              </div>
              {error && <p className="text-[10px] font-bold text-red-600 pl-4" id="newsletter-error-msg">{error}</p>}
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
