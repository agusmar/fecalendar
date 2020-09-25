import { Tweets } from '../../lib/types';
import TwitterCard from '../TwitterCard';

interface TwitterFeedProps {
  tweets: Tweets[];
}

const TwitterFeed: React.FC<TwitterFeedProps> = ({ tweets }) => {
  const chunk = (array, size) => {
    const chunked_arr = [];
    let index = 0;
    while (index < array.length) {
      chunked_arr.push(array.slice(index, size + index));
      index += size;
    }
    return chunked_arr;
  };

  const dividedFeed = chunk(tweets, 4);

  const generateColumn = (data: Array<Tweets[]>) =>
    data.map((tweet) => <TwitterCard key={tweet.id} id={tweet.id} />);

  return (
    <section id="comunidad" className="w-full bg-teal-500 min-h-screen pb-24">
      <div className="container px-5 py-16 mx-auto">
        <h1 className="text-3xl pb-12 text-white">Comunidad FEC</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          <div>{generateColumn(dividedFeed[0])}</div>
          <div>{generateColumn(dividedFeed[1])}</div>
          <div>{generateColumn(dividedFeed[2])}</div>
        </div>
      </div>
    </section>
  );
};

export default TwitterFeed;
