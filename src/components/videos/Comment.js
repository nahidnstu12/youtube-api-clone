import styles from "./_video.module.scss"
export default function Comment() {
    return (
      <div className={styles.comment}>
        <img
          src="https://yt3.ggpht.com/FUpDMlzjZhQnn0qLqQJrMhEcgjR2lMwATxFzF4I61REL-nZS8uYADWDpa6Eie-bU-cjQUph2ObY=s48-c-k-c0x00ffffff-no-rj"
          alt=""
          className={styles._}
        />
        <div className={styles.comment__body}>
          <p className={styles.comment__header}>test comment • 2 days ago</p>
          <p className={styles._}>
            Wow!!! Looking forward to build it. Your videos are entertaining by
            the way :)
          </p>
        </div>
      </div>
    );
}
