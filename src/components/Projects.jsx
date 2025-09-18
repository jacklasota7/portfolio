import PDFViewer from './PDFViewer';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "HuBMAP Presentation",
      description: "Utilizing data sequencing pipelines to process and output large-scale biological data, along with developing accessible tools for its interpretation",
      technologies: ["Python", "Docker", "Data Visualization", "Processing Pipelines", "User Interface"],
      image: "🔬",
      presentation: "src/assets/HuBMAP_Presentation.pdf",
      pdfUrl: "src/assets/HuBMAP_Presentation.pdf" // Add this when you convert to PDF
    }
  ];

  return (
    <section 
      id="projects" 
      className="min-h-screen py-20 bg-black"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-mono">
            My <span className="text-white">Projects</span>
          </h2>
          <div className="w-32 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono">
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white/5 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 ring-2 ring-white/30 flex flex-col"
            >
              {/* Project Header */}
              <div className="p-4 sm:p-6 border-b border-white/10 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-2 sm:mb-4">
                  <div className="text-4xl mb-2 sm:mb-0">{project.image}</div>
                  <div className="flex-1 w-full">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 font-mono">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed font-mono">
                      {project.description}
                    </p>
                  </div>
                  <div className="bg-white text-black text-xs px-3 py-1 rounded-full font-mono font-semibold whitespace-nowrap mt-2 sm:mt-0">
                    August, 2025
                  </div>
                </div>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-2 sm:mb-4 justify-center sm:justify-start">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Project Links */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
                  <a 
                    href={project.presentation}
                    download
                    className="bg-blue-500 px-6 py-2 border border-white text-white hover:bg-white hover:text-black text-center rounded-lg text-sm font-medium transition-colors duration-200 font-mono"
                  >
                    Download Original
                  </a>
                  <PDFViewer 
                    pdfUrl="/HuBMAP_Presentation_Lasota.pdf"
                    title="View PDF" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
