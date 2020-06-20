# Description

This repository contains the code of a twitter bot that looks at the twitter stream and finds the ocurrence of a specific set of words. It also applies some filters to avoid the display of undesirable information. The original idea came from a post in the site [Getting a Hey Invite Code using a Twitter Bot]([dev.to](https://dev.to/omarhashimoto/getting-a-hey-invite-code-using-a-twitter-bot-5ao1)). The code is short and most of the work is done by the twitter API. 

# Dependencies
- You need to have node and npm installed (at the time of execution the version I am using is node v14.4.0 and npm 6.14.5). 
- The main dependency here is the package twit. Twit gives node access to the twitter API. For the correct execution of the program you need to subscrite to the twitter developer program and create and application so you can have access to the twitter API. Once an app is created, twitter will give you the information you need to access its API: consumer public key, consumer secret key, access public token and access secret token.

# How to use it

Download the repository and run the following commands:

- npm init
- npm install twit --save

After this, add the keys and token of the app you created from your twitter developer account. Now you will be able to access the twitter stream and find the tweets that are relavant to you. Execute the final instruction:

- node index.js

That's it, enjoy!

# License

MIT 