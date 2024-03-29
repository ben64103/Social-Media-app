import NavbarEnd from './NavbarEnd';
import NavbarLogo from './NavbarLogo';
import NavbarStart from './NavbarStart';

const Navigation = () => {
  return (
    <nav className='w-full'>
      <section className='h-14 bg-white flex items-center border-b border-gray-300 shadow-sm'>
        <NavbarLogo />
        <div className='w-full px-4'>
          <div className='navbar-menu flex items-center justify-between w-full'>
            <NavbarStart />
            <NavbarEnd />
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navigation;
