'use client';
import { useState } from 'react';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  category: 'AI/ML' | 'Backend' | 'Full Stack' | 'Game Dev';
  status: 'Completed' | 'In Progress' | 'Planned';
  link?: string;
  github?: string;
};

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [sort, setSort] = useState<'newest' | 'oldest'>('newest');

  const projects: Project[] = [
    {
      title: 'AI Chess Opponent',
      description: 'A chess engine that learns from your playing style and adapts its strategy. Built with reinforcement learning and neural networks.',
      technologies: ['Python', 'TensorFlow', 'React', 'WebSocket'],
      category: 'AI/ML',
      status: 'In Progress',
      github: 'https://github.com/username/ai-chess',
    },
    {
      title: 'Distributed Task Pipeline',
      description: 'High-performance distributed task processing system handling millions of events per day.',
      technologies: ['Golang', 'Redis', 'Kubernetes', 'gRPC'],
      category: 'Backend',
      status: 'Completed',
      github: 'https://github.com/username/task-pipeline',
    },
    {
      title: 'Evolutionary Art Generator',
      description: 'Generative art system using genetic algorithms to evolve unique visual patterns.',
      technologies: ['TypeScript', 'WebGL', 'React', 'Node.js'],
      category: 'AI/ML',
      status: 'Planned',
    },
    // Add more placeholder projects...
  ];

  const categories = ['all', 'AI/ML', 'Backend', 'Full Stack', 'Game Dev'];
  const filteredProjects = projects
    .filter(project => filter === 'all' || project.category === filter)
    .sort((a, b) => sort === 'newest' ? -1 : 1);

  return (
    <main className="flex-1 bg-white flex flex-col min-h-screen">
      <div className="container mx-auto px-4 lg:px-6 pt-2 pb-2 flex-1">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Projects
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            A collection of things I've built, am building, or plan to build. 
            Take a look around!
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="mt-4 flex flex-wrap gap-3 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium
                  ${filter === category 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as 'newest' | 'oldest')}
            className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900 font-medium hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        {/* Projects Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 flex-1">
          {filteredProjects.map(project => (
            <article
              key={project.title}
              className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-4 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="mt-3 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 flex justify-end gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub →
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    className="text-indigo-600 hover:text-indigo-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
