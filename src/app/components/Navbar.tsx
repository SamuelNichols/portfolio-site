'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    // lets epxplain what each div from a style standpoint
    // this nav uses bg-white shadow-sm to create a white background with a shadow
    // max-w-7x1 helps center the navbar
    // mx-auto px-4 sm:px-6 lg:px-8 helps add padding to the navbar
    // flex justify-between h-16 helps create a flex container with space between the items
    // flex-shrink-0 flex items-center helps create a flex item that shrinks to fit the content
    // text-xl font-bold text-gray-800 helps create a text that is 1xl font size and gray color
    // hidden sm:ml-6 sm:flex sm:space-x-8 helps create a flex item that is hidden on small screens and shows a space between the items
    // in short, you can imagine this as a flex container with a max width, padding, and a flex item that is hidden on small screens and shows a space between the items
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Portfolio
            </Link>
          </div>
          
          {/* Centered navigation items */}
          <div className="hidden sm:flex sm:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map(item => (
              <Link
                key={item.path}
                href={item.path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname === item.path
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Empty div to balance the layout */}
          <div className="flex-shrink-0 w-[88px]"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
