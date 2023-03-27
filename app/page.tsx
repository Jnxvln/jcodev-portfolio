import Header from "@/components/Header/Header"
import styles from "./page.module.scss"
import Projects from "@/components/Projects/Projects"

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Projects />
    </main>
  )
}
