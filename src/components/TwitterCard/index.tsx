import { TwitterTweetEmbed } from 'react-twitter-embed';

interface TwitterCardProps {
  id: string;
}

const TwitterCard: React.FC<TwitterCardProps> = ({ id }) => {
  return (
    <div className="w-full">
      <TwitterTweetEmbed
        tweetId={id}
        options={{
          conversation: 'none',
          width: '500',
        }}
      />
    </div>
  );
};

export default TwitterCard;
