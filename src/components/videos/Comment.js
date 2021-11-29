import moment from "moment";
import styles from "./_video.module.scss"
export default function Comment({comment}) {
   const {
      authorDisplayName,
      authorProfileImageUrl,
      publishedAt,
      textDisplay,
   } = comment
    return (
      <div className={styles.comment}>
        <img src={authorProfileImageUrl} alt="" />
        <div className={styles.comment__body}>
          <p className={styles.comment__header}>
            {authorDisplayName} • {moment(publishedAt).fromNow()}
          </p>
          <p className={styles._}>{textDisplay}</p>
        </div>
      </div>
    );
}
