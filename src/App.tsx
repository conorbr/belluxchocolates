import { useState, useEffect } from 'react';
import { Instagram, Mail, ChevronDown } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #92400e 1px, transparent 0)`,
          backgroundSize: '48px 48px',
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-amber-200/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-light tracking-[0.3em] text-amber-900">
            BELLUX
          </div>
          <div className="flex gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-900 hover:text-amber-700 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 min-h-screen flex flex-col">
        <section className="flex-1 flex items-center justify-center px-6 pt-24 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 inline-block">
              <div className="w-24 h-24 mx-auto mb-6 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-900 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative w-full h-full bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-3xl font-serif text-white">B</span>
                </div>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-light tracking-[0.2em] text-amber-900 mb-6 animate-fade-in">
              BELLUX
            </h1>

            <p className="text-xl md:text-2xl text-amber-800/80 font-light tracking-wide mb-4">
              Chocolates
            </p>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-700 to-transparent mx-auto mb-12" />

            <p className="text-lg md:text-xl text-stone-700 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              Where artisanal craftsmanship meets pure indulgence.
              <br className="hidden md:block" />
              An experience in luxury chocolate, coming soon.
            </p>

            <div className="mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-900/60 mb-6 font-light">
                Launching Spring 2026
              </p>

              {isSubmitted ? (
                <div className="bg-white/60 backdrop-blur-sm border border-amber-300/30 rounded-full px-8 py-4 inline-block shadow-lg">
                  <p className="text-amber-900 font-light">Thank you for joining our journey</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-700/40 group-focus-within:text-amber-700 transition-colors duration-300" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/60 backdrop-blur-sm border border-amber-300/30 rounded-full text-stone-800 placeholder-stone-500 focus:outline-none focus:border-amber-600 focus:bg-white/80 transition-all duration-300 shadow-lg"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-8 py-4 bg-gradient-to-r from-amber-700 to-amber-900 text-white rounded-full font-light tracking-wider hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      Notify Me
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-20">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-amber-800/10 rounded-full blur-md group-hover:bg-amber-800/20 transition-all duration-300" />
                  <div className="relative w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center border border-amber-300/30">
                    <span className="text-2xl">🍫</span>
                  </div>
                </div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-amber-900 mb-2 font-light">Artisanal Craft</h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">Handcrafted with the finest ingredients</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-amber-800/10 rounded-full blur-md group-hover:bg-amber-800/20 transition-all duration-300" />
                  <div className="relative w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center border border-amber-300/30">
                    <span className="text-2xl">✨</span>
                  </div>
                </div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-amber-900 mb-2 font-light">Pure Luxury</h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">An elevated sensory experience</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-amber-800/10 rounded-full blur-md group-hover:bg-amber-800/20 transition-all duration-300" />
                  <div className="relative w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center border border-amber-300/30">
                    <span className="text-2xl">🌿</span>
                  </div>
                </div>
                <h3 className="text-sm uppercase tracking-[0.2em] text-amber-900 mb-2 font-light">Sustainable</h3>
                <p className="text-sm text-stone-600 font-light leading-relaxed">Ethically sourced, responsibly made</p>
              </div>
            </div>
          </div>
        </section>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-amber-700/40" />
        </div>
      </main>

      <footer className="relative z-10 bg-gradient-to-t from-amber-900/5 to-transparent border-t border-amber-200/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-stone-600 font-light tracking-wide">
            © 2025 Bellux Chocolates. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
