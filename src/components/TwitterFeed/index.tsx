import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from 'react-twitter-embed';

const TwitterFeed: React.FC = () => {
  return (
    <section className="w-full bg-green-500 min-h-screen ">
      <div className="container px-5 py-16 mx-auto">
        <h1 className="text-3xl pb-12 text-white">Comunidad FEC</h1>
        <div className="flex mx-auto">
          <TwitterTweetEmbed
            tweetId={'933354946111705097'}
            options={{
              maxWidth: 500,
            }}
          />
          <TwitterTweetEmbed
            tweetId={'933354946111705097'}
            options={{
              maxWidth: 500,
            }}
          />
          <TwitterTweetEmbed
            tweetId={'933354946111705097'}
            options={{
              maxWidth: 500,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default TwitterFeed;
