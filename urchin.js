var config = require('./config');
var createTweetPoster = require('./tweet-poster').create;

if (process.argv.length < 3) {
  console.log('Usage: node urchin.js "Tweet text goes here."');
  process.exit();
}

var status = process.argv[2];

var postTweet = createTweetPoster({
  twitterConfig: config.twitter,
  log: console.log
});

postTweet(status, postDone);

function postDone() {
  console.log('Done!');
}
