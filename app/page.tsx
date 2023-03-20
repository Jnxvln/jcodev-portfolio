import Header from "@/components/Header/Header"
import styles from "./page.module.scss"

export default function Home() {
  return (
    <main className={styles.main}>
      <Header title="Jcodev Portfolio" />
      <section>
        <p className={styles.inDevelopment}>This portfolio is currently in development</p>
      </section>
    </main>
  )
}
