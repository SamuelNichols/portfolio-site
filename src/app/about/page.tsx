// this is the about page component
// the general design is a white background with a gray border on the top
// the general content is a section with a title, a subtitle, and a list 
// I will later format this according to my resume and projects
export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I am a software engineer with a passion for cybersecurity and building secure applications.
            With years of experience in full-stack development, I focus on creating robust and
            maintainable solutions while ensuring security best practices.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">Experience</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  • Senior Software Engineer at Tech Company (2020-Present)<br />
                  • Full Stack Developer at Startup (2018-2020)<br />
                  • Junior Developer at Agency (2016-2018)
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">Education</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  • BS in Computer Science<br />
                  • Cybersecurity Certifications<br />
                  • Continuous Learning
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">Skills</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  • Full Stack Development<br />
                  • Security Best Practices<br />
                  • Cloud Architecture<br />
                  • CI/CD<br />
                  • Agile Methodologies
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
} 