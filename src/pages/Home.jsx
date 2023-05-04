import React from 'react'
import Category from '../component/Category'
import styles from '../styles/home.module.css'
import {Slider }from '../component/Slider'
const Home = ({data}) => {
  return (
    <div className={styles.home}>
      <Slider/>
     <Category className={styles.category} data={data}/>
     <Category className={styles.category} data={data}/>
     <Category className={styles.category} data={data}/>
     
    </div>
  )
}

export default Home
