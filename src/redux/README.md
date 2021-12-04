### imortant end url

```
-videolists
https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=BD&maxResults=3&key=AIzaSyAJ4uybqEPan5fWxGOX0eAwDsfY2mc6z20

-singleVideo 
https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=um1eZRfgq4E
https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=H9u64nZrxCA

-channel
https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,contentDetails&id=UCtqvtAVmad5zywaziN6CbfA&key=AIzaSyAJ4uybqEPan5fWxGOX0eAwDsfY2mc6z20

-comments 

https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=um1eZRfgq4E&key=AIzaSyAJ4uybqEPan5fWxGOX0eAwDsfY2mc6z20

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json


-relatedVideos
https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=um1eZRfgq4E&type=video&key=AIzaSyAJ4uybqEPan5fWxGOX0eAwDsfY2mc6z20

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json

-subscription
https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=AIzaSyAJ4uybqEPan5fWxGOX0eAwDsfY2mc6z20


Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json

<!-- ck subscription -->UCFM3gG5IHfogarxlKcIHCAg sumit
https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&forChannelId=UCFM3gG5IHfogarxlKcIHCAg&mine=true&key=AIzaSyAJ4uybqEPan5fWxGOX0eAwDsfY2mc6z20

https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&forChannelId=UCFM3gG5IHfogarxlKcIHCAg&channelId=UCFM3gG5IHfogarxlKcIHCAg&key=AIzaSyAJ4uybqEPan5fWxGOX0eAwDsfY2mc6z20

https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=AIzaSyAJ4uybqEPan5fWxGOX0eAwDsfY2mc6z20


<!-- search by keyword -->
https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=nextjs&key=AIzaSyAJ4uybqEPan5fWxGOX0eAwDsfY2mc6z20

<!-- activities --> retuns chanel activity
https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UCtqvtAVmad5zywaziN6CbfA&maxResults=25&key=AIzaSyAJ4uybqEPan5fWxGOX0eAwDsfY2mc6z20


<!-- refreshtoken -->
https://securetoken.googleapis.com/v1/token?key=AIzaSyAJ4uybqEPan5fWxGOX0eAwDsfY2mc6z20&grant_type=refresh_token&refresh_token=

Content-Type: application/x-www-form-urlencoded

<!-- my playlists --> UCB38jc5DTT0UiSB5jGc9S-w / UUB38jc5DTT0UiSB5jGc9S-w
https://youtube.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&mine=true&maxResults=5

https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=5&playlistId=PLRGzrvQzeHIalYB8v8GHD5L-nYzI2NVBM

PLRGzrvQzeHIZFhWSNUVTw9sqYcqkdEldJ
<!-- save playlist -->PL0T0JSh0Xj8FgGuZEr41ye2beYKauECZl
<!-- dont available -->
https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=5&playlistId=PL0T0JSh0Xj8FgGuZEr41ye2beYKauECZl

<!-- liked videos -->
https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like

<!-- liking -->
POST https://www.googleapis.com/youtube/v3/videos/rate
id=um1eZRfgq4E
rating=like

<!-- getRating -->
https://www.googleapis.com/youtube/v3/videos/getRating
```