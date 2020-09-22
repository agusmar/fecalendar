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
            <h2 className="tracking-widest text-xs title-font font-medium text-teal-500 mb-1 py-2">
              {event.category.name}
            </h2>
          </div>
          <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
            {event.title}
          </h1>
          <p className="leading-relaxed mb-5">{event.description}</p>
          <a className="inline-flex items-center">
            <img
              alt="blog"
              src="https://pbs.twimg.com/profile_images/1290848855706271744/cBfu3B3__400x400.jpg"
              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span className="flex-grow flex flex-col pl-3">
              <span className="title-font font-medium text-gray-900">Agus</span>
              <span className="title-font font-light text-gray-500">
                {event.date}
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventPreview;
