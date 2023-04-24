"use client"

import styles from "./Tech.module.scss";
import { useState } from 'react'
import Image from 'next/image';
import logoHTML from "../../assets/images/tech/html5.svg"
import logoCSS from "../../assets/images/tech/css.svg"
import logoJavaScript from "../../assets/images/tech/js.svg"
import logoTypeScript from "../../assets/images/tech/ts.svg"
import logoReact from "../../assets/images/tech/react.svg"
import logoVue from "../../assets/images/tech/vue.svg"
import logoNode from "../../assets/images/tech/node.svg"
import logoExpress from "../../assets/images/tech/express.svg"
import logoMongoDB from "../../assets/images/tech/mongodb.svg"
import logoMongoose from "../../assets/images/tech/mongoose.svg"
import logoPostgreSQL from "../../assets/images/tech/postgresql.svg"
import logoPrisma from "../../assets/images/tech/prisma.svg"


export default function Tech () {

  const [techImages, setTechImages] = useState(
    [
      {
        "id": 1,
        "name": "HTML5",
        "image": logoHTML
      },
      {
        "id": 2,
        "name": "CSS3",
        "image": logoCSS
      },
      {
        "id": 3,
        "name": "JavaScript",
        "image": logoJavaScript
      },
      {
        "id": 4,
        "name": "TypeScript",
        "image": logoTypeScript
      },
      {
        "id": 5,
        "name": "React",
        "image": logoReact
      },
      {
        "id": 6,
        "name": "Vue",
        "image": logoVue
      },
      {
        "id": 7,
        "name": "Node",
        "image": logoNode
      },
      {
        "id": 8,
        "name": "Express",
        "image": logoExpress
      },
      {
        "id": 9,
        "name": "MongoDB",
        "image": logoMongoDB
      },
      {
        "id": 10,
        "name": "Mongoose",
        "image": logoMongoose
      },
      {
        "id": 11,
        "name": "PostgreSQL",
        "image": logoPostgreSQL
      },
      {
        "id": 12,
        "name": "Prisma",
        "image": logoPrisma
      }
    ]
  )

  return (
    <section className={styles.techSection}>
        <svg width="100%" height="100%" className={styles.svgBkg}>
          <text x="10" y="20" style={{ fill: "#2A6195", fontSize: "10rem", opacity: '15%', fontWeight: 'bold' }}>
            <tspan x="0" y="20%">HTML</tspan>
            <tspan x="0" y="53%">CSS</tspan>
            <tspan x="0" y="86%">JS</tspan>
          </text>
        </svg>
        <div className={styles.paddingSection}>
          <header className={styles.header}>
            <h1 className={styles.title}>
              <span className={styles.techT}>T</span>ech
            </h1>
          </header>

          <div className={styles.mainContent}>
            {/* Tech images */}
            <div className={styles.techImageContainer}>
              { techImages.map(tech => (
                  <Image 
                    key={tech.id} 
                    src={tech.image} 
                    alt={tech.name} 
                    title={tech.name}
                    width={30} 
                    height={30}
                    className={styles.techImage} 
                    style={{objectFit: "cover"}}
                  />
              )) }
            </div>

            {/* Description */}
            <p className={styles.description}>
              I use HTML, CSS, JavaScript and TypeScript to build my projects, with MongoDB or
              PostgreSQL databases and a variety of ORMs or ODMs such as PrismaJS and Mongoose.
            </p>
          </div>
        </div>
    </section>
  )
}