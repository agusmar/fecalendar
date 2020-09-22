import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import EventList from '../components/EventList';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HomeHero />
      <EventList />
    </Layout>
  );
};

export default HomePage;
