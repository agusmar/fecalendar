import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="antialiased">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
