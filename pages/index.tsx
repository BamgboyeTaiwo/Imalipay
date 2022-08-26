import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../src/component/Navbar'
import Sidebar from '../src/components/Sidebar/Sidebar'
import Overview from '../src/UI/Overview/Overview'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Overview/>
    </div>
  )
}

export default Home
