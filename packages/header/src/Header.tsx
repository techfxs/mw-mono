import React from "react";

export interface HeaderProps {
  title?: string;
  className?: string;
  showNav?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title = "MW Store",
  className = "",
  showNav = true,
}) => {
  return (
    <header
      className={`bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg ${className}`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between py-4'>
          {/* Logo/Title */}
          <div className='flex items-center space-x-3'>
            <div className='w-10 h-10 bg-white rounded-lg flex items-center justify-center'>
              <span className='text-2xl font-bold text-indigo-600'>M</span>
            </div>
            <h1 className='text-2xl font-bold tracking-tight'>{title}</h1>
          </div>

          {/* Navigation */}
          {showNav && (
            <nav className='hidden md:block'>
              <ul className='flex space-x-8'>
                <li>
                  <a
                    href='/'
                    className='hover:text-indigo-200 transition-colors font-medium'
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='/product'
                    className='hover:text-indigo-200 transition-colors font-medium'
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href='/cart'
                    className='hover:text-indigo-200 transition-colors font-medium'
                  >
                    Cart
                  </a>
                </li>
                <li>
                  <a
                    href='/checkout'
                    className='hover:text-indigo-200 transition-colors font-medium'
                  >
                    Checkout
                  </a>
                </li>
              </ul>
            </nav>
          )}

          {/* Actions */}
          <div className='flex items-center space-x-4'>
            <button className='hidden md:block px-4 py-2 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium'>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
