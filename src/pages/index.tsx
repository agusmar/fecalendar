import { GetStaticProps } from 'next';
import { Event } from '../lib/types';
import { getAllEvents } from '../lib/api';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
import EventList from '../components/EventList';
import TwitterFeed from '../components/TwitterFeed';

interface HomePageProps {
  events: Event[];
  preview: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ events, preview }) => {
  return (
    <Layout preview={preview}>
      <HomeHero />
      <EventList events={events} />
      <TwitterFeed />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const events = await getAllEvents(preview);
  return {
    props: { events, preview },
    revalidate: 1,
  };
};

export default HomePage;
