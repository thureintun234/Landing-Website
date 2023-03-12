import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, style = {}, onClick = () => {} }) => {
  return (
    <button style={style} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
