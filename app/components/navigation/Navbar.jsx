const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:ml-6 space-x-8">
              <a href="#" className="text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Products
              </a>
              <a href="#" className="text-gray-900 dark:text-white hover:text-gray-500 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 