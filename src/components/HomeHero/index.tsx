import styles from './styles.module.css';

const HomeHero: React.FC = () => {
  return (
    <>
      <section className={`bg-cover text-gray-700 body-font ${styles.main}`}>
        <div className="flex bg-cover py-12 items-center justify-between flex-wrap container mx-auto">
          <div className="max-w-2xl lg:min-w-0 sm:min-w-full md:py-16 py-10">
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
            className="w-full md:max-w-sm lg:min-w-0 sm:min-w-full"
            src="https://discordapp.com/widget?id=594363964499165194&theme=dark"
            height="450"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
