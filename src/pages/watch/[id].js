import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import WatchScreen from "../../components/screens/WatchScreen";
import request from "../../utils/axios";

export default function video({ data }) {
  const router = useRouter();
  const id = router.query.id;

  // const {videos} = useSelector(state=>state.homeVideos)
  // const selectedVideo = videos?.filter(video => video.id === id)
  // console.log(selectedVideo);
  console.log(data)
  // console.log(query)
  return (
    <div>
      <WatchScreen videoId={id} videoData={data.items[0]} />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  // console.log(ctx.query.id)
  const videoId = ctx.query.id;
  const { data } = await request("/videos", {
    params: {
      part: "snippet,statistics",
      id: videoId,
    },
  });
  // console.log("data" + {data})
  return {
    props: { data },
  };
}
