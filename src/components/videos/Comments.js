import { useState } from "react";
import Comment from "./Comment";
import styles from "./_video.module.scss"

export default function Comments() {
    const [text, setText] = useState("");
    const handleComment=()=>{}
    return (
      <div className={styles.comments}>
        <p>30 Comments</p>
        <div className={styles.comments__form}>
          <img
            src="https://yt3.ggpht.com/yti/APfAmoE_rJL8D1hbSQfNm2cDMwNbKOp_g7ZloSbrMjSJTQ=s48-c-k-c0x00ffffff-no-rj"
            alt="avatar"
            className={styles._}
          />
          <form onSubmit={handleComment} className={styles.form}>
            <input
              type="text"
              className={styles._}
              placeholder="Write a comment..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button className={styles._}>Comment</button>
          </form>
        </div>
        <div className={styles.comments__list}>
          {[...Array(10)].map((comment, i) => (
            <Comment comment={comment} key={i} />
          ))}
        </div>
      </div>
    );
}
