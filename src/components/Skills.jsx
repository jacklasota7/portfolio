function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen pt-36 pb-20 bg-black"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-mono">
            Technical Skills & <span className="text-white">Coursework</span>
          </h2>
          <div className="w-100 h-1 bg-white mx-auto"></div>
        </div>

        {/* Skills Section - Full Width (exact original structure) */}
        <div className="w-full mb-8">
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <h4 className="text-base font-semibold text-white mb-2 font-mono">Skills</h4>
            <div className="text-gray-300 text-lg font-mono">
              <p>∙Python ∙JAVA ∙Docker ∙UNIX ∙BLAST ∙Genemark ∙Glimmer, Starterator ∙Hhpred, phamerator ∙FUSION</p>
            </div>
          </div>
        </div>

        {/* Relevant Coursework */}
        <div className="w-full">
          <div className="p-6 bg-white/5 rounded-lg border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-4 font-mono">Relevant Coursework</h4>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Computer Science */}
              <div>
                <h5 className="text-white font-medium mb-3 font-mono border-b border-white/20 pb-2">Computer Science</h5>
                <ul className="text-gray-300 text-sm font-mono space-y-2">
                  <li>• Algorithms and Data Structures I & II (JAVA)</li>
                  <li>• Intermediate Programming (JAVA)</li>
                  <li>• Intro To Computing For Scientists</li>
                  <li>• Applied Statistical Methods</li>
                </ul>
              </div>

              {/* Biology & Chemistry */}
              <div>
                <h5 className="text-white font-medium mb-3 font-mono border-b border-white/20 pb-2">Biology & Chemistry</h5>
                <ul className="text-gray-300 text-sm font-mono space-y-2">
                  <li>• Computational Genomics (Python)</li>
                  <li>• Computational Biology</li>
                  <li>• Biochemistry</li>
                  <li>• Organic Chemistry I & II</li>
                  <li>• Genetics</li>
                </ul>
              </div>

              {/* Laboratory Experience */}
              <div className="md:col-span-2">
                <h5 className="text-white font-medium mb-3 font-mono border-b border-white/20 pb-2">Laboratory Experience</h5>
                <ul className="text-gray-300 text-sm font-mono space-y-2">
                  <li>• Foundations of Biology Lab I (Flower Microbiome)</li>
                  <li>• Foundations of Biology Lab II (Viral Genomes)</li>
                </ul>
                <ul className="text-gray-300 text-xs font-mono space-y-1 mt-2 ml-4">
                  <li>- Consolidated and organized laboratory records, ensuring accuracy with established protocols.</li>
                  <li>- Effectively communicated research findings through written reports and presentations.</li>
                  <li>- Utilized advanced bioinformatics methods to analyze genomic data and extract key insights.</li>
                </ul>
              </div>

              {/* Language Studies */}
              <div className="md:col-span-2">
                <h5 className="text-white font-medium mb-3 font-mono border-b border-white/20 pb-2">Language Studies</h5>
                <ul className="text-gray-300 text-sm font-mono space-y-2">
                  <li>• University of Pittsburgh Summer Language Intensive Program</li>
                </ul>
                <ul className="text-gray-300 text-xs font-mono space-y-1 mt-2 ml-4">
                  <li>- Participated in an immersive program for ten weeks, focused on comprehensive Polish language study, cultural immersion, and historical exploration.</li>
                  <li>- Combined rigorous classroom instruction with real-world experience in Poland, allowing for a deeper understanding of both the language and the rich cultural history.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;


