urchin
==================

A super basic command line tweet tool that you can use for your bot. Just shell out to it with the tweet you want to post, and it'll post it.

(If you are comfortable with Node, you're better off just directly using the excellent [twit](https://github.com/ttezel/twit) module in your app.)

Installation
------------

1. Create a new Twitter account for your bot.
2. Temporarily add your mobile number in the Settings (so it'll let you create an app.)
3. Create a Twitter app at [apps.twitter.com](https://apps.twitter.com/).
4. Under the app's Permissions tab, make sure that "Read and Write" is selected.
5. Under Keys and Access Tokens, hit the "Generate Access Token and Secret button.
6. Now, under your bot account's settings, you delete your mobile number, unless you really want texts about replies to your bot.
7. Install the [NodeJS package](https://nodejs.org/).
8. Open a terminal window.
9. Navigate to the directory you want to install this in.
10. Clone this repo.

    git clone git@github.com:jimkang/urchin.git

11. `cd urchin`
12. `npm install`
13. Create a `config.js` file in the project root that contains your [Twitter API keys](https://apps.twitter.com/). Example:

    module.exports = {
      twitter: {
        consumer_key: 'asdfkljqwerjasdfalpsdfjas',
        consumer_secret: 'asdfasdjfbkjqwhbefubvskjhfbgasdjfhgaksjdhfgaksdxvc',
        access_token: '9999999999-zxcvkljhpoiuqwerkjhmnb,mnzxcvasdklfhwer',
        access_token_secret: 'opoijkljsadfbzxcnvkmokwertlknfgmoskdfgossodrh'
      }
    };

Usage
-----

Now you can run it, like so:

    node urchin.js "Hello, this is a tweet! I hope you enjoyed that."

The tweet should be posted on your bot account!

License
-------

MIT.
