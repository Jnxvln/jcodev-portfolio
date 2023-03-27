import "../../styles/variables.scss";
import styles from "./Projects.module.scss"
import GithubLogo from "../../assets/images/github.svg"
import Image from "next/image"

export default function Projects () {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Justin Cox</h1>
      </header>

      {/* Developer Contact Info */}
      <div className={styles.contactInfo}>
        <div className={styles.githubUsername}>
          <Image src={GithubLogo} width="20" alt="GitHub Logo" className={styles.githubLogo} />
          Jnxvln
        </div>
        <div className={styles.infoSecondary}>903-276-0350</div>
        <div className={styles.infoSecondary}>Justincox.dev@gmail.com</div>
      </div>

      {/* Projects Listing */}
      <div>

      </div>
    </section>
  )
}