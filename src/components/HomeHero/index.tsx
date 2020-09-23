import styles from './styles.module.css';

const HomeHero: React.FC = () => {
  return (
    <>
      <section className={`bg-cover text-gray-700 body-font ${styles.main}`}>
        <div className="flex bg-cover px-5 py-16 items-center justify-center flex-wrap">
          <div className="md:w-1/3 px-16 lg:min-w-0 sm:min-w-full md:py-16 py-10">
            <h1 className="text-white text-3xl mb-5">
              ¡Somos una comunidad abierta de{' '}
              <span className="text-green-500">programación!</span>
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed">
              Aprender a programar es difícil, ¿no? Utilizamos este espacio en
              Discord para aprender en compañía, colaborar en proyectos abiertos
              y conectar con mentores voluntarios.
            </p>
          </div>
          <iframe
            className="lg:w-1/4 lg:min-w-0 sm:min-w-full sm:px-16"
            src="https://discordapp.com/widget?id=594363964499165194&theme=dark"
            width="350"
            height="450"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
