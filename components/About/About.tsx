import styles from "./About.module.scss";
import dayjs from "dayjs";
import GithubLogoWhite from "../../assets/images/github-white.svg"
import Image from "next/image"

export default function About () {

  const age = dayjs().diff("1988-09-24", "year");

  return (
    <div>
      <section className={styles.sectionContainer}>
        <header>
          <h1 className={styles.headerTitle}>
            <span className={`${styles.title} ${styles.titleA}`}>&gt; who</span>
            <span className={`${styles.title} ${styles.titleB}`}>am</span>
            <span className={`${styles.title} ${styles.titleC}`}>i</span>
          </h1>
        </header>

        <div className={styles.about}>
          <p>My name is Justin, I am {age} years old and I'm a web developer currently living in Texas.</p>
          <p>Aside from programming, I also love to write instrumental music and play video games.</p>
        </div>

        <div className={styles.interests}>
          <div className={styles.interest}></div>
          <div className={styles.interest}></div>
          <div className={styles.interest}></div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.githubUsername}>
          <Image src={GithubLogoWhite} width="20" alt="GitHub Logo" className={styles.githubLogo} />
          Jnxvln
        </div>
        <div className={styles.contactInfo}>
          <div>Justincox.dev@gmail.com</div>
          <div>903-276-0350</div>
          <div>www.domain.com</div>
        </div>
      </footer>
    </div>
  )
}