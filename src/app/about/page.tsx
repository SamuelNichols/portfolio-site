// this is the about page component
// the general design is a white background with a gray border on the top
// the general content is a section with a title, a subtitle, and a list
// I will later format this according to my resume and projects
import Dropdown from '@/components/Dropdown';

export default function About() {
  return (
    <main className="flex-1 bg-white">
      <div className="container mx-auto px-6 lg:px-8 pt-4 pb-8">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Samuel Nichols
          </h2>
          <div className="mt-2 text-lg text-gray-600">
            <p>samnichols314@gmail.com | 080-9562-1938 | Tokyo, Japan</p>
            <p className="mt-1">
              <a
                href="https://linkedin.com/in/samuelnichols"
                className="text-blue-600 hover:text-blue-800"
              >
                LinkedIn
              </a>
            </p>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-900">Professional Summary</h3>
            <p className="mt-2 text-base leading-7 text-gray-600">
              Software Engineer specializing in backend systems and AI-driven development. 
              Experienced in cloud architecture, microservices, and data pipeline optimization. 
              Passionate about AI/ML and game development. Fluent in English with JLPT N3 Japanese.
            </p>
          </div>
        </div>

        {/* Dropdowns with reduced margins */}
        <div className="space-y-2 pb-8">
          <Dropdown title="Technical Skills" defaultOpen={false}>
            <div className="grid grid-cols-1 gap-y-4 text-center">
              <div>
                <h4 className="text-base font-medium text-gray-900">Programming Languages</h4>
                <p className="mt-1 text-gray-600">Golang, Java, Python, Erlang, Elixir</p>
              </div>

              <div>
                <h4 className="text-base font-medium text-gray-900">Tools & Technologies</h4>
                <p className="mt-1 text-gray-600">
                  Kubernetes, Terraform, Redis, AlloyDB, MySQL, PostgreSQL, React, TensorFlow,
                  PyTorch, Unity, GitHub Actions
                </p>
              </div>

              <div>
                <h4 className="text-base font-medium text-gray-900">Specializations</h4>
                <p className="mt-1 text-gray-600">
                  Backend Development, Game Development, AI Integration, Cloud-native Solutions,
                  CI/CD, Microservices
                </p>
              </div>

              <div>
                <h4 className="text-base font-medium text-gray-900">Languages</h4>
                <p className="mt-1 text-gray-600">
                  English (Fluent), Japanese (JLPT N3 proficiency, ongoing studies)
                </p>
              </div>

              <div>
                <h4 className="text-base font-medium text-gray-900">Areas of Interest</h4>
                <p className="mt-1 text-gray-600">
                  Evolutionary Computation, Generative AI, Autonomous Systems, Artificial Life,
                  Game Design
                </p>
              </div>
            </div>
          </Dropdown>

          <Dropdown title="Professional Experience" defaultOpen={false}>
            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-900">
                Backend Software Engineer | APEX Fintech Solutions
              </h4>
              <p className="text-sm text-gray-500 italic">June 2023 – Apr 2024</p>
              <ul className="mt-2 list-none text-gray-600 space-y-1">
                <li>Migrated legacy trading API to a scalable modern architecture</li>
                <li>Designed efficient data pipelines improving overall system reliability</li>
                <li>Led API transition efforts utilizing versioning and CI/CD methodologies</li>
                <li>
                  <span className="font-medium">Technologies:</span> Golang, Java, Python,
                  Kubernetes, Redis, AlloyDB, MySQL, React
                </li>
              </ul>

              <h4 className="text-lg font-medium text-gray-900">
                Game Development Engineer | Unity Technologies
              </h4>
              <p className="text-sm text-gray-500 italic">Sep 2021 – May 2023</p>
              <ul className="mt-2 list-none text-gray-600 space-y-1">
                <li>Integrated microservices, enhancing scalability and platform performance</li>
                <li>
                  Developed AI-driven prototypes enabling dynamic 3D content generation and adaptive
                  gameplay
                </li>
                <li>
                  Improved cloud infrastructure using Kubernetes, Terraform, and GitHub Actions
                </li>
                <li>
                  Research and implementation of AI techniques in augmented and virtual reality
                  environments
                </li>
                <li>
                  <span className="font-medium">Technologies:</span> Unity, Kubernetes, Terraform,
                  GitHub Actions, TensorFlow, PyTorch
                </li>
              </ul>

              <h4 className="text-lg font-medium text-gray-900">
                Software Engineer | NineFX, Inc.
              </h4>
              <p className="text-sm text-gray-500 italic">Feb 2018 – Sep 2021</p>
              <ul className="mt-2 list-none text-gray-600 space-y-1">
                <li>
                  Developed secure software solutions for government clients, ensuring robust
                  security compliance
                </li>
                <li>Managed relational databases and developed RFCs for system communication</li>
                <li>Mentored junior engineers to foster technical growth and team collaboration</li>
                <li>
                  <span className="font-medium">Technologies:</span> Erlang, Elixir, Java, Python,
                  MariaDB, PostgreSQL
                </li>
              </ul>
            </div>
          </Dropdown>

          <Dropdown title="Education" defaultOpen={false}>
            <div className="text-center">
              <h4 className="text-lg font-medium text-gray-900">University of South Carolina</h4>
              <p className="text-gray-600">B.S. in Computer Science, Cum Laude (2016–2020)</p>
              <ul className="mt-2 list-none text-gray-600 space-y-1">
                <li>GPA: 3.7</li>
                <li>Teaching Assistant in algorithms and system design</li>
              </ul>
            </div>
          </Dropdown>
        </div>
      </div>
    </main>
  );
}
