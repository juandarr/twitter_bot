var Twit = require('twit');
// These credential are found once you create an app with your twitter developer account
var T = new Twit({
    consumer_key:         '',
    consumer_secret:      '',
    access_token:         '',
    access_token_secret:  '',
})
var stream = T.stream('statuses/filter', { track: ['hey invite',  '#hey', 'hey.com'] });
console.log('twitter bot started');
var counter = 1;
stream.on('tweet', function (tweet) {
    match_res = tweet.text.match(/\b[A-z0-9]{7}\b/g) //Match seven character strings as a possible code
    match_avoid = tweet.text.includes("RT "); //Match text strings having 'RT ' in its body
    //Only show those tweets that don't include the string to avoid
    if (match_avoid==false) {
        console.log(counter + ". [From: @"+tweet.user.screen_name+"] " + tweet.text);
    }
    // If potential codes are found, show them 
    if (match_res != null) {
        console.log("IMPORTANT: " + match_res)
        console.log("")
    }
    // Tweet counter
    counter = counter + 1;
})
