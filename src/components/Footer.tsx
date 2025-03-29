// this is the footer component which is used in App.tsx
// the general design is a white background with a gray border on the top
// the max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 is used to center the footer and add padding
// the flex justify-between items-center is used to create a flex container with space between the items
// the text-gray-500 text-sm is used to create a text that is gray color and 1sm font size
// the © {new Date().getFullYear()} Your Name. All rights reserved. is used to create a text that is gray color and 1sm font size
const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* this is the copyright text */}
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Samuel Nichols. All rights reserved.
          </div>
          {/* this is the social media links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/SamuelNichols"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/samnichols359/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              LinkedIn
            </a>
            <a href="mailto:samnichols314@gmail.com" className="text-gray-400 hover:text-gray-500">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
