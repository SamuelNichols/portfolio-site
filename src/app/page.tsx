// this is the home page component
// the general design is a white background with a gray border on the top
// the general content is a hero section with a title, a subtitle, and a button
export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section: above the fold content 
       general design is a white background with a gray border on the top
       general content is a hero section with a title, a subtitle, and a button
      */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Software Engineer & Cybersecurity Specialist
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Passionate about building secure and efficient software solutions.
              Specializing in full-stack development and cybersecurity practices.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/projects"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Contact Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section: this is the section below the hero section
       general design is a gray background with a white border on the top
       general content is a section with a title, a subtitle, and a list of features
      */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Expertise
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What I Do
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Combining software engineering expertise with cybersecurity best practices
              to create robust and secure applications.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  title: 'Software Development',
                  description: 'Full-stack development with modern technologies and best practices.',
                },
                {
                  title: 'Cybersecurity',
                  description: 'Security-first approach to application development and system design.',
                },
                {
                  title: 'Problem Solving',
                  description: 'Analytical mindset for tackling complex technical challenges.',
                },
              ].map((feature) => (
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
    </div>
  );
}
