const Header: React.FC = () => {
  return (
    <header className="text-gray-700 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="/logo.svg"
            className="w-12 h-12 text-white p-2 rounded-full"
            alt="FRONTENDCAFE"
          />
          <span className="ml-3 text-xl text-gray-600 font-semibold">
            FRONTEND
          </span>
          <span className="text-xl text-gray-600 font-normal">CAFE</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#events" className="mr-5 hover:text-gray-900">
            Proximos eventos
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
