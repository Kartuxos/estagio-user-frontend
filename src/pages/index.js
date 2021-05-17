import Head from 'next/head'
import styles from '../styles//pages/Home.module.css'
import { Form, Input } from '@rocketseat/unform'
import api from '../services/api'
import PageHeader from '../components/PageHeader'

export default function Home() {

  async function submit(dados) {
    try {
      console.log(dados)
      await api.post('/create', dados)
      window.location.reload()
      alert("Cliente cadastrado")
    } catch (error) {
      alert("Não foi possivel cadastrar o cliente, verifique os dados ou se o mesmo já não está cadastrado")

    }
  }

  return (
    <div>
      <Head>
        <title>Kartuxos e Cia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader link="/buscar" name="Buscar"></PageHeader>
      <main >
        <div className={styles.container}>
          <Form className={styles.form} onSubmit={submit}>
            <Input name="name" placeholder="Nome" className={styles.input} />
            <Input name="email" placeholder="E-mail (Opcional)" className={styles.input} />
            <Input name="foneNumber" placeholder="Celular" className={styles.input} />
            <Input name="city" placeholder="Cidade" className={styles.input} />
            <Input name="bairro" placeholder="Bairro" className={styles.input} />
            <Input name="rua" placeholder="Rua" className={styles.input} />
            <Input name="number" placeholder="Número da casa" className={styles.input} />
            <button className="enviar" type="submit" className={styles.button}>Cadastrar</button>
          </Form>
        </div>


      </main>

    </div>
  )
}
