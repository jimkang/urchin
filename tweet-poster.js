var TwitModule = require('twit');
var conformAsync = require('conform-async');

function createTweetPoster(opts) {
  var Twit = TwitModule;
  var log = console.log;

  if (opts) {
    if (opts.log) {
      log = opts.log;
    }
  }

  var twit = new Twit(opts.twitterConfig);

  function postTweet(text, done) {
    if (opts.dryRun) {
      log('Would have tweeted:', text);
      conformAsync.callBackOnNextTick(done);
    }
    else {
      twit.post(
        'statuses/update',
        {
          status: text
        },
        function tweetDone(twitterError, data, response) {
          if (twitterError) {
            log(twitterError);
            log('data:', data);
          }
          else {
            log('Posted to Twitter:', text);
          }
          done(twitterError);
        }
      );
    }
  }

  return postTweet;
}

module.exports = {
  create: createTweetPoster
};
