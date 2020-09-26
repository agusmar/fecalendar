interface HeaderProps {
  preview: boolean;
}

const Header: React.FC<HeaderProps> = ({ preview }) => {
  return (
    <header className={`text-gray-700 body-font ${preview ? 'pt-10' : ''}`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="/logo.svg"
            className="w-12 h-12 text-white p-2 rounded-full"
            alt="FRONTENDCAFE"
          />
          <span className="ml-1 text-xl text-gray-600 font-semibold">
            FRONTEND
          </span>
          <span className="text-xl text-gray-600 font-normal">CAFE</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#events" className="mr-5 text-gray-600 hover:text-gray-800">
            Eventos
          </a>
          <a
            href="#comunidad"
            className="mr-5 text-gray-600 hover:text-gray-800"
          >
            Comunidad FEC
          </a>

          <span className="hidden md:inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start items-center">
            <a
              target="_blank"
              rel="noreferrer"
              className="ml-3 text-gray-500"
              href="https://twitter.com/FrontEndCafe"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="ml-3 text-gray-500"
              href="https://www.instagram.com/frontendcafe_"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="ml-3 text-gray-500"
              href="https://www.linkedin.com/company/frontendcafe"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
