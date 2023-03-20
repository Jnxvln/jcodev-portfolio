import styles from "./Header.module.scss"

type TTitle = {
  title: string
}

export default function Header ({ title }: TTitle) {
  return <header className={styles.header}>
    <h1>{title}</h1>
  </header>
}