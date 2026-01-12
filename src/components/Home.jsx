function Home() {
  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-black pt-24 sm:pt-16 md:pt-0"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-0 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left side - Text content */}
        <div className="flex-1 text-left max-w-2xl w-full mt-4 sm:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text leading-tight font-mono">
            Hi, I'm <span className="text-white">Jack Lasota</span>
          </h1>
          
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-gray-300 font-mono">
            CompBio @ Pitt
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed font-mono">
            I'm passionate about exploring the intersection of biology, healthcare, and computer science, building technologies that transform data into insights that shape the future of healthcare.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a 
              href="#projects" 
              className="bg-blue-500 px-6 sm:px-8 py-2 sm:py-3 border-2 border-white text-white hover:bg-white hover:text-black hover:border-blue-500 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 font-mono text-center text-sm sm:text-base"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="bg-blue-500 px-6 sm:px-8 py-2 sm:py-3 border-2 border-white text-white hover:bg-white hover:text-black hover:border-blue-500 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 font-mono text-center text-sm sm:text-base"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        {/* Right side - Profile picture */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 p-1 shadow-2xl overflow-hidden">
              <img
                src="/pfp.png"
                className="w-full h-full rounded-full object-cover object-center"
                title="Jack Lasota Profile"
                style={{ border: 'none' }}
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-pulse pointer-events-none"></div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

export default Home;