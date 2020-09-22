import { Event } from '../../lib/types';
import EventPreview from '../EventPreview';

const events: Event[] = [
  {
    title: 'Chilling with Florin Pop',
    category: {
      name: 'English & VIP',
    },
    cover: {
      src: '/img/covers/Florin_TW.png',
      alt: 'Chill with Florin',
    },
    date: 'Sep 27 - 14hs Arg (GMT-3)',
    description: `
      El 27/9 a las 2pm Arg (gmt-3), exactamente en 7 días, vamos a
      estar charlando con el Captain Purple 💜 @florinpop1705 en
      @frontendcafe sobre su libro Ten++ Ways to Make Money as a
      Developer! 🤩
    `,
  },
  {
    title: 'Chilling with Florin Pop',
    category: {
      name: 'English & VIP',
    },
    cover: {
      src: '/img/covers/Florin_TW.png',
      alt: 'Chill with Florin',
    },
    date: 'Sep 27 - 14hs Arg (GMT-3)',
    description: `
      El 27/9 a las 2pm Arg (gmt-3), exactamente en 7 días, vamos a
      estar charlando con el Captain Purple 💜 @florinpop1705 en
      @frontendcafe sobre su libro Ten++ Ways to Make Money as a
      Developer! 🤩
    `,
  },
  {
    title: 'Chilling with Florin Pop',
    category: {
      name: 'English & VIP',
    },
    cover: {
      src: '/img/covers/Florin_TW.png',
      alt: 'Chill with Florin',
    },
    date: 'Sep 27 - 14hs Arg (GMT-3)',
    description: `
      El 27/9 a las 2pm Arg (gmt-3), exactamente en 7 días, vamos a
      estar charlando con el Captain Purple 💜 @florinpop1705 en
      @frontendcafe sobre su libro Ten++ Ways to Make Money as a
      Developer! 🤩
    `,
  },
];

const EventList: React.FC = () => {
  return (
    <section id="events" className="text-gray-700 body-font w-screen">
      <div className="container px-5 py-16 mx-auto">
        <h1 className="text-3xl pb-12 text-green-500">Próximos eventos</h1>
        <div className="flex flex-wrap -mx-4 -my-8">
          {events.map((event) => (
            <EventPreview key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventList;
