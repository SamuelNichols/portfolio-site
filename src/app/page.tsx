// this is the home page component
// the general design is a white background with a gray border on the top
// the general content is a hero section with a title, a subtitle, and a button
export default function Home() {
  return (
    <main className="flex-1 bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-4">
        <div className="mx-auto max-w-2xl py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hi, I'm Sam 👋
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I'm a Software Engineer based in Tokyo, passionate about AI and backend development. 
              I love building scalable systems and exploring new technologies, especially in the AI/ML space.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/projects"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Projects
              </a>
              <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                Let's Connect <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">What I Love Doing</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My Focus Areas
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              I enjoy tackling complex challenges and turning ideas into reality through code. 
              Here's what I'm currently excited about:
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:mt-16 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  title: 'Backend Systems',
                  description:
                    'I build robust and scalable backend systems, with a focus on microservices and efficient data pipelines.',
                },
                {
                  title: 'AI & Machine Learning',
                  description:
                    'Currently exploring AI applications in software, particularly interested in generative AI and evolutionary computation.',
                },
                {
                  title: 'Cloud Solutions',
                  description: 'Working with modern cloud technologies to create efficient, scalable architectures.',
                },
              ].map(feature => (
                <div key={feature.title} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {feature.title}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </main>
  );
}
