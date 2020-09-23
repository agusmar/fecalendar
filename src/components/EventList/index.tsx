import { Event } from '../../lib/types';
import EventPreview from '../EventPreview';

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <section id="events" className="text-gray-700 body-font">
      <div className="container px-5 py-16 mx-auto">
        <h1 className="text-3xl pb-12 text-green-500">Eventos</h1>
        <div className="flex flex-wrap -mx-4 -my-8">
          {events.map((event) => (
            <EventPreview key={event.slug} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventList;
