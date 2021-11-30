import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscribedChannels } from "../../redux/actions/videosAction";
import VideoHorizontal from "../../components/videos/VideoHorizontal"
import styles from "../../styles/pages.module.scss";


export default function subscriptions() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSubscribedChannels());
    }, [dispatch]);

    const { loading, channelLists } = useSelector(
      (state) => state.channelDetails
    );

    return (
        <div>
            {channelLists?.map(video => 
               <VideoHorizontal video={video} key={video.id} subScreen />
            )}
        </div>
    )
}
