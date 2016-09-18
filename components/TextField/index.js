import React from 'react'
import Warning from 'react-icons/lib/md/warning'
import styles from './index.scss'

export default props => {
  let {error, width, ...other} = props
  width = width || 150
  const borderBottomColor = error && '#F44336';
  return (
    <div className={styles.container} style={{width}}>
      <input type="text" className={styles.input} style={{width, borderBottomColor}} {...other} />
      { error && (
        <div className={styles['error-container']}>
          <div className={styles['error-text']}>{error}</div>
          <Warning className={styles['error-icon']} />
        </div>
      )}
    </div>
  )
}
