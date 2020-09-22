const Header: React.FC = () => {
  return (
    <header className="text-gray-700 body-font w-screen">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="/logo.svg" className="w-8" alt="FRONTENDCAFE" />
          <span className="ml-3 text-xl">FRONTENDCAFE</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#discord" className="mr-5 hover:text-gray-900">
            Discord
          </a>
          <a href="#events" className="mr-5 hover:text-gray-900">
            Proximos eventos
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
