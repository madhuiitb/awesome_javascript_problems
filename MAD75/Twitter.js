
class Twitter {
    constructor() {
        this.users = [];
        this.tweetCount = 1;
    }
    
    createUser(userId){
       if(!this.users[userId]){
            this.users[userId] = {
                followers:new Set(),
                tweets:[]
            };
        }
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
       this.createUser(userId);
        this.users[userId].tweets.push([tweetId,this.tweetCount++]);
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const userTweets = [...this.users[userId].tweets];
        const followers = [...this.users[userId].followers];
        const followersTweets = [];
        for(let i=0;i<followers.length;i++){
            followersTweets.push(...this.users[followers[i]].tweets);
        }

        const finalTweets = [...userTweets, ...followersTweets];
        finalTweets.sort((a,b)=>b[1]-a[1]);
        const res = []
        for(let j=0; j<Math.min(10,finalTweets.length);j++){
            res.push(finalTweets[j][0]);
        }
        return res;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        this.createUser(followeeId);
        this.createUser(followeeId)
        this.users[followerId].followers.add(followeeId);
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        this.createUser(followeeId);
        this.createUser(followeeId)
        this.users[followeeId].followers.delete(followerId);
    }
    
    getUsers(){
      for(let i=0;i<this.users.length;i++){
        console.log(this.users[i]);
      }
    }
};


const twitter = new Twitter();
twitter.postTweet(1, 10); // User 1 posts a new tweet with id = 10.
twitter.postTweet(2, 20); // User 2 posts a new tweet with id = 20.
twitter.getNewsFeed(1);   // User 1's news feed should only contain their own tweets -> [10].
twitter.getNewsFeed(2);   // User 2's news feed should only contain their own tweets -> [20].
twitter.follow(1, 2);     // User 1 follows user 2.
twitter.getNewsFeed(1);   // User 1's news feed should contain both tweets from user 1 and user 2 -> [20, 10].
twitter.getNewsFeed(2);   // User 2's news feed should still only contain their own tweets -> [20].
twitter.unfollow(1, 2);   // User 1 unfollows user 2.
twitter.getNewsFeed(1); 
twitter.getUsers();
