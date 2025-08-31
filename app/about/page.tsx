import PageLayout from '../../components/PageLayout';

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            About <span className="text-green-600 dark:text-green-400">Me</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed text-justify">
            I am a 2nd year Student at SRMIST, pursuing a B.Tech in Computer Science and Engineering with a special interest in Artificial Intelligence and Machine Learning. I have a strong passion for web development and enjoy creating beautiful, functional websites and applications.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Skills</h3>
              <p className="text-gray-600 dark:text-gray-300 text-justify">
                Next.js, React, TypeScript, Tailwind CSS, and modern web development tools,Machine learning techniques, and frameworks.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl border border-gray-200 dark:border-gray-600 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Experience</h3>
              <p className="text-gray-600 dark:text-gray-300 text-justify">
                Building this project as part of my portfolio to showcase my skills and projects. I have worked on various web development projects, both personal and academic, and am always looking for new challenges and opportunities to learn and grow.
                I have the ability to quickly learn new technologies and adapt to changing requirements.I have worked with machine learning algorithms and frameworks, and have experience in data analysis and visualization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
