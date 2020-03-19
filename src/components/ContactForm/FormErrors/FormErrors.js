import React from 'react';
import styles from './formErrors.module.css'

const FormErrors = (props) => {
  return (
    <p className={styles.error}>
      {props.children}
    </p>
  )
}

export default FormErrors;
