import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>FRONTENDCAFE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="antialiased">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
