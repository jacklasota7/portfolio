function About() {
  return (
    <section
      id="about"
      className="min-h-screen pt-36 pb-20 bg-black"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            About <span className="text-white">Me</span>
          </h2>
          <div className="w-100 h-1 bg-white mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
          {/* Left side - Two Stacked Pictures */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            {/* Top Picture */}
            <div className="relative">
              <div className="w-80 h-56 md:w-96 md:h-64 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 p-1 shadow-2xl overflow-hidden">
                <img
                  src="/board.jpg"
                  alt="Top Image"
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-lg border-2 border-white/20 animate-pulse"></div>
            </div>

            {/* Bottom Picture */}
            <div className="relative">
              <div className="w-80 h-56 md:w-96 md:h-64 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 p-1 shadow-2xl overflow-hidden">
                <img
                  src="/hiking.jpg"
                  alt="Bottom Image"
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-lg border-2 border-white/20 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Right side - About Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white mb-3 font-mono">
              Who I Am
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-mono">
              As I finish my degree in Computational Biology, I've been drawn to the challenge of building and understanding computational tools. Along the way, I've strengthened my programming skills in Python and JAVA through coursework and my HuBMAP internship. To push myself further, I began learning React and built this website from scratch, discovering how much I enjoy the creative side of programming. Looking ahead, I’m excited to grow my skills in software development and apply them to create practical tools that solve real-world problems.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed font-mono">
              I'm a first-generation Polish-American, and my heritage plays a big role in who I am. That's why, in addition to my Computational Biology major, I minored in Polish Studies and even had the chance to study abroad in Kraków, Poland. Outside of academics, I'm happiest outdoors snowboarding, hiking, or playing sports. Baseball was my first love, and as someone from the D.C. area, I'll always be a die-hard Nationals fan (2019 Champs!). When I'm not outside, I'm usually relaxing with a good video game. Right now, I'm hooked on Spider-Man 2 for PS5.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
