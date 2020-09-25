export async function getRecentTweets() {
  const params = 'query=frontendcafe&expansions=in_reply_to_user_id';
  const res = await fetch(
    `https://api.twitter.com/2/tweets/search/recent?${params}`,
    {
      method: 'GET',
      headers: {
        authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      },
    },
  );
  const tweets = await res.json();
  return tweets.data;
}
