import { Event } from '../../lib/types';

interface EventPreviewProps {
  event: Event;
}

const EventPreview: React.FC<EventPreviewProps> = ({ event }) => {
  return (
    <div className="py-8 px-4 lg:w-1/3">
      <div className="h-full flex items-start rounded overflow-hidden shadow-lg flex-col">
        <img
          className="w-full"
          src={event.cover.src}
          alt={event.cover.alt || event.title}
        />
        <div className="flex-grow p-4">
          <div className="w-full flex justify-between">
            <h2 className="tracking-widest text-xs title-font font-medium text-green-500 mb-1 py-2">
              {event.category.name}
            </h2>
          </div>
          <h1 className="title-font text-xl font-medium text-gray-900">
            {event.title}
          </h1>
          <p className="title-font font-light text-gray-500 mb-3">
            {event.date}
          </p>
          <p className="mb-5">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventPreview;
