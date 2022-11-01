import React from 'react'
import ColunaA from './ColunaA'
import ColunaB from './ColunaB'

import styles from './Wrapper.module.css'

const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <ColunaA />
      <ColunaB />
    </div>
  )
}

export default Wrapper
