import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscribedChannels } from "../../redux/actions/videosAction";
import VideoHorizontal from "../../components/videos/VideoHorizontal";
import styles from "../../styles/pages.module.scss";
import { toast } from "react-toastify";
import SkeletonVideo from "../../components/screens/Skeleton";

export default function subscriptions() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubscribedChannels());
  }, [dispatch]);

  const { loading, channelLists, error } = useSelector(
    (state) => state.channelDetails
  );
  // console.log(error?.message?.indexOf("credential."));
  return (
    <div>
      {loading && [...Array(8)].map((_, i) => <SkeletonVideo key={i} />)}

      {!error && !loading ? (
        channelLists?.map((video) => (
          <VideoHorizontal video={video} key={video.id} subScreen />
        ))
      ) : (
        <>
          <p className={styles.error_msg}>
            {error?.message?.substring(0, 133)}
          </p>
          {/* {toast.error(`${error?.status} (${error?.code})`)} */}
        </>
      )}

      <p style={{ display: "none" }}>
        {error && toast.error(`${error.status} (${error.code})`)}
      </p>
    </div>
  );
}
