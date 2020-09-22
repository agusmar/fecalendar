import styles from './styles.module.css';

const HomeHero: React.FC = () => {
  return (
    <>
      <section
        className={`bg-cover text-gray-700 body-font w-screen ${styles.main}`}
      >
        <div className="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
          <img
            className="lg:w-1/6 md:w-2/6 w-3/6 mb-10"
            alt="hero"
            src="/logo.svg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              FrontEndCafé
            </h1>
            <p className="mb-8 leading-relaxed text-gray-300">
              Comunidad tech online.
            </p>
          </div>
        </div>
      </section>

      <section id="discord" className="text-gray-700 body-font w-screen">
        <div
          className={`flex bg-cover bg-fixed px-5 py-16 items-center justify-center flex-wrap ${styles.secondary}`}
        >
          <iframe
            className="lg:w-1/4 lg:min-w-0 sm:min-w-full sm:px-16"
            src="https://discordapp.com/widget?id=594363964499165194&theme=dark"
            width="350"
            height="500"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
          <div className="w-1/3 px-16 lg:min-w-0 sm:min-w-full sm:py-16">
            <h1 className="text-white text-3xl">
              ¡Somos una comunidad abierta de{' '}
              <span className="text-green-500">programación!</span>
            </h1>
            <p className="text-gray-200">
              Aprender a programar es difícil, ¿no? Utilizamos este espacio en
              Discord para aprender en compañía, colaborar en proyectos abiertos
              y conectar con mentores voluntarios.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
