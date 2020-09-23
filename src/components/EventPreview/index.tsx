import { format, isBefore } from 'date-fns';
import BlockContent from '@sanity/block-content-to-react';
import { Event } from '../../lib/types';
import { imageBuilder } from '../../lib/sanity';

interface EventPreviewProps {
  event: Event;
}

const EventPreview: React.FC<EventPreviewProps> = ({ event }) => {
  return (
    <div className="py-8 px-4 lg:w-1/3">
      <div
        className={`h-full flex items-start rounded overflow-hidden shadow-lg flex-col ${
          isBefore(new Date(event.date), new Date()) && 'opacity-50'
        }`}
      >
        <img
          className="w-full"
          src={imageBuilder.image(event.cover.src).width(450).url()}
          alt={event.cover.alt || event.title}
        />
        <div className="flex-grow p-4">
          <div className="w-full flex justify-between">
            <h2 className="tracking-widest text-xs title-font font-medium text-green-500 mb-1 py-2">
              {event.category.name}
            </h2>
          </div>
          <h1 className="title-font text-xl font-medium text-gray-900 mb-2 leading-tight">
            {event.title}
          </h1>
          <p className="title-font font-light text-gray-600 mb-3">
            {format(new Date(event.date), 'MMM d - HH:mm')} ART (GMT-3)
          </p>
          <div className="mb-5">
            <BlockContent blocks={event.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPreview;
