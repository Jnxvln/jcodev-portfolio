import styles from "./Header.module.scss"

export default function Header () {
  return <>
    <header className={styles.header}>
      <span className={`${styles.title} ${styles.headerWEB}`}>&#123;Web&#125;</span>
      <span className={`${styles.title} ${styles.headerDEVELOPMENT}`}>Development</span>
    </header>
    <div className={styles.spacer}></div>
  </>
}