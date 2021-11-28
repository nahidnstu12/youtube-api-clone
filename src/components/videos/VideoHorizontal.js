import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./_video.module.scss";

export default function VideoHorizontal() {
    return (
      <div className={styles.videoHorizontal}>
        <div xs={6} md={4} className={styles.videoHorizontal__left}>
          <LazyLoadImage
            src="https://i.ytimg.com/an_webp/8MgpE2DTTKA/mqdefault_6s.webp?du=3000&sqp=CJDJ_owG&rs=AOn4CLBIylnWsKperPO9C5WlZLD8JR_VUg"
            effect="blur"
            className={styles.videoHorizontal__thumbnail}
            wrapperClassName={styles.videoHorizontal__thumbnail_wrapper}
          />
          <span className={styles.videoHorizontal__duration}>35.35</span>
        </div>
        <div className={styles.videoHorizontal__right}>
          <p className={styles.videoHorizontal__title}>
            Be a full stack developer in 1 month
          </p>
          <div className={styles.videoHorizontal__channel}>
            <p>Backbench Coder</p>

            <div className={styles.videoHorizontal__details}>
              <AiFillEye /> 2K Views • 10 months ago
            </div>
          </div>
        </div>
      </div>
    );
}
