### imortant end url

```
-videolists
https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=BD&maxResults=3&key=AIzaSyAJ4uybqEPan5fWxGOX0eAwDsfY2mc6z20

-singleVideo
https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=um1eZRfgq4E&key=AIzaSyAJ4uybqEPan5fWxGOX0eAwDsfY2mc6z20

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

<!-- ck subscription -->UCtqvtAVmad5zywaziN6CbfA
https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&forChannelId=UCsBjURrPoezykLs9EqgamOA&mine=true&key=AIzaSyAJ4uybqEPan5fWxGOX0eAwDsfY2mc6z20

<!-- search by keyword -->
https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=nextjs&key=AIzaSyAJ4uybqEPan5fWxGOX0eAwDsfY2mc6z20


```