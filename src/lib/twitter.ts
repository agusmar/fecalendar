export async function getRecentTweets(keyword) {
  const params = `query=from:${keyword}&max_results=11`;
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
