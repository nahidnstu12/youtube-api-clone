import numeral from "numeral";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentsByVideoId,
} from "../../redux/actions/commentAction";
import Loader from "../screens/Loader";
import Comment from "./Comment";
import styles from "./_video.module.scss";

export default function Comments({ videoId, totalComments }) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getCommentsByVideoId(videoId));
  }, [videoId, dispatch]);

  const { comments, loading } = useSelector((state) => state.commentList);
  const { photoUrl } = useSelector((state) => state.auth?.profile);

  // console.log(loading);
  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  // console.log(_comments)

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;

    dispatch(addComment(videoId, text));

    setText("");
  };
  return (
    <div className={styles.comments}>
      <p>{numeral(totalComments).format("0.a")} comments</p>
      <div className={styles.comments__form}>
        <img src={photoUrl} alt="avatar" className={styles._} />
        <form onSubmit={handleComment} className={styles.form}>
          <input
            type="text"
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button>Comment</button>
        </form>
      </div>
      <div className={styles.comments__list}>
        {loading ? (
          <Loader />
        ) : (
          _comments?.map((comment, i) => <Comment comment={comment} key={i} />)
        )}
      </div>
    </div>
  );
}
