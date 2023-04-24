"use client"
import react from "react"
import Link from 'next/link';
import styles from "./Project.module.scss";
import Image from "next/image";
import RepoLogo from "../../../assets/images/github.svg"
import WebLogo from "../../../assets/images/globe.svg"
// import { ReactComponent as WebLogo } from "../../../assets/images/globe.svg"


type Project = {
  id: number,
  title: string,
  thumbnail: string,
  description: string,
  repoURL: string,
  webURL: string
}

export default function Project (props: Project) {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image src={props.thumbnail} alt={props.title} fill className={styles.thumbnail} />
        <div className={styles.imageFilter}></div>
      <header className={styles.header}>{props.title}</header>
      <div className={styles.projectButtonsWrapper}>
        <Link href={props.webURL ? props.webURL : ""} target="_blank" rel="noopener">
          <div className={styles.projectButton}>
              <Image src={WebLogo} width={60} height={60} className={styles.logo} alt="" />
          </div>
        </Link>
        <Link href={props.repoURL ? props.repoURL : ""} target="_blank" rel="noopener">
          <div className={styles.projectButton}>
            <Image src={RepoLogo} width={60} height={60} className={styles.logo} alt="" />
          </div>
        </Link>
      </div>
      </div>
      <div className={styles.description}>
        {props.description}
      </div>
    </div>
  )
}