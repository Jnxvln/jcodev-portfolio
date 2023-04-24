"use client"

import "../../styles/variables.scss";
import { useState } from "react";
import styles from "./Projects.module.scss"
import Project from "./Project/Project";
import GithubLogo from "../../assets/images/github.svg"
import Image from "next/image"
import Project1Img from "../../assets/images/projects/temp-project-1.png"
import Project2Img from "../../assets/images/projects/temp-project-2.png"
import Project3Img from "../../assets/images/projects/temp-project-3.png"
import Project4Img from "../../assets/images/projects/temp-project-4.png"
import Project5Img from "../../assets/images/projects/temp-project-5.png"
import Project6Img from "../../assets/images/projects/temp-project-6.png"

export default function Projects () {

  type Project = {
    id: number,
    title: string,
    thumbnail: string,
    description: string
  }

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "What's The Weather",
      thumbnail: "https://images.pexels.com/photos/5700184/pexels-photo-5700184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A quick weather look-up tool via city or zipcode using HTML, CSS, JavaScript, and NodeJS",
      repoURL: "https://github.com/Jnxvln/chlm2023",
      webURL: "https://www.codecademy.com"
    },
    {
      id: 2,
      title: "Cubic Yards Calculator",
      thumbnail: "https://images.pexels.com/photos/5700184/pexels-photo-5700184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A simple calculator I made using React, HTML, CSS, JavaScript, and SVG",
      repoURL: "https://github.com/Jnxvln/djfinds-nextjs",
      webURL: "https://www.w3schools.com"
    },
    {
      id: 3,
      title: "Nums To Charts",
      thumbnail: "https://images.pexels.com/photos/5700184/pexels-photo-5700184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Take some numbers as data and return charts! Uses React, HTML, CSS, JavaScript, SVG, and more.",
      repoURL: "https://github.com/Jnxvln/chlm2023",
      webURL: "https://www.codecademy.com"
    },
    {
      id: 4,
      title: "Pig Latin Phrases",
      thumbnail: "https://images.pexels.com/photos/5700184/pexels-photo-5700184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Convert an English paragraph to pig latin using React, HTML, CSS, and JavaScript.",
      repoURL: "https://github.com/Jnxvln/djfinds-nextjs",
      webURL: "https://www.w3schools.com"
    },
    {
      id: 5,
      title: "Blog Via API",
      thumbnail: "https://images.pexels.com/photos/5700184/pexels-photo-5700184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A blog whose posts come from an API, using React, HTML, CSS, and JavaScript.",
      repoURL: "https://github.com/Jnxvln/chlm2023",
      webURL: "https://www.codecademy.com"
    },
    {
      id: 6,
      title: "SVG SimpliDraw",
      thumbnail: "https://images.pexels.com/photos/5700184/pexels-photo-5700184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "A tool to draw simple shapes using React, HTML, CSS, and JavaScript.",
      repoURL: "https://github.com/Jnxvln/djfinds-nextjs",
      webURL: "https://www.w3schools.com"
    }
  ])

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
      <div className={styles.projectList}>
        { projects && projects.map(project => (
          <Project key={project.id} id={project.id} title={project.title} description={project.description} thumbnail={project.thumbnail} webURL={project.webURL} repoURL={project.repoURL} />
        )) }
      </div>
    </section>
  )
}