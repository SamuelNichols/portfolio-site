// this is the projects page component
export default function Projects() {
  const projects = [
    {
      title: 'Secure E-commerce Platform',
      description: 'Built a full-stack e-commerce platform with advanced security features including OAuth2, JWT, and PCI compliance.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      link: '#',
    },
    {
      title: 'Cybersecurity Dashboard',
      description: 'Developed a real-time security monitoring dashboard for enterprise clients.',
      technologies: ['TypeScript', 'Python', 'Docker', 'Kubernetes'],
      link: '#',
    },
    {
      title: 'API Security Gateway',
      description: 'Implemented a secure API gateway with rate limiting and request validation.',
      technologies: ['Go', 'Redis', 'Nginx', 'OAuth2'],
      link: '#',
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A selection of projects showcasing my expertise in software development and cybersecurity.
          </p>
        </div>

        {/* mapping the projects */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="flex flex-col items-start">
              <div className="w-full">
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href={project.link}
                    className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 