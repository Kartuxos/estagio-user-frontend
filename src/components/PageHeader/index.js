import Head from 'next/head'
import styles from '../../styles//components/PageHeader.module.css'
import Link from 'next/link'

export default function PageHeader(props) {

  return (
    <div className={styles.container}>

        <h1 className={styles.name}>Kartuxos e cia</h1>

        <a  href={props.link} className={styles.link}>
          <p>{props.name}</p>
          </a>

    </div>
  )
}
