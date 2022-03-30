import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useTransactionsContext } from '../context/transactions'

export default function Home() {
  const { transactions, AddTransaction, setTransactions } = useTransactionsContext()
  const total = transactions?.reduce((total, item) => total + item.points, 0)

 


  async function handleAdd(payer) {
    

    const body = {
      payer: payer,
      points: 1000,
    }

    try {
      const res = await fetch('/api/transactions/addNew', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.status === 200) {
        let session = await res.json()
        AddTransaction(session)
    
      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
    }
  }

  async function handleSpend(points) {
    
    

    let balance = transactions.reduce((total, item) => total + item.points, 0)
    const body = {
      points: points,
      balance: balance,
      transactions
    }

    try {
      const res = await fetch('/api/transactions/spendPoints', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (res.status === 200) {
        let session = await res.json()
        setTransactions(session)
    
      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Fetch Backend Demo</title>
        <meta name="description" content="Fetch Backend Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.fetchrewards.com/">Fetch</a>
        </h1>

        <p className={styles.description}>
          Your total rewards points
          <code className={styles.code}>{total}</code>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Get Rewards Points </h2>
            <p>Click a store to add 1000 rewards points</p>
            <div className={styles.cardImages}>

            
            <div onClick={() => handleAdd("Edgars")}>
              <Image src={"/Edgars.png"} width={50} height={50} />
            </div>
            <div onClick={() => handleAdd("ChickFilA")} >
              <Image src={"/chick-fil-a.png"} width={50} height={50} />
            </div>
            <div onClick={() => handleAdd("Starbucks")} >
              <Image src={"/starbucks.png"} width={50} height={50} />
            </div>
              
            
            
            
            </div>
            
          </div>

          <div className={styles.card}>
            <h2>Spend Points</h2>
            <p>Ready to spend some points ? Choose your favorite</p>

            {transactions && transactions.length >= 1 ?<div className={styles.cardImages}>

            {total < 200 ? null : <div onClick={() => handleSpend(200)}>
              <Image src={"/cupcake.png"} width={50} height={50} />
              <code>200pts</code>
            </div>}

            {total < 1000 ? null :<div onClick={() => handleSpend(1000)}> 
              <Image src={"/sandwich.png"} width={50} height={50} />
              <code>1000pts</code>
            </div> }

            {total < 500 ? null : <div onClick={() => handleSpend(500)}>
              <Image src={"/coffee.png"} width={50} height={50} />
              <code>500pts</code>
            </div>}
            
            
            
            
            
            
            </div> : null}

            
          </div>

          
            <div className={styles.card}>
              <h2>My Rewards Info</h2>
              {transactions && (
                transactions.map((item) => (
                  <div key={item.payer}>
                    <li>{item.payer} - {item.points} - {item.timestamp}</li>
                    
                    
                  </div>
                ))
              )}
            </div>

          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>Fetch Rewards Coding Exercise - Backend Software Engineering Developed by Kimani Walker</code>
          
        </a>
      </footer>
    </div>
  )
}
