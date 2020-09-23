import styles from './styles.module.css';

const HomeHero: React.FC = () => {
  return (
    <>
      <section className={`bg-cover text-gray-700 body-font ${styles.main}`}>
        <div className="w-full bg-opacity-50 bg-gradient-to-t from-black">
          <div className="flex bg-cover py-12 items-center justify-between flex-wrap container mx-auto">
            <div className="max-w-2xl lg:min-w-0 sm:min-w-full md:py-16 py-10 text-shadow">
              <h1 className="text-white text-3xl mb-5">
                ¡Welcome to{' '}
                <span className="text-green-500">FrontEndCafé!</span>!
              </h1>
              <p className="text-gray-200 text-lg leading-relaxed">
                Aprender a programar puede ser difícil, entonces creamos un
                espacio en Discord para aprender en compañía y conectar con
                otres humanos que a veces saben más, y a veces saben menos.
                Todos podemos aprender, y todos podemos enseñar.
              </p>
            </div>
            <iframe
              className="w-full md:max-w-sm lg:min-w-0 sm:min-w-full"
              src="https://discordapp.com/widget?id=594363964499165194&theme=dark"
              height="450"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHero;
