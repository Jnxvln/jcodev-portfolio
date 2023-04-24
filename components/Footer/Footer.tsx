"use client"
import styles from "./Footer.module.scss";
import { useState } from 'react'
import dayjs from 'dayjs'

export default function Footer () {
  const [year] = useState(dayjs().year())
  return (
    <footer className={styles.footer}>
      &copy; Copyright {year} Justin Cox | All Rights Reserved
    </footer>
  )
}