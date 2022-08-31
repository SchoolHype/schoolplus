import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Button from '../components/Button'
import ScrollIndicator from '../components/ScrollIndicator'
import TextInput from '../components/TextInput'
import styles from '../styles/Home.module.css'

import {toast} from 'react-toastify'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {database} from '../services/firebase'


export default function Home() {

  const [email, setEmail] = useState('')

  const addQuery = () => {
    toast.promise(
      addDoc(collection(database,'schoolplusqueries'), {
          email: email,
          message: 'Coming Soon Enquiry',
          time: serverTimestamp()
      }), 
      {
        pending: 'Adding details to support queue',
        success: 'Added details to support queue',
        error: 'An error occured while adding details to support queue Please try again later or contact us directly'
      }
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>School Plus</title>
        <meta name="description" content="Here you get all that a student needs beyond the schools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>School Plus < br /> All that a student needs beyond the schools</h1>
          <h2 className={styles.mainText}>COMING SOON</h2>
          <h2>Welcome to schoolplus.store</h2>
          <p>
            Schools are essential, <br />
            But schoolplus is vital too.
          </p>

          <div className={styles.notifyInput}>
            <TextInput placeholder={"Enter your email address"} value={email} onChange={e => setEmail(e.target.value)} name="email" />
            <Button onClick={addQuery}>Notify</Button>
          </div>

        </div>
        <ScrollIndicator />
      </main>

      <div className={styles.categoriesSection}>

        <h2>Services Provided by us</h2>

        <div className={styles.categories}>

          <div className={styles.categories_list}>
            <h3>After School Programs</h3>
            <ul>
              <li>Abacus classes</li>
              <li>Vedic Mathematics</li>
              <li>Mathlab</li>
              <li>Handwriting improvement</li>
              <li>Career assessment test</li>
              <li>Career guidance</li>
              <li>College admissions</li>
              <li>Study abroad</li>
              <li>DMIT test</li>
              <li>Psychological counselling</li>
              <li>NLP</li>
              <li>Parenting guidance</li>
            </ul>
          </div>

          <div className={styles.categories_list}>
            <h3>Technology, Wellness and Skill Enhancement</h3>
            <ul>
              <li>Coding for kids</li>
              <li>Robotics</li>
              <li>STEM learning</li>
              <li>Experiential learning</li>
              <li>Communication skills</li>
              <li>Phonics &amp; phonetics</li>
              <li>Storytelling</li>
              <li>Leadership skills</li>
              <li>Diet &amp; nutrition</li>
              <li>Memory &amp; concentration</li>
              <li>Yoga &amp; wellness</li>
            </ul>
          </div>

          <div className={styles.categories_list}>
            <h3>Music and Dance</h3>
            <ul>
              <li>Vocal</li>
              <li>Instrumental</li>
              <li>Classical dance</li>
              <li>Acrobatic dance</li>
            </ul>
          </div>

          <div className={styles.categories_list}>
            <h3>Hobbies</h3>
            <ul>
              <li>Cooking &amp; baking</li>
              <li>Gardening</li>
              <li>Art &amp; craft</li>
            </ul>
          </div>

          <div className={styles.categories_list}>
            <h3>Sports and Games</h3>
            <ul>
              <li>Chess</li>
              <li>Puzzles &amp; Rubix cube</li>
              <li>Card games</li>
              <li>Brainvita</li>
            </ul>
          </div>

          <div className={styles.categories_list}>
            <h3>Coaching and Test Preparation</h3>
            <ul>
              <li>NTSE &amp; KVPY</li>
              <li>IIT-JEE &amp; NEET</li>
              <li>CA &amp; CS Foundation</li>
              <li>CUET</li>
              <li>CLAT</li>
              <li>NDA</li>
              <li>NID/ NIFT/ UCEED</li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  )
}
