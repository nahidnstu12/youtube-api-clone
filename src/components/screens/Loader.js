import styles from "./loading.module.scss";

export default function Loader() {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader}>Loading...</div>
    </div>
  );
}
