import Head from 'next/head'
import styles from '../styles/pages/Buscar.module.css'
import { Form, Input } from '@rocketseat/unform'
import api from '../services/api'
import { useState } from 'react'
import PageHeader from '../components/PageHeader'

export default function buscar() {

  const [userS, setUserS] = useState()

  async function submit(dados) {
    try {
      const user = await (await api.get(`/buscar/${dados.foneNumber}`)).data;
      setUserS(user)
    } catch (error) {
      alert("Usuário não encontrado")
    }

  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader link="/" name="Cadastrar"></PageHeader>
      <main className={styles.main}>

        <Form className={styles.form} onSubmit={submit}>
          <Input name="foneNumber" placeholder="Número de celular" className={styles.input} />
          <button className="enviar" type="submit" className={styles.button}>Buscar</button>

        </Form>

        {userS ?
          <div className={styles.container}>
            <p className={styles.p}>{userS.name}</p>
            {userS.email ? <p className={styles.p}>{userS.email}</p> : null}
            <p className={styles.p}>{userS.foneNumber}</p>
            <p className={styles.p}>{userS.city}</p>
            <p className={styles.p}>{userS.bairro}</p>
            <p className={styles.p}>{userS.rua}</p>
            <p className={styles.p}>{userS.number}</p>
          </div>
          : ''
        }


      </main>

    </div>
  )
}
