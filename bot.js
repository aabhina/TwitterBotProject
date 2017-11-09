console.log("Starting the twitter bot");

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);



//Post a tweet
//tweetIt();
//setInterval(tweetIt, 1000*20);

// function tweetIt() {
//   var count = Math.floor(Math.random()*1000);
//   var tweet = {
//     status: 'bot says hello world number ' + count + ' from #node.js !'
//   }
//   function tweeted(err, data, response) {
//     if(err) {
//       console.log('Something went wrong');
//     }
//     else {
//       console.log('Successfully posted the tweet');
//     }
//
//     //console.log(data);
//   }
//
//   T.post('statuses/update', tweet, tweeted);
// }




//Get data back from twitter
// var params = {
//   q: '#trump',
//   count: 2
// }
//
// function gotData(err, data, response) {
//   var tweets = data.statuses;
//   for(var i = 0; i < tweets.length; i++){
//     console.log("Text of the tweet : " + tweets[i].text);
//   }
//   //console.log(data);
// }
//
// T.get('search/tweets', params, gotData);

// T.get('followers/screen_name', { screen_name: 'anshul_abhinav' },  function (err, data, response) {
//   console.log(data.ids);
// });




//Set up a user stream
var stream = T.stream('user');
function followed(event){
  console.log('Follow event happened !! ');
  var screenName = event.source.screen_name;
  tweetBack('@' + screenName + ' thanks for following me !! I am a nodejs bot.');
}
//Anytime someone follows me
stream.on('follow', followed);

function tweetBack(txt) {
  var tweet = {
    status: txt
  }
  function tweeted(err, data, response) {
    if(err) {
      console.log('Something went wrong');
    }
    else {
      console.log('Successfully replied to the follower !!');
    }
  }

  T.post('statuses/update', tweet, tweeted);
}
