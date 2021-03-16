# Breakout

## Props

When we pass an object or an array as a prop we are passing the reference to it. This applies as well to functions.

## State

A way to keep track of changes in a component

## Planning a Project Based on Props and State

Identify components, Tweeter example: Profile, TweetForm, TweetList

Then define the component requirements:

Profile - url for picture and a name
Tweetform - event handler for submitting a tweet
Tweetlist - data about the tweets

Then define props and state by each component:

App - no props
* state: tweetData, setTweetData
* state: userData, setUserData

Profile - props: url {string}, name {string}
TweetList - props: tweetData => TweetListItem recieves Tweet through [].map()
TweetForm - no props, state: text, setText

The problem comes from TweetForm needing to submit data to App when a new tweet is sent.

We give setTweetData to Tweetform as a prop to solve this - TweetForm's requirements then become:

TweetForm - props: setTweetData, state: text, setText.

This allows TweetForm to update the state of it's parents. 