import Header from "@/components/Header/Header"
import styles from "./page.module.scss"
import Projects from "@/components/Projects/Projects"
import Tech from "@/components/Tech/Tech"
import About from "@/components/About/About"
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Projects />
      <Tech />
      <About />
      <Footer />
    </main>
  )
}
